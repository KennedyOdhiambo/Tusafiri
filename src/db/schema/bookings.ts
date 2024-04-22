import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';
import { travelRoutes } from './travelRoute';
import { users } from './users';

export const bookings = pgTable('bookings', {
  bookingId: serial('booking_id').primaryKey(),
  routeId: serial('route_id').references(() => travelRoutes.routeId),
  userId: serial('user_id').references(() => users.userId),
  travellerName: varchar('traveller_name', { length: 256 }).notNull(),
  phoneNumber: varchar('traveller_phone', { length: 256 }).notNull(),
  seats: text('seats').array(),
});
