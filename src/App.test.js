/* To have testing run on save run 
npm test --> a

Glossary of Jest: https://jestjs.io/docs/expect#tocontainitem 
Glossary of Enzyme: https://enzymejs.github.io/enzyme/docs/api/shallow.html 
*/

import App from "./App";
import Header from "./components/Header";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Header />', () => { // What are we describing?
  test('displays correct heading', () => { // What is the test?
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).toBe('Reddit-Client') // Expected output?
  })
})