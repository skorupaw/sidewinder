import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import databasePath from "./utils";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

const sqlite = new Database(databasePath());
const db = drizzle({ client: sqlite });
migrate(db, { migrationsFolder: "./drizzle" });

export default db;
