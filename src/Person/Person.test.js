import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Person from './Person'

configure ({adapter: new Adapter()})

describe('<Person/>', () => {
  it('should render name and age', () => {
  const wrapper = shallow('<Person/>');
  expect(wrapper.contains(<p> I am Max and I am 28 years old</p>)).to.have.length(1);
 });
});
