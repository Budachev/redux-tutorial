import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;  

  it('renders something', () => {
  	const component = renderComponent(App);

    expect(component).to.contain('React simple starter');
  });
  
});
