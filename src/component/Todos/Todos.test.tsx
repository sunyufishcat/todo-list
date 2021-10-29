import * as React from 'react';
import {FC, ReactElement, useContext} from 'react';
import {render, screen} from '@testing-library/react';
import {dispatchContext} from './Todos';
import '@testing-library/jest-dom/extend-expect';

describe('Todos', () => {
  test('should render children component with provider value', () => {
    const mockProvider = {
      todos : [{id: '1', value: 'test', isCompleted: false}],
      todosDispatch: jest.fn(),
    }
    const Child: FC = (): ReactElement => {
      const { todos } = useContext(dispatchContext);
      return <div>{todos[0].value}</div>;
    };
    render(
      <dispatchContext.Provider value={mockProvider}>
        <Child />
      </dispatchContext.Provider>
    )
    expect(screen.getByText('test')).toBeInTheDocument();
  })
})
