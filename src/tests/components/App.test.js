import React from 'react';
import { shallow } from 'enzyme';
import App, { mapStateToProps } from "../../components/App";

describe('<App/>', () => {
  it('renders correctly', () => {
    const props = {
      loading: false,
      courses: [{}],
    };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('mapStateToProps', () => {
    expect(mapStateToProps({})).toHaveProperty('loading');
    expect(mapStateToProps({})).toHaveProperty('courses');
  });
});
