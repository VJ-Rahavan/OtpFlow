import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  test: 'Sample',
};

const sampleReducer = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    storeSampleText: (state, action) => {
      state.test = action.payload;
    },
    clearSampleReducerState: () => ({ ...initialState }),
  },
});

export const { storeSampleText, clearSampleReducerState } =
  sampleReducer.actions;

export default sampleReducer.reducer;
