import Header from './components/Header';
import css from './app.module.css';
import Input from './components/Input';
import List from './components/List';

function App() {
  return (
    <div className={css.container}>
      <Header/>
      <Input/>
      <List/>
    </div>
  );
}

export default App;
