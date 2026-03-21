import type { Doctor, DoseLog, InteractionAlert, MedicationPlan, Medicine } from '../types/models'

export const medicines: Medicine[] = [
  {
    id: 1,
    name: 'Amoxicillin',
    genericName: 'Amoxicillin Trihydrate',
    category: 'Antibiotic',
    dosageForm: 'Capsule',
    strength: '500mg',
    stock: 52,
    refillThreshold: 20,
    sideEffects: ['Nausea', 'Rash'],
  },
  {
    id: 2,
    name: 'Metformin XR',
    genericName: 'Metformin Hydrochloride',
    category: 'Diabetes',
    dosageForm: 'Tablet',
    strength: '850mg',
    stock: 18,
    refillThreshold: 25,
    sideEffects: ['Stomach upset', 'Metallic taste'],
  },
  {
    id: 3,
    name: 'Atorvastatin',
    genericName: 'Atorvastatin Calcium',
    category: 'Cardiac',
    dosageForm: 'Tablet',
    strength: '20mg',
    stock: 67,
    refillThreshold: 30,
    sideEffects: ['Headache', 'Muscle pain'],
  },
  {
    id: 4,
    name: 'Salbutamol Inhaler',
    genericName: 'Albuterol Sulfate',
    category: 'Respiratory',
    dosageForm: 'Inhaler',
    strength: '100mcg',
    stock: 12,
    refillThreshold: 10,
    sideEffects: ['Tremor', 'Palpitations'],
  },
]

export const plans: MedicationPlan[] = [
  {
    id: 1,
    medicineId: 1,
    medicineName: 'Amoxicillin',
    dosage: '1 Capsule',
    frequency: 'Every 8 hours',
    nextDoseAt: '08:00 PM',
    durationDays: 7,
  },
  {
    id: 2,
    medicineId: 2,
    medicineName: 'Metformin XR',
    dosage: '1 Tablet',
    frequency: 'Twice daily',
    nextDoseAt: '09:00 PM',
    durationDays: 90,
  },
  {
    id: 3,
    medicineId: 3,
    medicineName: 'Atorvastatin',
    dosage: '1 Tablet',
    frequency: 'Nightly',
    nextDoseAt: '10:00 PM',
    durationDays: 120,
  },
]

export const doseLogs: DoseLog[] = [
  { id: 1, medicineName: 'Amoxicillin', plannedAt: '08:00 AM', status: 'Taken' },
  { id: 2, medicineName: 'Metformin XR', plannedAt: '09:00 AM', status: 'Taken' },
  { id: 3, medicineName: 'Atorvastatin', plannedAt: '10:00 PM', status: 'Missed' },
  { id: 4, medicineName: 'Salbutamol Inhaler', plannedAt: '03:00 PM', status: 'Skipped' },
]

export const doctors: Doctor[] = [
  {
    id: 1,
    fullName: 'Dr. Maya Rahman',
    speciality: 'Internal Medicine',
    hospital: 'CityCare Hospital',
    distanceKm: 2.1,
    rating: 4.8,
    availableToday: true,
  },
  {
    id: 2,
    fullName: 'Dr. Arjun Das',
    speciality: 'Endocrinology',
    hospital: 'Greenline Medical Center',
    distanceKm: 4.7,
    rating: 4.6,
    availableToday: false,
  },
  {
    id: 3,
    fullName: 'Dr. Sofia Karim',
    speciality: 'Pulmonology',
    hospital: 'Riverside Clinic',
    distanceKm: 3.2,
    rating: 4.9,
    availableToday: true,
  },
]

export const interactions: InteractionAlert[] = [
  {
    id: 1,
    medicineA: 'Atorvastatin',
    medicineB: 'Clarithromycin',
    severity: 'High',
    note: 'Risk of increased statin level and muscle injury. Consider alternate antibiotic.',
  },
  {
    id: 2,
    medicineA: 'Metformin XR',
    medicineB: 'Cimetidine',
    severity: 'Moderate',
    note: 'May increase metformin plasma concentration. Monitor blood glucose.',
  },
  {
    id: 3,
    medicineA: 'Amoxicillin',
    medicineB: 'Ibuprofen',
    severity: 'Low',
    note: 'Usually safe. Monitor gastric discomfort.',
  },
]
