import Header from "../components/Header";
import { Button } from "../components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function OrderHistory() {
    const { user } = useUser();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            fetchOrderHistory();
        }
    }, [user]);

    const fetchOrderHistory = async () => {
        try {
            const response = await fetch(`/api/orders?email=${user?.primaryEmailAddress?.emailAddress}`);
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Error fetching order history:', error);
        } finally {
            setLoading(false);
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed': return 'bg-green-100 text-green-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'failed': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
                <div className="mx-24 px-6">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Order History</h1>
                        <p className="text-xl text-gray-600">Track all your car purchases</p>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
                    </div>

                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...Array(6)].map((_, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
                                    <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                                    <div className="space-y-3">
                                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : orders.length > 0 ? (
                        <div className="space-y-6">
                            {orders.map((order, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                                    <div className="md:flex">
                                        {/* Car Image */}
                                        <div className="md:w-1/3">
                                            <img
                                                src={order.carImage || '/placeholder-car.jpg'}
                                                alt={order.carTitle}
                                                className="w-full h-64 md:h-full object-cover"
                                            />
                                        </div>

                                        {/* Order Details */}
                                        <div className="md:w-2/3 p-8">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{order.carTitle}</h3>
                                                    <p className="text-gray-600">Order #{order.id}</p>
                                                </div>
                                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                                                    {order.status?.charAt(0).toUpperCase() + order.status?.slice(1)}
                                                </span>
                                            </div>

                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                                <div>
                                                    <p className="text-sm text-gray-600">Purchase Date</p>
                                                    <p className="font-semibold">{new Date(order.createdAt).toLocaleDateString()}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Amount Paid</p>
                                                    <p className="font-semibold text-green-600">${order.amount?.toLocaleString()}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Payment Method</p>
                                                    <p className="font-semibold">Card ending in {order.paymentMethod}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600">Transaction ID</p>
                                                    <p className="font-mono text-sm">{order.transactionId}</p>
                                                </div>
                                            </div>

                                            <div className="flex space-x-4">
                                                <Button variant="outline" className="flex-1 border-black text-black hover:bg-black hover:text-white">
                                                    Download Invoice
                                                </Button>
                                                <Button className="flex-1 bg-black text-white hover:bg-gray-800">
                                                    View Details
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">No Orders Yet</h3>
                            <p className="text-gray-600 mb-8">You haven't made any car purchases yet.</p>
                            <Link to="/shop">
                                <Button className="bg-black text-white hover:bg-gray-800">
                                    Browse Cars
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default OrderHistory;
