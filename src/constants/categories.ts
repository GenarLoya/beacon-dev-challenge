export const CATEGORIES = [
  "medicamentos",
  "suplementos",
  "cuidado-personal",
  "dispositivos-medicos",
] as const;

export type TCategory = (typeof CATEGORIES)[number];
