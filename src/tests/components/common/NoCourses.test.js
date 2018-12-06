import React from 'react';
import { shallow } from 'enzyme';

import NoCourses from "../../../components/common/NoCourses";

const wrapper = shallow(<NoCourses text="what" />);

test('<NoCourses /> mounts correctly', () => {
  expect(wrapper).toMatchSnapshot();
});
