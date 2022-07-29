import { useSelector } from 'react-redux';

const Header = () => {
  const todosLeft = useSelector((state) => state.todos.list.length);
  console.log(todosLeft);

  return <div>Todos left: {todosLeft}</div>;
};

export default Header;
