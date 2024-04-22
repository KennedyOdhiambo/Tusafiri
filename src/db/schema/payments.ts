import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';
import { bookings } from './bookings';
import { users } from './users';

export const payments = pgTable('payments', {
  peaymentId: serial('payment_id').primaryKey(),
  bookingId: serial('bookingId').references(() => bookings.bookingId),
  userId: serial('user_id').references(() => users.userId),
  phoneNumber: varchar('payment_phone', { length: 256 }).notNull(),
});
