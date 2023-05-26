import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'events',
  initialState: {
    items: [],
    showCluster: false,
  },
  reducers: {
    add(state, action) {
      state.items.unshift(...action.payload);
    },
    delete(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    deleteAll(state) {
      state.items = [];
    },
    toggleShowCluster(state) {
      state.showCluster = !state.showCluster;
    },
  },
});

export { actions as eventsActions };
export { reducer as eventsReducer };
