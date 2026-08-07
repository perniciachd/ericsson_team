import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useAppDispatch } from "../../store/store";
import { addFund } from "../../store/portfolioSlice";
import "./Invest.css";
import Tile from "../atomic/Tile";
import Button from "../atomic/Button";

type Fund = { title: string };

const investSchema = z.object({
	fund: z.string().min(1, "Please select a fund"),
	amount: z.string().transform((v) => Number(v)).pipe(z.number().min(1000, "Minimum SIP amount is ₹1,000")),
	frequency: z.string().min(1, "Please select a frequency"),
	installments: z.string().transform((v) => Number(v)).pipe(z.number().min(1, "At least 1 installment required")),
	startDate: z.string().min(1, "Start date is required"),
});

type InvestFormInput = z.input<typeof investSchema>;
type InvestFormOutput = z.output<typeof investSchema>;

export default function Invest() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [funds, setFunds] = useState<Fund[]>([]);

	useEffect(() => {
		async function getData() {
			const { data } = await axios.get("/mockData/Funds.json");
			setFunds(data);
		}
		getData();
	}, []);

	const { register, handleSubmit, formState: { errors } } = useForm<InvestFormInput, unknown, InvestFormOutput>({
		resolver: zodResolver(investSchema),
		defaultValues: {
			fund: "Parag Parikh Flexi Cap",
			amount: "1000",
			frequency: "monthly",
			installments: "12",
			startDate: "",
		},
	});

	const onSubmit = (data: InvestFormOutput) => {
		dispatch(addFund({
			id: Date.now(),
			name: data.fund,
			type: "",
			sip: `₹${data.amount}/mo`,
			paid: data.installments,
			value: data.amount * data.installments,
			gain: 0,
		}));
		navigate("/portfolio");
	};

	return (
		<div className="invest-container">
			<div className="invest-card">
				<Button title="Back to funds" leftIcon="← " btnClicked={() => navigate(-1)} cssStyle="back-btn" />

				<Tile styleClass="invest-title" title="Start a SIP" />

				<div className="fund-summary">
					<div className="fund-info">
						<Tile styleClass="fund-name" title="Parag Parikh Flexi Cap" />
						<div className="fund-meta">
							<Tile styleClass="cat" title="Equity" />
							<Tile styleClass="risk High" title="High" />
						</div>
					</div>
					<div className="fund-stats">
						<div className="fund-return">+15.3% <span>1Y</span></div>
						<div className="fund-nav">NAV ₹78.40</div>
					</div>
				</div>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-group">
						<label htmlFor="fund">Fund</label>
						<select id="fund" className="form-input" {...register("fund")}>
							<option value="">Select a fund</option>
							{funds.map((f) => (
								<option key={f.title} value={f.title}>{f.title}</option>
							))}
						</select>
						{errors.fund && <span className="form-err">{errors.fund.message}</span>}
					</div>

					<div className="form-row">
						<div className="form-group">
							<label htmlFor="amount">SIP amount (₹)</label>
							<input id="amount" type="number" className="form-input" placeholder="1000" {...register("amount")} />
							{errors.amount && <span className="form-err">{errors.amount.message}</span>}
						</div>
						<div className="form-group">
							<label htmlFor="frequency">Frequency</label>
							<select id="frequency" className="form-input" {...register("frequency")}>
								<option>monthly</option>
								<option>quarterly</option>
							</select>
							{errors.frequency && <span className="form-err">{errors.frequency.message}</span>}
						</div>
					</div>

					<div className="form-row">
						<div className="form-group">
							<label htmlFor="installments">Installments paid</label>
							<input id="installments" type="number" className="form-input" placeholder="12" {...register("installments")} />
							{errors.installments && <span className="form-err">{errors.installments.message}</span>}
						</div>
						<div className="form-group">
							<label htmlFor="startDate">Start date</label>
							<input id="startDate" type="date" className="form-input" {...register("startDate")} />
							{errors.startDate && <span className="form-err">{errors.startDate.message}</span>}
						</div>
					</div>

					<div className="form-actions">
						<button type="submit" className="btn-primary">Confirm investment</button>
						<button type="button" className="btn-secondary" onClick={() => navigate(-1)}>Cancel</button>
					</div>

					<div className="form-hint">Min for this fund: <strong>₹1,000</strong>/installment.</div>
				</form>
			</div>
		</div>
	);
}
