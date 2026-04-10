export function applyPhoneMask(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function sanitizePhone(masked: string): string {
  const digits = masked.replace(/\D/g, "")
  if (digits.startsWith("55") && digits.length >= 12) return digits
  return `55${digits}`
}

// CNPJ mask: XX.XXX.XXX/XXXX-XX (supports alphanumeric from 2026)
export function applyCnpjMask(value: string): string {
  // Allow letters and numbers (alfanumérico 2026+)
  const clean = value.replace(/[^a-zA-Z0-9]/g, "").slice(0, 14).toUpperCase()
  if (clean.length <= 2) return clean
  if (clean.length <= 5) return `${clean.slice(0, 2)}.${clean.slice(2)}`
  if (clean.length <= 8) return `${clean.slice(0, 2)}.${clean.slice(2, 5)}.${clean.slice(5)}`
  if (clean.length <= 12) return `${clean.slice(0, 2)}.${clean.slice(2, 5)}.${clean.slice(5, 8)}/${clean.slice(8)}`
  return `${clean.slice(0, 2)}.${clean.slice(2, 5)}.${clean.slice(5, 8)}/${clean.slice(8, 12)}-${clean.slice(12)}`
}

export function sanitizeCnpj(masked: string): string {
  return masked.replace(/[^a-zA-Z0-9]/g, "").toUpperCase()
}

// Validate CNPJ: 14 chars, last 2 must be numeric, no repeated chars
export function validateCnpj(value: string): boolean {
  const clean = value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase()
  if (clean.length !== 14) return false

  // Last 2 digits must be numeric (dígitos verificadores)
  const lastTwo = clean.slice(12)
  if (!/^\d{2}$/.test(lastTwo)) return false

  // No all-same characters (e.g., 00000000000000, AAAAAAAAAAAAAA)
  if (/^(.)\1+$/.test(clean)) return false

  // For numeric-only CNPJs, validate check digits
  if (/^\d{14}$/.test(clean)) {
    return validateCnpjCheckDigits(clean)
  }

  // Alphanumeric CNPJs (2026+): basic structure is valid
  return true
}

function validateCnpjCheckDigits(cnpj: string): boolean {
  const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

  let sum = 0
  for (let i = 0; i < 12; i++) sum += parseInt(cnpj[i]) * weights1[i]
  let remainder = sum % 11
  const digit1 = remainder < 2 ? 0 : 11 - remainder

  if (parseInt(cnpj[12]) !== digit1) return false

  sum = 0
  for (let i = 0; i < 13; i++) sum += parseInt(cnpj[i]) * weights2[i]
  remainder = sum % 11
  const digit2 = remainder < 2 ? 0 : 11 - remainder

  return parseInt(cnpj[13]) === digit2
}

// Validate no repeated numbers (e.g., 1111111111)
export function hasRepeatedChars(value: string): boolean {
  const clean = value.replace(/\D/g, "")
  if (clean.length < 4) return false
  return /^(.)\1+$/.test(clean)
}

// Validate no repeated letters in name
export function hasRepeatedLetters(value: string): boolean {
  const clean = value.replace(/\s/g, "").toLowerCase()
  if (clean.length < 3) return false
  return /^(.)\1+$/.test(clean)
}
