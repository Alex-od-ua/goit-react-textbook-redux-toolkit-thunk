import { createSlice } from '@reduxjs/toolkit';

// Импортируем операцию
import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    errore: null,
  },

  // Добавляем обработку внешних экшенов
  extraReducers: {
    [fetchTasks.pending]: handlePending,
    [addTask.pending]: handlePending,
    [deleteTask.pending]: handlePending,
    [toggleCompleted.pending]: handlePending,
    [fetchTasks.rejected]: handleRejected,
    [addTask.rejected]: handleRejected,
    [deleteTask.rejected]: handleRejected,
    [toggleCompleted.rejected]: handleRejected,
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(task => task.id === action.payload);
      state.items.splice(index, 1);
    },
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
  },
  // reducers: {
  //   // Выполнится в момент старта HTTP-запроса
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },

  //   // Выполнится если HTTP-запрос завершился успешно
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.errore = null;
  //     state.items = action.payload;
  //   },

  //   // Выполнится если HTTP-запрос завершился с ошибкой
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
