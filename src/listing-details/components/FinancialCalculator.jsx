import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
function FinancialCalculator({ carDetail }) {
  const [carPrice, setCarPrice] = useState(0);
  const [interestRate, setinterestRate] = useState(0);
  const [loanTerm, setloanTerm] = useState(0);
  const [downPayment, setdownPayment] = useState(0);
  const [MonthlyPayment, setMonthlyPayment] = useState(0);

  const CalculateMonthlyPayment = () => {
    const Principal = carPrice - downPayment;
    const MonthlyInterestRate = interestRate / 1200;

    const MonthlyPayment =
      (Principal *
        MonthlyInterestRate *
        Math.pow(1 + MonthlyInterestRate, loanTerm)) /
      (Math.pow(1 + MonthlyInterestRate, loanTerm) - 1);

    setMonthlyPayment(MonthlyPayment.toFixed(2));
  };
  return (
    <div className="p-10 border rounded-xl shadow-md mt-7">
      <h2 className="font-medium text-2xl">Financial Calculator</h2>

      <div className="flex gap-5 mt-5">
        <div className="w-full">
          <label>Price $</label>
          <Input type="number" onChange={(e) => setCarPrice(e.target.value)} />
        </div>

        <div className="w-full">
          <label>Interest Rate</label>
          <Input
            type="number"
            onChange={(e) => setinterestRate(e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-5 mt-5">
        <div className="w-full">
          <label>Loan Term (Months)</label>
          <Input type="number" onChange={(e) => setloanTerm(e.target.value)} />
        </div>

        <div className="w-full">
          <label>Down Payment</label>
          <Input
            type="number"
            onChange={(e) => setdownPayment(e.target.value)}
          />
        </div>
      </div>

      {MonthlyPayment > 0 && (
        <h2 className="font-medium text-2xl m-5">
          Your Monthly Payment Is :{" "}
          <span className="text-4xl font-bold">${MonthlyPayment}</span>
        </h2>
      )}
      <Button
        className="w-full mt-5"
        size="lg"
        onClick={CalculateMonthlyPayment}
      >
        Calculate
      </Button>
    </div>
  );
}

export default FinancialCalculator;
