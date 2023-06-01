import { mysqlTable, serial, timestamp, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 256 }).notNull(),
  lastName: varchar("last_name", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
