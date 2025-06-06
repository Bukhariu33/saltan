import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
  },
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    deleteEvent: (state, action) => {
      state.events.splice(action.payload, 1); // delete by index
    },
    editEvent: (state, action) => {
      const { index, updatedEvent } = action.payload;
      state.events[index] = updatedEvent;
    },
  },
});

export const { addEvent, deleteEvent, editEvent } = eventSlice.actions;
export default eventSlice.reducer;
