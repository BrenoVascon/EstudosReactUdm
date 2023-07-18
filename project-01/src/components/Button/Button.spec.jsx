import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '.';
import userEvent from '@testing-library/user-event';
import React from 'react';

describe('<Button />', () => {
  it('should render the button with the text "Load more"', () => {
    render(<Button text="Load more" />);

   expect.assertions(1);



    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });
   const fn = jest.fn();

    it('should call function on button click', () => {
    render(<Button text="Load more"  onClick={fn}/>);

    const button = screen.getByRole('button', { name: /load more/i });


    // Or UserEvent.click(button)
     fireEvent.click(button);

    expect(fn).toHaveBeenCalled();
 });


 it('should be disable when disabled is true', () => {
 render(<Button text="Load more"  disabled={true}/>);

 const button = screen.getByRole('button', { name: /load more/i });


 // Or UserEvent.click(button)
  fireEvent.click(button);

 expect(button).toBeDisabled();
});
});