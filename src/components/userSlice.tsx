import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// export type Item = {

//   id: number;

//   name: string;

// };

// type UserState = {

//   items: Item[];

// };

// annotate the state, otherwise `items: []` is inferred as never[]

const initialState: any = {

  items: [],

};

const userSlice = createSlice({

  name: "user",

  initialState,

  reducers: {

    // PayloadAction<T> is what types action.payload

    addItem(state, action: any) {

      console.log(action);

      state.items.push(action.payload);

    },

    removeItem(state, action: any) {

       console.log(action);

      state.items = state.items.filter((item:any) => item.id !== action.payload);

    },

  },

});

export const { addItem, removeItem } = userSlice.actions;

export default userSlice.reducer;

 