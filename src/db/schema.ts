import { sql } from "drizzle-orm";
import { sqliteTable, integer, text, blob } from "drizzle-orm/sqlite-core";

export const blindTemplatesTable = sqliteTable("blind_templates_table", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  template: text({ mode: "json" }).notNull(),
  createdAt: text("created_at")
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text("updated_at")
    .notNull()
    .default(sql`(current_timestamp)`)
    .$onUpdate(() => sql`(current_timestamp)`),
});

export type InsertBlindTemplate = typeof blindTemplatesTable.$inferInsert;
export type SelectBlindTemplate = typeof blindTemplatesTable.$inferSelect;

export const blindsTable = sqliteTable("blinds_table", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  blindTemplateId: integer("blind_template_id")
    .notNull()
    .references(() => blindTemplatesTable.id),
  file: blob("file").notNull(),
  createdAt: text("created_at")
    .notNull()
    .default(sql`(current_timestamp)`),
  updatedAt: text("updated_at")
    .notNull()
    .default(sql`(current_timestamp)`)
    .$onUpdate(() => sql`(current_timestamp)`),
});

export type InsertBlind = typeof blindsTable.$inferInsert;
export type SelectBlind = typeof blindsTable.$inferSelect;
