import { render } from '@testing-library/react';
import Button from './Button';

describe('button component', () => {
  it('should be rendered', () => {
    const component = render(<Button text='Testbutton' click={() => {}} />);

    expect(component).toBeTruthy();
  });
});
