import { useDispatch } from 'react-redux';
import { listActions } from '../store/todosRedux';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const removeHandler = (todo) => {
    dispatch(listActions.remove(todo));
  };

  return (
    <li key={todo}>
      {todo} <button onClick={() => removeHandler(todo)}>X</button>
    </li>
  );
};

export default Todo;
