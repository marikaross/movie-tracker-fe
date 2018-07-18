import React from 'react';
import { shallow, mount } from 'enzyme';
import * as action from '../actions';
import { Header, mapStateToProps, mapDispatchToProps } from './Header.js'



describe('header', () => {
  let wrapper
  let mockToggleFilter
  let mockLogOutUser

  beforeEach(() => {
    togglefilter = jest.fn()
    logOutUser = jest.fn()
    wrapper = mount(<Header 
      toggleFilter={mockToggleFilter}
      logOutUser={mockLogOutUser}/>)

  })
  it('should match the snapshot', () => {
    let wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })

  it('calls toggleFilter on a click of the favorites button', () => {
    wrapper.find('.')
  })
})