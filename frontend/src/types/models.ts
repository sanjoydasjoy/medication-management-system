export type MedicineCategory = 'Antibiotic' | 'Cardiac' | 'Pain Relief' | 'Diabetes' | 'Respiratory'

export interface Medicine {
  id: number
  name: string
  genericName: string
  category: MedicineCategory
  dosageForm: string
  strength: string
  stock: number
  refillThreshold: number
  sideEffects: string[]
}

export interface MedicationPlan {
  id: number
  medicineId: number
  medicineName: string
  dosage: string
  frequency: string
  nextDoseAt: string
  durationDays: number
}

export interface DoseLog {
  id: number
  medicineName: string
  plannedAt: string
  status: 'Taken' | 'Missed' | 'Skipped'
}

export interface Doctor {
  id: number
  fullName: string
  speciality: string
  hospital: string
  distanceKm: number
  rating: number
  availableToday: boolean
}

export interface InteractionAlert {
  id: number
  medicineA: string
  medicineB: string
  severity: 'Low' | 'Moderate' | 'High'
  note: string
}
