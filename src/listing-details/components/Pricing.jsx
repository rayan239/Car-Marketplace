import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { MdOutlineLocalOffer } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Pricing({ carDetail }) {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    if (!user) {
      alert("Please sign in to make a purchase");
      return;
    }

    // Navigate to payment gateway
    navigate(`/payment-gateway?carId=${carDetail?.id}`);
  };

  return (
    <div className="p-10 rounded-xl border shadow-md bg-gradient-to-br from-white to-blue-50">
      <div className="text-center mb-6">
        <h2 className="font-bold text-gray-600 text-lg">Our Price</h2>
        <h2 className="font-bold text-4xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          {carDetail?.sellingPrice?.toLocaleString()}
        </h2>
        <p className="text-gray-500 text-sm">Best price guaranteed</p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-600">Vehicle Price</span>
          <span className="font-semibold">
            {carDetail?.sellingPrice?.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-600">Processing Fee</span>
          <span className="font-semibold">$0</span>
        </div>
        <div className="flex justify-between items-center py-2 text-lg font-bold">
          <span>Total</span>
          <span className="text-green-600">
            {carDetail?.sellingPrice?.toLocaleString()}
          </span>
        </div>
      </div>

      <Button
        className="w-full mt-7 bg-black text-white hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
        size="lg"
        onClick={handlePayment}
        disabled={loading}
      >
        <MdOutlineLocalOffer className="text-lg mr-2" />
        {loading ? "Processing..." : "Order Now"}
      </Button>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          Secure payment powered by Stripe
        </p>
        <div className="flex justify-center items-center mt-2 space-x-2">
          <span className="text-xs text-gray-400">🔒 SSL Secured</span>
          <span className="text-xs text-gray-400">💳 All cards accepted</span>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
