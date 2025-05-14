import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Reservation } from '../../types';

interface ReservationsState {
  reservations: Reservation[];
  loading: boolean;
  error: string | null;
}

const initialState: ReservationsState = {
  reservations: [],
  loading: false,
  error: null,
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<Reservation>) => {
      state.reservations.push(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { addReservation, setLoading, setError } = reservationsSlice.actions;
export default reservationsSlice.reducer;