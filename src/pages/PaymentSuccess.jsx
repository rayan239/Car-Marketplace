import { Button } from "../components/ui/button";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

function PaymentSuccess() {
    const [searchParams] = useSearchParams();
    const [orderDetails, setOrderDetails] = useState(null);
    const sessionId = searchParams.get('session_id');

    useEffect(() => {
        if (sessionId) {
            // Fetch order details from your backend
            fetchOrderDetails(sessionId);
        }
    }, [sessionId]);

    const fetchOrderDetails = async (sessionId) => {
        try {
            const response = await fetch(`/api/order-details/${sessionId}`);
            const data = await response.json();
            setOrderDetails(data);
        } catch (error) {
            console.error('Error fetching order details:', error);
        }
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
                    {/* Success Animation */}
                    <div className="relative mb-8">
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div className="absolute inset-0 w-24 h-24 bg-green-200 rounded-full mx-auto animate-ping opacity-20"></div>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
                    <p className="text-gray-600 mb-8">
                        Congratulations! Your car purchase has been completed successfully.
                    </p>

                    {orderDetails && (
                        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                            <h3 className="font-semibold text-lg mb-4">Order Details</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Order ID:</span>
                                    <span className="font-mono text-sm">{orderDetails.id}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Car:</span>
                                    <span className="font-medium">{orderDetails.carTitle}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Amount:</span>
                                    <span className="font-bold text-green-600">${orderDetails.amount}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Date:</span>
                                    <span>{new Date(orderDetails.createdAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="space-y-4">
                        <Link to="/order-history">
                            <Button className="w-full bg-black text-white hover:bg-gray-800">
                                View Order History
                            </Button>
                        </Link>
                        <Link to="/">
                            <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
                                Continue Shopping
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-8 text-sm text-gray-500">
                        <p>A confirmation email has been sent to your registered email address.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PaymentSuccess;
