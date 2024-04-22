import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  userId: serial('user_id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  phoneNumber: varchar('phone', { length: 256 }).notNull(),
  password: varchar('password', { length: 256 }).notNull(),
  role: varchar('role').$type<'admin' | 'customer'>().default('customer'),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
});
