import { useUser } from "@clerk/clerk-react";
import { eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { db } from "../../config";
import { CarListing, Order } from "../../config/schema";

export default function PaymentGateway() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pinCode, setPinCode] = useState("");

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [carDetail, setCarDetail] = useState(null);

  useEffect(() => {
    const carId = searchParams.get("carId");
    if (carId) {
      fetchCarDetails(carId);
    }
  }, [searchParams]);

  const fetchCarDetails = async (carId) => {
    try {
      const result = await db
        .select()
        .from(CarListing)
        .where(eq(CarListing.id, carId))
        .limit(1);

      if (result.length > 0) {
        setCarDetail(result[0]);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error fetching car details:", error);
      navigate("/");
    }
  };

  const handleProceed = () => {
    if (!phoneNumber || !termsAccepted) return;
    setStep(2);
  };

  const handleConfirmPayment = async () => {
    if (!pinCode) return;

    try {
      // Create order
      await db.insert(Order).values({
        userId: user.id,
        carListingId: carDetail.id,
        phoneNumber,
        pinCode,
        paymentStatus: "success",
        paymentDate: new Date().toISOString(),
        amount: carDetail.sellingPrice,
      });

      navigate("/payment-success");
    } catch (error) {
      console.error("Payment error:", error);
      navigate("/payment-error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full space-y-6 p-6">
        {step === 1 && (
          <div className="bg-white rounded-lg shadow-lg">
            {/* Header */}
            <div className="p-4 border-b flex items-center gap-3">
              <img src="/bKash-logo.png" alt="bKash" className="h-8" />
              <span className="text-pink-600 font-semibold">Payment</span>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Merchant Info */}
              <div className="space-y-2">
                <div className="text-sm text-gray-600">Merchant</div>
                <div className="font-semibold">CARPLACE</div>
              </div>

              {/* Invoice Info */}
              <div className="space-y-2">
                <div className="text-sm text-gray-600">
                  Invoice no: 21172915
                </div>
                <div className="font-bold text-xl">
                  Amount : {carDetail?.sellingPrice || "0"} ৳
                </div>
              </div>

              {/* Phone Number Input */}
              <div className="space-y-2">
                <div className="text-sm text-gray-600">
                  Your bKash account number
                </div>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="e.g. 01XXXXXXXXX"
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-1"
                />
                <label className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-pink-600 underline">
                    terms and conditions
                  </a>
                </label>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t flex justify-end gap-3">
              <button
                onClick={() => navigate(-1)}
                className="px-6 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>
              <button
                onClick={handleProceed}
                disabled={!phoneNumber || !termsAccepted}
                className={`px-6 py-2 rounded-lg text-white ${
                  phoneNumber && termsAccepted
                    ? "bg-pink-600 hover:bg-pink-700"
                    : "bg-pink-300 cursor-not-allowed"
                }`}
              >
                Proceed
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-lg shadow-lg">
            {/* Header */}
            <div className="p-4 border-b flex items-center gap-3">
              <img src="/bKash-logo.png" alt="bKash" className="h-8" />
              <span className="text-pink-600 font-semibold">Payment</span>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* PIN Input */}
              <div className="space-y-2">
                <div className="text-sm text-gray-600">Enter your PIN</div>
                <input
                  type="password"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="****"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t flex justify-end gap-3">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={handleConfirmPayment}
                disabled={!pinCode}
                className={`px-6 py-2 rounded-lg text-white ${
                  pinCode
                    ? "bg-pink-600 hover:bg-pink-700"
                    : "bg-pink-300 cursor-not-allowed"
                }`}
              >
                Confirm Payment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
