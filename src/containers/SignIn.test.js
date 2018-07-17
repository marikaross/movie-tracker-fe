import React from 'react';
import { SignIn, mapStateToProps, mapDispatchToProps } from '../containers/SignIn.js';
import * as action from '../actions';
import {shallow} from 'enzyme';
import { logIn } from '../api-calls'
jest.mock('../api-calls')


describe ('SignIn', () => {
  let wrapper
  let mockPopulateUserFavs
  let mocklogOutUser
  let mockLogin
  let mockEvent
  let mockUser

  beforeEach(() => {
    mockLogin = jest.fn();
    mockPopulateUserFavs = jest.fn();
    mocklogOutUser = jest.fn();
    mockEvent = {preventDefault: jest.fn(), target: {email:'', password: ''}}
    mockUser = {name: 'oscar'}
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

  it('should call logIn on handleSubmit', () => {
    wrapper.find('.sign-in-form').simulate('submit', mockEvent)
    expect(logIn).toHaveBeenCalled()
  })

  it('should call mockLogin on handleSubmit', async () => {

    const mockState = {user: {id: 3, name: 'potato', favorites: [{}, {}]}}
    wrapper.setState({'hasError': true})

    await wrapper.find('.sign-in-form').simulate('submit', mockEvent);
    expect(wrapper.state('hasError')).toEqual(false);
  })

  it('should change the state of hasError to true if a fetch call fails', async () => {
    wrapper.setState({name: 'garbage'})
    await wrapper.find('.sign-in-form').simulate('submit', mockEvent)
    expect(wrapper.state('hasError')).toEqual(true); 
  })

  describe('mapDispatchToProps', () => {
    let mockDispatch

    beforeEach(() => {
      mockDispatch = jest.fn()
    })

    it('should call dispatch when using login from MDTP', () => {
    
      const actionToDispatch = action.loginUser(mockUser)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.login(mockUser)

      expect(mockDispatch).toBeCalledWith(actionToDispatch)
  })

    it('should call dispatch when using populateUserFavs from MDTP', () => {
      const actionToDispatch = action.populateUserFavs(3)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.populateUserFavs(3)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
    
  })

  describe('mapStateToProps', () => {
    it('should return a user object', () => {
      const mockState = {user: {id: 3, name: 'potato', favorites: [{}, {}]}}
      const expected = {id: 3, name: 'potato', favorites: [{}, {}]}
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(mockState)

    })
  })

})

