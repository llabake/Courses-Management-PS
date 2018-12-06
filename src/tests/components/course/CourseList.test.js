import React from 'react';
import { shallow, mount } from 'enzyme';
import CourseList from "../../../components/course/CourseList";
import courseMock from "../../mocks/courseMock";
import CourseListRow from "../../../components/course/CourseListRow";

describe('<CourseList />', () => {
  it('renders correctly', () => {
    const props = {
      onDelete: jest.fn(),
      courses: courseMock.courses,
    };
    const wrapper = shallow(<CourseList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders courseList Row correctly ', () => {
    const props = {
      onDelete: jest.fn(),
      courses: courseMock.courses,
    };
    const wrapper = shallow(<CourseList {...props} />);
    expect(wrapper.find(CourseListRow).length).toBe(5);
  });
});
