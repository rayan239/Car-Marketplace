import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function BKashPayment({
  isOpen,
  onClose,
  amount,
  carListingId,
  userId,
}) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          carListingId,
          phoneNumber,
          pinCode,
          amount,
          paymentDate: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        navigate("/payment-success");
      } else {
        navigate("/payment-error");
      }
    } catch (error) {
      console.error("Payment error:", error);
      navigate("/payment-error");
    }
    setLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>bKash Payment</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {step === 1 ? (
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <img src="/bkash-logo.svg" alt="bKash" className="w-16 h-16" />
                <div>
                  <h3 className="font-bold">Amount to pay:</h3>
                  <p className="text-xl text-red-500">৳ {amount}</p>
                </div>
              </div>
              <Input
                placeholder="Enter bKash account number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Button onClick={() => setStep(2)} disabled={!phoneNumber}>
                Next
              </Button>
            </div>
          ) : (
            <div className="grid gap-4">
              <Input
                type="password"
                placeholder="Enter PIN"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
              <Button onClick={handleSubmit} disabled={!pinCode || loading}>
                {loading ? "Processing..." : "Confirm Payment"}
              </Button>
              <Button variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
