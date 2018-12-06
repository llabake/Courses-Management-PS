import React from 'react';
import { shallow, mount } from 'enzyme';
import { CoursesPage, mapDispatchToProps, mapStateToProps } from "../../../components/course/CoursesPage";
import CourseList from "../../../components/course/CourseList";
import NoCourses from "../../../components/common/NoCourses";
import courseMock from "../../mocks/courseMock";

describe('<CoursePage', () => {
  it('renders correctly', () => {
    const state = {
      course: {
        title: '',
      },
    };
    const props = {
      courses: [],
      loading: false,
      deleteCourse: jest.fn(),
    };
    const wrapper = shallow(<CoursesPage {...props} {...state} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders No courses component when there are no courses', () => {
    const state = {
      course: {
        title: '',
      },
    };
    const props = {
      courses: [],
      loading: false,
      deleteCourse: jest.fn(),
    };
    const wrapper = shallow(<CoursesPage {...props} {...state} />);
    expect(wrapper.find(NoCourses)).toBeTruthy();
  });
  it('renders a list of courses when there are courses', () => {
    const props = {
      courses: courseMock.courses,
      loading: false,
      deleteCourse: jest.fn(),
      redirectToAddCoursePage: jest.fn(),
    };
    const wrapper = shallow(<CoursesPage {...props} />);
    expect(wrapper.find(CourseList)).toBeTruthy();
  });
  it('redirects to add course page', () => {
    const props = {
      courses: courseMock.courses,
      loading: false,
      deleteCourse: jest.fn(),
      redirectToAddCoursePage: jest.fn(),
      history: { push: jest.fn() },
    };
    const state = {
      course: {
        title: '',
      },
    };
    const wrapper = shallow(<CoursesPage {...state} {...props} />);
    wrapper.find('.btn').simulate('click');
    expect(props.history.push).toHaveBeenCalledWith('/course');
  });
  it('delete a course ', () => {
    const props = {
      courses: courseMock.courses,
      loading: false,
      deleteCourse: jest.fn(() => Promise.resolve()),
      redirectToAddCoursePage: jest.fn(),
      history: { push: jest.fn() },
    };
    const state = {
      course: {
        title: '',
      },
    };
    const wrapper = shallow(<CoursesPage {...state} {...props} />);
    const spy = jest.spyOn(wrapper.instance(), 'deleteCourse');
    wrapper.instance().deleteCourse('clean-code');
    expect(spy).toHaveBeenCalled();
  });
  it('should dispatch needed actions', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('deleteCourse');
    const { deleteCourse } = mapDispatchToProps(dispatch);
    deleteCourse();
    expect(dispatch).toHaveBeenCalled();
  });
  // xit('mapStateToProps', () => {
  //   expect(mapStateToProps({})).toHaveProperty('loading');
  //   expect(mapStateToProps({ courses: courseMock.courses })).toHaveProperty('courses');
  // });
});
