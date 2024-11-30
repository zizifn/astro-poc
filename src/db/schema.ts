import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique(),
});

export const testTable = sqliteTable("test", {
	id: int().primaryKey({ autoIncrement: true }),
	colum1: text().notNull().default(""),
  });