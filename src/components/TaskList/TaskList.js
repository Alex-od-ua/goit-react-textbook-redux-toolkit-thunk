import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import {
  // selectTasks,
  // selectStatusFilter,
  selectVisibleTasks,
} from 'redux/selectors';
// import { statusFilters } from 'redux/constants';
import css from './TaskList.module.css';

export const TaskList = () => {
  // Получаем массив задач из состояния Redux
  const tasks = useSelector(selectVisibleTasks);

  // // Получаем значение фильтра из состояния Redux
  // const statusFilter = useSelector(selectStatusFilter);

  // // Вычисляем массив задач которые необходимо отображать в интерфейсе
  // const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
