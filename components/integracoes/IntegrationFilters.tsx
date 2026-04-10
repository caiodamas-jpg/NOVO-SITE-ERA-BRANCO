"use client"

import { Search, ChevronDown, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import {
  allCategories,
  allFeatureLabels,
  type IntegrationCategory,
  type AvailabilityFilter,
} from "@/data/integrations"

interface IntegrationFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedCategories: IntegrationCategory[]
  onCategoriesChange: (categories: IntegrationCategory[]) => void
  selectedFeatures: string[]
  onFeaturesChange: (features: string[]) => void
  availability: AvailabilityFilter
  onAvailabilityChange: (filter: AvailabilityFilter) => void
  resultCount: number
}

export default function IntegrationFilters({
  searchQuery,
  onSearchChange,
  selectedCategories,
  onCategoriesChange,
  selectedFeatures,
  onFeaturesChange,
  availability,
  onAvailabilityChange,
  resultCount,
}: IntegrationFiltersProps) {
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setFeaturesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleCategory = (cat: IntegrationCategory) => {
    if (selectedCategories.includes(cat)) {
      onCategoriesChange(selectedCategories.filter((c) => c !== cat))
    } else {
      onCategoriesChange([...selectedCategories, cat])
    }
  }

  const toggleFeature = (feat: string) => {
    if (selectedFeatures.includes(feat)) {
      onFeaturesChange(selectedFeatures.filter((f) => f !== feat))
    } else {
      onFeaturesChange([...selectedFeatures, feat])
    }
  }

  const hasActiveFilters =
    searchQuery.length > 0 ||
    selectedCategories.length > 0 ||
    selectedFeatures.length > 0 ||
    availability !== "all"

  const clearAll = () => {
    onSearchChange("")
    onCategoriesChange([])
    onFeaturesChange([])
    onAvailabilityChange("all")
  }

  return (
    <div
      id="integration-filters"
      className="sticky top-0 z-40 border-b border-gray-200 py-4 px-6 backdrop-blur-md"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
    >
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Search + availability row */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar por nome..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              aria-label="Buscar integracao por nome"
              className="w-full h-9 pl-10 pr-4 rounded-md border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-zinc-500/50 transition-colors text-sm"
            />
          </div>

          <div className="flex items-center gap-2" role="radiogroup" aria-label="Filtrar por disponibilidade">
            {(
              [
                { value: "all", label: "Todos" },
                { value: "marketplace", label: "Marketplace" },
                { value: "development", label: "Sob consulta" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.value}
                role="radio"
                aria-checked={availability === opt.value}
                onClick={() => onAvailabilityChange(opt.value)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  availability === opt.value
                    ? "bg-[#2b363d] text-white"
                    : "border border-gray-300 text-gray-500 hover:text-gray-900 hover:border-gray-300"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              aria-pressed={selectedCategories.includes(cat)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedCategories.includes(cat)
                  ? "bg-[#2b363d] text-white"
                  : "border border-gray-300 text-gray-500 hover:text-gray-900 hover:border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Features dropdown + clear + count */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setFeaturesOpen(!featuresOpen)}
              aria-expanded={featuresOpen}
              aria-haspopup="listbox"
              className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-300 text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors text-xs font-medium"
            >
              Funcionalidades
              {selectedFeatures.length > 0 && (
                <span className="bg-[#2b363d] text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                  {selectedFeatures.length}
                </span>
              )}
              <ChevronDown
                className={`w-3 h-3 transition-transform ${featuresOpen ? "rotate-180" : ""}`}
              />
            </button>

            {featuresOpen && (
              <div
                role="listbox"
                aria-multiselectable="true"
                className="absolute top-full left-0 mt-1 w-72 rounded-lg border border-gray-300 bg-white shadow-2xl p-2 z-50 max-h-64 overflow-y-auto"
              >
                {allFeatureLabels.map((feat) => (
                  <button
                    key={feat}
                    role="option"
                    aria-selected={selectedFeatures.includes(feat)}
                    onClick={() => toggleFeature(feat)}
                    className={`w-full text-left px-3 py-2 rounded-md text-xs transition-colors ${
                      selectedFeatures.includes(feat)
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {feat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearAll}
              className="flex items-center gap-1 px-3 py-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors"
            >
              <X className="w-3 h-3" />
              Limpar filtros
            </button>
          )}

          <span className="text-xs text-gray-500 ml-auto">
            {resultCount} {resultCount === 1 ? "integracao encontrada" : "integracoes encontradas"}
          </span>
        </div>
      </div>
    </div>
  )
}
