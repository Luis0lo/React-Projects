import { useSelector } from 'react-redux';
import Todo from './Todo';
import css from './list.module.css';

const List = () => {
  const todosList = useSelector((state) => state.todos.list);

  return (
    <div className={css.container}>
      {todosList.length > 0 ? <p>List</p> : <p> list empty</p>}
      <ul>{todosList && todosList.map((todo) => <Todo todo={todo} />)}</ul>
    </div>
  );
};

export default List;
