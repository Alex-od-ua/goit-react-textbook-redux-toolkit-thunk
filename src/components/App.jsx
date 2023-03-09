import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/operations';
import { getTasks } from 'redux/selectors';

export const App = () => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();

  // Получаем части состояния
  const { items, isLoading, error } = useSelector(getTasks); //getTasks = state => state.tasks;

  // Вызываем операцию
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // Рендерим разметку в зависимости от значений в состоянии
  return (
    <div>
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    </div>
  );
};
