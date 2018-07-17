
export const logIn = jest.fn().mockImplementation(() => Promise.resolve({id: 1}));

export const getFavorites = jest.fn().mockImplementation(() => Promise.resolve(({data: [{movied_id: 2}, {movie_id: 3}]})))

export const signUp = jest.fn().mockImplementation((state) => {
  if(state.name === 'bugs') {
    return Promise.resolve({id: 1})
  } else {
    return 'nothing'
  }
}); 

