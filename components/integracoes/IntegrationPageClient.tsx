"use client"

import { useState, useMemo, useCallback, useEffect, useRef } from "react"
import {
  integrations,
  featureFilterMap,
  type IntegrationCategory,
  type AvailabilityFilter,
} from "@/data/integrations"
import IntegrationHero from "./IntegrationHero"
import IntegrationFilters from "./IntegrationFilters"
import IntegrationGrid from "./IntegrationGrid"
import IntegrationCTA from "./IntegrationCTA"
import IntegrationFAQ from "./IntegrationFAQ"

export default function IntegrationPageClient() {
  const [searchQuery, setSearchQuery] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<IntegrationCategory[]>([])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [availability, setAvailability] = useState<AvailabilityFilter>("all")
  const debounceRef = useRef<ReturnType<typeof setTimeout>>()

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => setDebouncedSearch(query), 300)
  }, [])

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [])

  const filtered = useMemo(() => {
    return integrations.filter((item) => {
      // Search filter
      if (debouncedSearch) {
        const q = debouncedSearch.toLowerCase()
        if (!item.name.toLowerCase().includes(q)) return false
      }

      // Category filter
      if (selectedCategories.length > 0) {
        if (!selectedCategories.includes(item.category)) return false
      }

      // Feature filter
      if (selectedFeatures.length > 0) {
        const matches = selectedFeatures.every((filterLabel) => {
          const keywords = featureFilterMap[filterLabel] || []
          return keywords.some((kw) =>
            item.features.some((f) => f.toLowerCase().includes(kw.toLowerCase()))
          )
        })
        if (!matches) return false
      }

      // Availability filter
      if (availability === "marketplace") {
        if (item.omnichannel !== 2 && item.pabx !== 2) return false
      } else if (availability === "development") {
        if (item.omnichannel === 2 || item.pabx === 2) return false
      }

      return true
    })
  }, [debouncedSearch, selectedCategories, selectedFeatures, availability])

  return (
    <>
      <IntegrationHero onSearch={handleSearchChange} />
      <IntegrationFilters
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        selectedCategories={selectedCategories}
        onCategoriesChange={setSelectedCategories}
        selectedFeatures={selectedFeatures}
        onFeaturesChange={setSelectedFeatures}
        availability={availability}
        onAvailabilityChange={setAvailability}
        resultCount={filtered.length}
      />
      <IntegrationGrid integrations={filtered} />
      <IntegrationFAQ />
      <IntegrationCTA />
    </>
  )
}
