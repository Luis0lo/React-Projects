# Purpose

- How to implement Redux Toolkit in A basic Todo list.

## Redux Toolkit Docs
- [counter tutorial](https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-store)

## Structure
- src 
    - components
        - Header.js
        - Input.js
        - List.js
        - Todo.js
    - store
        - index.js
        - todosRedux.js
    - App.js
    - index.js

## Steps

- npx create-react-app todo-list
- npm install @reduxjs-toolkit react-redux

### Setup Store
- store/index.js > Create a Redux Store
    - import configureStore from redux toolkit
    - assign configureStore with an object reducer paramenter to a const Store
    - export default store

- index.js > Provide the Redux Store to React
    - import Provider from react redux
    - import store from store/index.js
    - wrap App component with Provider and pass store as a prop

- store/todosReduxs.js > Create a Redux State Slice
    - import createSlice from redux toolkit
    - create const initialState and assign inicial value {list:[]}
    - create slice named listSlice assigning value to the parameters name, initialState, reducers
        - reducers hold the logic, actions i.e. add, remove methods
    - export list of actions
    - export listSlice as default

- store/index.js > Add Slice Reducers to the Store
    - import reducer from ./todosRedux
    - assign the reducer as value to the paramether reducer inside configureStore

### Setup components

- Header.js > display todos left
    - import useSelector from react-redux to access to the todo list state stored. 

- Input.js  > input a new todo
    - import useDispatch from react-redux to dispatch action. 
    - import listActions from respective file to allow you to dispatch the action add afterwards.

- List.js   > display list of todos
    - import useSelector from react-redux to access to the todo list state stored.

- Todo.js   > display individual todo and button to remove it
    - import useDispatch from react-redux to dispatch action. 
    - import listActions from respective file to allow you to dispatch the action remove afterwards.

