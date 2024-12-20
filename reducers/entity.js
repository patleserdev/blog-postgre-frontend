import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: null,
};

export const entitySlice = createSlice({
 name: 'entity',

  initialState,
 reducers: {
    addEntity: (state, action) => {
     state.value=action.payload;
   },
   deleteEntity: (state, action) => {
  
      state.value=null;
    
    
  },

 },
});

export const { addEntity,deleteEntity } = entitySlice.actions;
export default entitySlice.reducer;
