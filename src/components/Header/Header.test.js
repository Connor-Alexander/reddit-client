// Import Enzyme
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Import component(s)
import Header from "./Header";

configure({ adapter: new Adapter() });

describe("<Header />", () => {
  let wrapper;
	beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  test("Check that the wrapper is working", () => {
    console.log(wrapper.debug());
  });
});
