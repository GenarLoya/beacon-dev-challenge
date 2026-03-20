import { z } from "zod";
import { CATEGORIES } from "~/constants/categories";

export const searchProductsDto = z.object({
  query: z.string().optional(),
  category: z.enum(CATEGORIES).optional(),
});

export type TsearchParamsDto = z.infer<typeof searchProductsDto>;
