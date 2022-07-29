import { useSelector } from 'react-redux';
import Todo from './Todo';

const List = () => {
  const todosList = useSelector((state) => state.todos.list);

  return (
    <div>
      <h2>List</h2>
      <ul>{todosList && todosList.map((todo) => <Todo todo={todo} />)}</ul>
    </div>
  );
};

export default List;
