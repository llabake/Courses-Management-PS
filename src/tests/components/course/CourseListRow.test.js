import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from "../../../components/course/CourseListRow";
import courseMock from "../../mocks/courseMock";

describe('<CourseListRow />', () => {
  const props = {
    onDelete: jest.fn(),
    course: courseMock.createdCourseWithId,
  };
  const wrapper = shallow(<CourseListRow {...props} />);
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('deletes a course', () => {
    wrapper.find('.btn').simulate('click');
    expect(props.onDelete.mock.calls.length).toEqual(1);
  });
});
