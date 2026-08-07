import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type SipItem = {
  id: number;
  fundName: string;
  category: string;
  risk: string;
  returns: number;
  sipAmount: number;
  installments: number;
  frequency: string;
  startDate: string;
};

type PortfolioState = {
  invested: number;
  valueToday: number;
  totalGain: number;
  sips: SipItem[];
};

const initialState: PortfolioState = {
  invested: 25600,
  valueToday: 29450,
  totalGain: 3850,
  sips: [
    {
      id: 1,
      fundName: "SBI Blue Chip Fund",
      category: "Equity",
      risk: "Low",
      returns: 12.34,
      sipAmount: 2500,
      installments: 12,
      frequency: "Monthly",
      startDate: "2025-01-01",
    },
    {
      id: 2,
      fundName: "HDFC Balanced Advantage Fund",
      category: "Balanced",
      risk: "Moderate",
      returns: 8.9,
      sipAmount: 2000,
      installments: 18,
      frequency: "Monthly",
      startDate: "2025-03-01",
    },
    {
      id: 3,
      fundName: "ICICI Prudential Bluechip Fund",
      category: "Equity",
      risk: "High",
      returns: 15.67,
      sipAmount: 1500,
      installments: 24,
      frequency: "Monthly",
      startDate: "2025-05-01",
    },
  ],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    updateInvested(state, action: PayloadAction<number>) {
      state.invested = action.payload;
    },
    updateValueToday(state, action: PayloadAction<number>) {
      state.valueToday = action.payload;
    },
    updateTotalGain(state, action: PayloadAction<number>) {
      state.totalGain = action.payload;
    },
    addSip(state, action: PayloadAction<SipItem>) {
      state.sips.push(action.payload);
    },
  },
});

export const { updateInvested, updateValueToday, updateTotalGain, addSip } = portfolioSlice.actions;
export default portfolioSlice.reducer;
