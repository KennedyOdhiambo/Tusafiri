CREATE TABLE IF NOT EXISTS "bookings" (
	"booking_id" serial PRIMARY KEY NOT NULL,
	"route_id" serial NOT NULL,
	"user_id" serial NOT NULL,
	"traveller_name" varchar(256) NOT NULL,
	"traveller_phone" varchar(256) NOT NULL,
	"seats" text[]
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "payments" (
	"payment_id" serial PRIMARY KEY NOT NULL,
	"bookingId" serial NOT NULL,
	"user_id" serial NOT NULL,
	"payment_phone" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "shuttles" (
	"shuttle_id" serial PRIMARY KEY NOT NULL,
	"shuttle_operator" varchar(256) NOT NULL,
	"bus_type" varchar DEFAULT 'normal',
	"facilities" varchar DEFAULT 'none',
	"number_plate" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "travel_routes" (
	"route_id" serial PRIMARY KEY NOT NULL,
	"shuttle_id" serial NOT NULL,
	"departure" varchar(256) NOT NULL,
	"destination" varchar(256) NOT NULL,
	"travel_date" date,
	"available_seats" integer DEFAULT 44,
	"ticket_price" numeric(8, 2)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"user_id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"phone" varchar(256) NOT NULL,
	"password" varchar(256) NOT NULL,
	"role" varchar DEFAULT 'customer',
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bookings" ADD CONSTRAINT "bookings_route_id_travel_routes_route_id_fk" FOREIGN KEY ("route_id") REFERENCES "travel_routes"("route_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bookings" ADD CONSTRAINT "bookings_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "payments" ADD CONSTRAINT "payments_bookingId_bookings_booking_id_fk" FOREIGN KEY ("bookingId") REFERENCES "bookings"("booking_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "payments" ADD CONSTRAINT "payments_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "travel_routes" ADD CONSTRAINT "travel_routes_shuttle_id_shuttles_shuttle_id_fk" FOREIGN KEY ("shuttle_id") REFERENCES "shuttles"("shuttle_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
