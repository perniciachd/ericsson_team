import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type PortfolioFund = { id: number; name: string; type: string; sip: string; paid: number; value: number; gain: number };

type PortfolioState = { funds: PortfolioFund[] };

const initialState: PortfolioState = { funds: [] };

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addFund(state, action: PayloadAction<PortfolioFund>) {
      state.funds.push(action.payload);
    },
  },
});

export const { addFund } = portfolioSlice.actions;
export default portfolioSlice.reducer;
