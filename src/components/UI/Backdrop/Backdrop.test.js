import { render } from '@testing-library/react';
import Backdrop from './Backdrop';
import '@testing-library/jest-dom/extend-expect';

describe('backdrop component', () => {
  let visible = true;

  const toggle = () => {
    return (visible = false);
  };

  it('should be rendered', () => {
    const component = render(<Backdrop visible={visible} toggle={toggle} />);

    expect(component).toBeTruthy();
  }); 
});
