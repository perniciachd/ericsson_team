import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";

  // ---------- data (move to public/data.json + fetch later) ----------
type Fund = {
  id: string;
  name: string;
  category: string;
  risk: "Low" | "Moderate" | "High";
  returns1Y: number;
  nav: number;
  minAmount: number;
};

const FUNDS: Fund[] = [
  { id: "ppfc",  name: "Parag Parikh Flexi Cap", category: "Equity", risk: "High",     returns1Y: 15.3, nav: 78.4,  minAmount: 1000 },
  { id: "hdfcm", name: "HDFC Mid Cap",           category: "Equity", risk: "High",     returns1Y: 12.1, nav: 142.6, minAmount: 500  },
  { id: "sbidf", name: "SBI Debt Fund",          category: "Debt",   risk: "Low",      returns1Y: 6.8,  nav: 34.2,  minAmount: 100  },
];

// ---------- schema ----------
const sipSchema = z
  .object({
    fundId: z.string().min(1, "Please select a fund"),
    amount: z.number({ error: "Enter a valid amount" }).positive("Amount must be greater than 0"),
    frequency: z.enum(["weekly", "monthly", "quarterly"]),
    installments: z
      .number({ error: "Enter number of installments" })
      .int("Must be a whole number")
      .min(1, "At least 1 installment")
      .max(600, "Too many installments"),
    startDate: z.string().min(1, "Start date is required"),
  })

type SIPForm = z.infer<typeof sipSchema>;

// ---------- component ----------
function StartSIP() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SIPForm>({
    resolver: zodResolver(sipSchema),
    mode: "onTouched",                 // validate when the field loses focus
    defaultValues: {
      fundId: "ppfc",
      amount: 1000,
      frequency: "monthly",
      installments: 12,
      startDate: "",
    },
  });

  // re-renders on every change of fundId — that's how the header card stays in sync
  const selectedFundId = watch("fundId");
  const fund = FUNDS.find((f) => f.id === selectedFundId);

  const onSubmit = async (data: SIPForm) => {
    console.log("SIP payload", data);
    await new Promise((r) => setTimeout(r, 800));   // pretend API call
    alert(`SIP started: ₹${data.amount} ${data.frequency}`);
    reset();
  };

  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow">
      <button onClick={() => navigate(-1)} className="text-sky-700 font-medium">
        ← Back to funds
      </button>
      <h1 className="mt-2 mb-6 text-3xl font-bold text-slate-900">Start a SIP</h1>

      {/* fund summary card */}
      {fund && (
        <div className="mb-6 flex items-start justify-between rounded-xl bg-slate-100 p-5">
          <div>
            <p className="text-xl font-semibold text-slate-900">{fund.name}</p>
            <div className="mt-2 flex gap-2">
              <span className="rounded-full bg-sky-100 px-3 py-1 text-sm text-sky-800">{fund.category}</span>
              <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">{fund.risk}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-green-700">
              +{fund.returns1Y}% <span className="text-sm font-normal text-slate-500">1Y</span>
            </p>
            <p className="text-slate-700">NAV ₹{fund.nav.toFixed(2)}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Fund */}
        <label className="mb-1 block text-slate-600">Fund</label>
        <select {...register("fundId")} className="mb-1 w-full rounded-lg border border-slate-300 p-3">
          {FUNDS.map((f) => (
            <option key={f.id} value={f.id}>{f.name}</option>
          ))}
        </select>
        <p className="mb-4 text-sm text-red-600">{errors.fundId?.message}</p>

        <div className="grid grid-cols-2 gap-5">
          {/* Amount */}
          <div>
            <label className="mb-1 block text-slate-600">SIP amount (₹)</label>
            <input
              type="number"
              {...register("amount", { valueAsNumber: true })}  
              className="w-full rounded-lg border border-slate-300 p-3"
            />
            <p className="text-sm text-red-600">{errors.amount?.message}</p>
          </div>

          {/* Frequency */}
          <div>
            <label className="mb-1 block text-slate-600">Frequency</label>
            <select {...register("frequency")} className="w-full rounded-lg border border-slate-300 p-3">
              <option value="weekly">weekly</option>
              <option value="monthly">monthly</option>
              <option value="quarterly">quarterly</option>
            </select>
            <p className="text-sm text-red-600">{errors.frequency?.message}</p>
          </div>

          {/* Installments */}
          <div>
            <label className="mb-1 block text-slate-600">Installments paid</label>
            <input
              type="number"
              {...register("installments", { valueAsNumber: true })}
              className="w-full rounded-lg border border-slate-300 p-3"
            />
            <p className="text-sm text-red-600">{errors.installments?.message}</p>
          </div>

          {/* Start date */}
          <div>
            <label className="mb-1 block text-slate-600">Start date</label>
            <input type="date" {...register("startDate")} className="w-full rounded-lg border border-slate-300 p-3" />
            <p className="text-sm text-red-600">{errors.startDate?.message}</p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-5">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-lg bg-sky-700 py-3 font-semibold text-white disabled:opacity-60"
          >
            {isSubmitting ? "Confirming..." : "Confirm investment"}
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-lg border border-sky-700 py-3 font-semibold text-sky-700"
          >
            Cancel
          </button>
        </div>
      </form>

      {fund && (
        <p className="mt-4 text-center text-slate-500">
          Min for this fund: <b>₹{fund.minAmount.toLocaleString("en-IN")}</b>/installment.
        </p>
      )}
    </div>
  );
}
export default StartSIP;