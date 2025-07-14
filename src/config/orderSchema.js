import { integer, varchar, serial, text, timestamp, numeric } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const Orders = pgTable('orders', {
    id: serial('id').primaryKey(),
    carId: integer('car_id').notNull(),
    carTitle: varchar('car_title', { length: 255 }).notNull(),
    carImage: text('car_image'),
    amount: numeric('amount', { precision: 10, scale: 2 }).notNull(),
    buyerEmail: varchar('buyer_email', { length: 255 }).notNull(),
    buyerName: varchar('buyer_name', { length: 255 }).notNull(),
    sellerEmail: varchar('seller_email', { length: 255 }),
    status: varchar('status', { length: 50 }).default('pending'),
    paymentIntentId: varchar('payment_intent_id', { length: 255 }),
    transactionId: varchar('transaction_id', { length: 255 }),
    paymentMethod: varchar('payment_method', { length: 50 }),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow()
});
