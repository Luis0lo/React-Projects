import { useSelector } from 'react-redux';
import css from './header.module.css';

const Header = () => {
  const todosLeft = useSelector((state) => state.todos.list.length);
  console.log(todosLeft);

  return (
    <div className={css.container}>
      <p>Todos left: {todosLeft}</p>
    </div>
  );
};

export default Header;
