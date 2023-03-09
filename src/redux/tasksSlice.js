import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    errore: null,
  },
  reducers: {
    // Выполнится в момент старта HTTP-запроса
    fetchingInProgress(state) {
      state.isLoading = true;
    },

    // Выполнится если HTTP-запрос завершился успешно
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.errore = null;
      state.items = action.payload;
    },

    // Выполнится если HTTP-запрос завершился с ошибкой
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
