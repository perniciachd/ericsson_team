import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserItem = {
  id: number;
  name: string;
};

type UserState = {
  items: UserItem[];
};

const initialState: UserState = {
  items: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    addItem(state, action: PayloadAction<UserItem>) {
      state.items.push(action.payload);
    },

    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addItem, removeItem } = userSlice.actions;

export default userSlice.reducer;