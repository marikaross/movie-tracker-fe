import React from 'react';
import { shallow } from 'enzyme';
import  { SignUp, mapStateToProps, mapDispatchToProps } from './SignUp';
import { signUp } from '../api-calls';
import { loginUser } from '../actions';

jest.mock('../api-calls.js');

describe.only('SignUp', () => {
  let wrapper, mockEvent, mockState;
  beforeEach(() => {
    wrapper = shallow(<SignUp/>);
    mockEvent = {preventDefault: jest.fn(),target:{name: "name", value: "bob"}};
    mockState = {
      name: '',
      email: '',
      password: '',
      hasError: false
    }
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should instantiate with some state', () => {

    expect(wrapper.instance().state).toEqual(mockState);
  })

  it('should update state when input changes', () => {
    
    wrapper.find('#name').simulate('change', mockEvent);
    
    expect(wrapper.state('name')).toEqual('bob');
  })

  it('should call signUp on submit', () => {
    wrapper = shallow(<SignUp login={ jest.fn()} history={['yeah']}/>) 

    wrapper.find('.sign-up').simulate('submit', mockEvent);
    expect(signUp).toBeCalled();
  })

  it.skip('should set hasError to true on failed response', () => {

  })

  describe('mapStateToProps', () => {
    it('should return an object with a user', () => {
      const mockState = {
        user: {name: 'Joe'},
        dog: {breed: 'mut'}
      }
      const expectedProps = {user: {name: 'Joe'}};

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedProps)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with loginUser when handleSubmit is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = loginUser({email: 'th', password: 'e'});

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.login(actionToDispatch);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

})






