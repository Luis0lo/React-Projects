import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { listActions } from '../store/todosRedux';

const Input = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(listActions.add(input));
    setInput('')
  };

  return (
    <div>
      <form onSubmit={addHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="new To do"
        />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default Input;
