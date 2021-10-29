import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputField from './InputField';
import userEvent from '@testing-library/user-event';

describe('InputField', () => {
  const mockOnClick = jest.fn();
  const props = {
    type: 'textarea',
    id: 'testId',
    onClick: mockOnClick,
    className: 'test',
    labelValue: 'testValue',
    htmlFor: 'testId',
    checked: true,
  }

  test('should render input and label', () => {
    render(<InputField {...props} />);
    const input = screen.getByLabelText('testValue') as HTMLInputElement;
    expect(input.type).toBe('text');
    expect(input.id).toEqual('testId');
    expect(input.checked).toBeTruthy();
    userEvent.click(input);
    expect(mockOnClick).toHaveBeenCalled();
  })
})
