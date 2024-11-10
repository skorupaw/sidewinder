import { BlindTemplate, Template } from "@/model";
import db from "@/db";
import { eq } from "drizzle-orm";
import { blindTemplatesTable } from "@/db/schema";

export const createBlindTemplate = async (
  blindTemplate: Omit<BlindTemplate, "id" | "createdAt" | "updatedAt">,
): Promise<BlindTemplate> => {
  const [results] = await db
    .insert(blindTemplatesTable)
    .values(blindTemplate)
    .returning();
  return {
    ...results,
    template: results.template as Template,
  };
};

export const getBlindTemplateById = async (
  id: number,
): Promise<BlindTemplate | null> => {
  const [results = null] = await db
    .select()
    .from(blindTemplatesTable)
    .where(eq(blindTemplatesTable.id, id))
    .limit(1);

  if (results) {
    return {
      ...results,
      template: results.template as Template,
    };
  }
  return null;
};
