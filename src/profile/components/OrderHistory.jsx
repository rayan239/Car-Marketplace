import { useUser } from "@clerk/clerk-react";
import { desc, eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import { db } from "../../../config";
import { CarListing, Order } from "../../../config/schema";

export default function OrderHistory() {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      const result = await db
        .select({
          id: Order.id,
          paymentDate: Order.paymentDate,
          amount: Order.amount,
          paymentStatus: Order.paymentStatus,
          phoneNumber: Order.phoneNumber,
          listingTitle: CarListing.listingTitle,
          make: CarListing.make,
          model: CarListing.model,
          year: CarListing.year,
        })
        .from(Order)
        .innerJoin(CarListing, eq(Order.carListingId, CarListing.id))
        .where(eq(Order.userId, user.id))
        .orderBy(desc(Order.paymentDate));

      setOrders(result);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        You haven't made any purchases yet.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white rounded-lg shadow p-6 space-y-4"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">{order.listingTitle}</h3>
              <p className="text-gray-600">
                {order.make} {order.model} {order.year}
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">৳ {order.amount}</p>
              <span
                className={`inline-block px-2 py-1 rounded text-sm ${
                  order.paymentStatus === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {order.paymentStatus}
              </span>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            <p>
              Payment Date: {new Date(order.paymentDate).toLocaleDateString()}
            </p>
            <p>Phone: {order.phoneNumber}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
