import {
  index,
  int,
  mysqlTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const taxpayers = mysqlTable(
  "taxpayers",
  {
    id: serial("id").primaryKey().autoincrement(),
    name: varchar("name", { length: 256 }).notNull(),
    lastName: varchar("last_name", { length: 256 }).notNull(),
    initialPeriod: int("initial_period").notNull(),
    userId: varchar("user_id", { length: 256 }).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (taxpayers) => ({
    userIdIndex: index("user_id_index").on(taxpayers.userId),
  })
);
