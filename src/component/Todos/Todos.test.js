import React, {useContext} from 'react';
import {render, screen} from '@testing-library/react';
import {dispatchContext} from './Todos';
import '@testing-library/jest-dom/extend-expect';

describe('Todos', () => {
  test('should render children component with provider value', () => {
    const todos = [{id: 1, value: 'test', isCompleted: 'false'}];
    const Child = () => {
      const { todos } = useContext(dispatchContext);
      return <div>{todos[0].value}</div>;
    };
    render(
      <dispatchContext.Provider value={{todos}}>
        <Child />
      </dispatchContext.Provider>
    )
    expect(screen.getByText('test')).toBeInTheDocument();
  })
})
