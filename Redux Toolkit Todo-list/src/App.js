import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';
import css from './app.module.css';


function App() {
  return (
    <div className={css.container}>
      <Header />
      <div className={css.wrapper}>
        <Input />
        <List />
      </div>
    </div>
  );
}

export default App;
