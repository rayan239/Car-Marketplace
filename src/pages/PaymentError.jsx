import { Button } from "../components/ui/button";
import Header from "../components/Header";
import { useSearchParams, Link } from "react-router-dom";

function PaymentError() {
    const [searchParams] = useSearchParams();
    const error = searchParams.get('error') || 'Payment was cancelled or failed';

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-red-50 to-gray-50 flex items-center justify-center py-12 px-4">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
                    {/* Error Animation */}
                    <div className="relative mb-8">
                        <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Failed</h1>
                    <p className="text-gray-600 mb-2">
                        We're sorry, but your payment could not be processed.
                    </p>
                    <p className="text-sm text-red-600 mb-8 bg-red-50 p-3 rounded-lg">
                        {error}
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                        <h3 className="font-semibold text-lg mb-4">What you can do:</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                Check your card details and try again
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                Ensure you have sufficient funds
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                Contact your bank if the issue persists
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                Try using a different payment method
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <Button
                            onClick={() => window.history.back()}
                            className="w-full bg-black text-white hover:bg-gray-800"
                        >
                            Try Again
                        </Button>
                        <Link to="/">
                            <Button variant="outline" className="w-full border-black text-black hover:bg-black hover:text-white">
                                Back to Home
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-8 text-sm text-gray-500">
                        <p>Need help? <Link to="/contact" className="text-blue-600 hover:underline">Contact our support team</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PaymentError;
