export const signUp = jest.fn().mockImplementation((state) => {
  if(state.name === 'bugs') {
    return Promise.resolve({id: 1})
  } else {
    return 'nothing'
  }
}); 
