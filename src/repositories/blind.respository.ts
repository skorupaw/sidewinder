import db from "@/db";
import { blindsTable } from "@/db/schema";
import { Blind } from "@/model";
import { eq } from "drizzle-orm";

export const createBlind = async (
  blind: Omit<Blind, "id" | "createdAt" | "updatedAt">,
): Promise<Blind> => {
  const [results] = await db.insert(blindsTable).values(blind).returning();
  return {
    ...results,
    file: results.file as Uint8Array,
  };
};

export const getBlindById = async (id: number): Promise<Blind | null> => {
  const [results = null] = await db
    .select()
    .from(blindsTable)
    .where(eq(blindsTable.id, id))
    .limit(1);
  if (results) {
    return {
      ...results,
      file: results.file as Uint8Array,
    };
  }
  return null;
};
