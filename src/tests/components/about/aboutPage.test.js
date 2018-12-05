import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from "../../../components/about/AboutPage";

describe('<AboutPage />', () => {
  it('renders correctly', () => {
    const wrapper =  shallow(<AboutPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
