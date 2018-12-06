import React from 'react';
import { shallow } from 'enzyme';
import HomePage from "../../../components/home/HomePage";

describe('<HomePage />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
