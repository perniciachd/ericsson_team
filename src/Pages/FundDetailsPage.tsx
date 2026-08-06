import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";

type Fund = {
  id?: number;
  fundName?: string;
  category?: string;
  risk?: string;
  returns?: number;
};

type FormValues = {
  amount: number;
  installments: number;
  frequency: string;
  startDate: string;
};

function FundDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [fund, setFund] = useState<Fund | null>(null);

  // Try to get fund from location.state first
  useEffect(() => {
    const stateFund = (location.state as any)?.fund as Fund | undefined;
    if (stateFund) {
      setFund(stateFund);
      return;
    }

    // fallback: check query param ?id= and load from MockData.json
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    if (id) {
      axios
        .get("/MockData.json")
        .then((res) => {
          const found = (res.data.funds || []).find((f: any) => String(f.id) === id);
          if (found) setFund(found);
        })
        .catch((e) => console.error(e));
    }
  }, [location]);

  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: { amount: 1000, installments: 12, frequency: "Monthly", startDate: "" },
  });

  const onSubmit = (data: FormValues) => {
    console.log("SIP Confirmed", { fund, data });
    // TODO: send to backend or persist
    navigate("/home");
  };

  return (
    <div style={{ padding: 16 }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 12 }}>Back</button>

      <h2>Start a SIP</h2>

      <div style={{ margin: "12px 0", border: "1px solid #e5e4e7", padding: 12, borderRadius: 8 }}>
        {fund ? (
          <div>
            <h3 style={{ margin: 0 }}>{fund.fundName}</h3>
            <p style={{ margin: "6px 0" }}>
              {fund.category} • {fund.risk} • {fund.returns}%
            </p>
          </div>
        ) : (
          <p>No fund selected.</p>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 520 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <label>
            SIP Amount
            <input type="number" {...register("amount", { valueAsNumber: true, required: true })} />
          </label>

          <label>
            Installments
            <input type="number" {...register("installments", { valueAsNumber: true, required: true })} />
          </label>

          <label>
            Frequency
            <select {...register("frequency", { required: true })}>
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </label>

          <label>
            Start Date
            <input type="date" {...register("startDate", { required: true })} />
          </label>

          <button type="submit" style={{ padding: "8px 12px" }}>
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

export default FundDetailsPage;