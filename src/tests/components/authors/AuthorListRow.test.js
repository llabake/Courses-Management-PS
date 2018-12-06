import React from 'react';
import { shallow } from 'enzyme';
import AuthorListRow from "../../../components/authors/AuthorListRow";
import authorMock from "../../mocks/authorMock";

describe('<AuthorListRow />', () => {
  const props = {
    onDelete: jest.fn(),
    author: authorMock.createdAuthorWithId,
  };
  const wrapper = shallow(<AuthorListRow {...props} />);
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('deletes an author', () => {
    wrapper.find('.btn').simulate('click');
    expect(props.onDelete.mock.calls.length).toEqual(1);
  });
});
