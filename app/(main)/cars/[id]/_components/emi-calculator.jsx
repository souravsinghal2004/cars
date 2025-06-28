"use client";

import React, { useEffect, useState } from "react";

function EmiCalculator({ price = 10000 }) {
  const fixedInterestRate = 4.5; // %
  const fixedTenureYears = 5; // 5 years
  const [downPayment, setDownPayment] = useState(0);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    calculateEmi();
  }, [downPayment]);

  const calculateEmi = () => {
    const loanAmount = price - downPayment;
    const monthlyRate = fixedInterestRate / 100 / 12;
    const months = fixedTenureYears * 12;

    const emiCalc =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPay = emiCalc * months;
    const interest = totalPay - loanAmount;

    setEmi(emiCalc.toFixed(2));
 setTotalPayment((totalPay + downPayment).toFixed(2));

    setTotalInterest(interest.toFixed(2));
  };

  const format = (num) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(num);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">EMI Calculator</h2>

      <p className="text-red-600 font-bold text-sm mb-4">
  Based on {format(price)} price, {fixedTenureYears} years tenure, {fixedInterestRate}% interest rate.
</p>


      {/* Down Payment Input */}
      <div>
        <label className="block mb-1">Down Payment</label>
        <input
          type="range"
          min={0}
          max={price}
          step={100}
          value={downPayment}
          onChange={(e) => setDownPayment(parseFloat(e.target.value))}
          className="w-full"
        />
        <div className="text-sm text-gray-600 mt-1">
          {format(downPayment)} (
          {((downPayment / price) * 100).toFixed(1)}%)
        </div>
      </div>

      {/* Results */}
      <div className="bg-gray-100 p-4 rounded-md space-y-2">
        <p>
          <strong>Monthly EMI:</strong> {format(emi)}
        </p>
        <p>
          <strong>Total Interest:</strong> {format(totalInterest)}
        </p>
        <p>
          <strong>Total Payment:</strong> {format(totalPayment)}
        </p>
        
      </div>
    </div>
  );
}

export default EmiCalculator;
