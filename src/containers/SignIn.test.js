import React from 'react';
import { SignIn, mapStateToProps, mapDispatchToProps } from '../containers/SignIn.js';
import * as action from '../actions';
import {shallow} from 'enzyme';


describe ('SignIn', () => {
  let wrapper
  let mockPopulateUserFavs
  let mocklogOutUser
  let mockLogin

  beforeEach(() => {
    mockLogin = jest.fn();
    mockPopulateUserFavs = jest.fn();
    mocklogOutUser = jest.fn();
    wrapper = shallow(<SignIn 
      login={mockLogin} 
      populateUserFavs={mockPopulateUserFavs} 
      logOutUser={mocklogOutUser} 
      user={{name: 'Joel'}}/>)

  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('has a default state of email, password, and hasError', () => {
 
    expect(wrapper.state('email')).toEqual('');
    expect(wrapper.state('password')).toEqual('');
    expect(wrapper.state('hasError')).toEqual(false);
  })

  it('changes state.email onChange', () => {
    const mockEvent = {target: {value: 'bestTime', id:'email'}}
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('email')).toEqual(mockEvent.target.value)
  })

  it('changes state.password onChange', () => {
    const mockEvent = {target: {value: 'dumpsterFire', id: 'password'}}
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('password')).toEqual(mockEvent.target.value)
  })

})

