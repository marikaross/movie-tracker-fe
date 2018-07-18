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
      logOutUser={mockLogOutUser}
      />)

  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('calls toggleFilter on a click of the favorites button', () => {
    wrapper.find('.favorites').simulate('click')
    expect(mockToggleFilter).toHaveBeenCalled()
  })

  it('calls logOutUser when the logout Button is clicked', () => {
    wrapper.find('.log-out').simulate('click')
    expect(mockLogOutUser).toHaveBeenCalled()
  })
})

describe('mapStateToProps', () => {
  it('returns an object with the expected props', () => {
    const mockState = {
      user: {name: 'coffee', id: 1 },
      showAllMovies: true
    }
    const mappedProps = mapStateToProps(mockState)
    const expected = mockState
    expect(mappedProps).toEqual(expected)
  })
})

describe('mapDispatchToProps', () => {
  let mockDispatch

  beforeEach(() => {
    mockDispatch = jest.fn()
  })

  it('calls dispatch when using logOutUser from mDTP', () => {
    const actionToDispatch = action.logOutUser()
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.logOutUser()
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('calls dispatch when using toggleFilter', () => {
    const actionToDispatch = action.toggleFilter()
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.toggleFilter()
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})

