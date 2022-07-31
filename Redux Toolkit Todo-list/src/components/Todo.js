import { useDispatch } from 'react-redux';
import { listActions } from '../store/todosRedux';
import css from './todo.module.css';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const removeHandler = (todo) => {
    dispatch(listActions.remove(todo));
  };

  return (
    <div className={css.container}>
      <li key={todo} className={css.item}>
        {todo}
      </li>
      <button onClick={() => removeHandler(todo)}>X</button>
    </div>
  );
};

export default Todo;
