import React from 'react';
import { shallow } from 'enzyme';
import AuthorList from "../../../components/authors/AuthorList";
import AuthorListRow from "../../../components/authors/AuthorListRow";
import authorMock from "../../mocks/authorMock";
import { mapStateToProps } from "../../../components/App";

describe('<AuthorList />', () => {
  it('renders correctly', () => {
    const props = {
      onDelete: jest.fn(),
      authors: authorMock.authors,
    };
    const wrapper = shallow(<AuthorList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders authorList Row correctly ', () => {
    const props = {
      onDelete: jest.fn(),
      authors: authorMock.authors,
    };
    const wrapper = shallow(<AuthorList {...props} />);
    expect(wrapper.find(AuthorListRow).length).toBe(2);
  });
});
