// Import Enzyme
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Import component(s)
import Dashboard from './Dashboard';

configure({ adapter: new Adapter() });

describe("<Dashboard />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Dashboard />);
  });

	// Evaluations
	test('Renders a post', () => {
		expect(wrapper.find(".post").exists()).toEqual(true);
	});
	test('Contains a button', () => {
		expect(wrapper.containsMatchingElement(<button />)).toEqual(true);
	})
	// test('Renders six posts', () => {
	// });
});