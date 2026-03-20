import { z } from "zod";

export const searchProductsDto = z.object({
  query: z.string().optional(),
  category: z
    .enum([
      "medicamentos",
      "suplementos",
      "cuidado-personal",
      "dispositivos-medicos",
    ])
    .optional(),
});

export type TsearchParamsDto = z.infer<typeof searchProductsDto>;
