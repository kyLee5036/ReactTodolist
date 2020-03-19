import React from 'react'
import CurrentTime from './Components/CurrentTime'
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import WithReudx from ''

const TodoList = ({Component, store}) => {
  return (
    <Provider store={store} >
      <CurrentTime />
    </Provider>
  );
};

export default TodoList;