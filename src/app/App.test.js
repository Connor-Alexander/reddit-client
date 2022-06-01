/* To have testing run on save run 
npm test --> a

Glossary of Jest: https://jestjs.io/docs/expect#tocontainitem 
Glossary of Enzyme: https://enzymejs.github.io/enzyme/docs/api/shallow.html 
*/

import App from "./App";
import Header from "../components/Header/Header";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Form, Nav } from "react-bootstrap";

configure({ adapter: new Adapter() });

describe("<Header />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  test("Logo is displayed", () => {
    expect(wrapper.containsMatchingElement(<img />)).toEqual(true);
  });
  test("Search bar is displayed", () => {
    expect(wrapper.find(".searchBar").exists()).toEqual(true);
  });
});
