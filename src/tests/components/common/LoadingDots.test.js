import React from 'react';
import { shallow } from 'enzyme';
import LoadingDots from "../../../components/common/LoadingDots";

describe('<LoadingDots />', () => {
  it('renders correctly', () => {
    const props = {
      interval: 300,
      dots: 4,
    };
    const wrapper = shallow(<LoadingDots {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
