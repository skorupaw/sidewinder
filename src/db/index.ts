import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import databasePath from "./utils";
import { migrate } from "drizzle-orm/bun-sqlite/migrator";

const sqlite = new Database(databasePath());
const db = drizzle({ client: sqlite });
migrate(db, { migrationsFolder: "./drizzle" });

export default db;
