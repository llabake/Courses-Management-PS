import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../../components/NotFound';

describe('<NotFound />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('#text').text()).toMatch('This is embarrassing, something is missing......');
  });
});
