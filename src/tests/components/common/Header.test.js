import React from 'react';
import { shallow } from 'enzyme';
import Header from "../../../components/common/Header";

describe('<Header/>', () => {
  const props = {
    loading: false,
    courses: [],
  };
  const wrapper = shallow(<Header {...props} />);
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
