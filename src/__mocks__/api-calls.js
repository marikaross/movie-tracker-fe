
export const logIn = jest.fn().mockImplementation((state) => {
  if (state.name !== 'garbage') {
    return Promise.resolve({name: 'joel', id: 2, email: 'hi'});
  } else {
    return false;
  }
});

export const getFavorites = jest.fn().mockImplementation(() => Promise.resolve(({data: [{movied_id: 2}, {movie_id: 3}]})));

export const signUp = jest.fn().mockImplementation((state) => {
  if (state.name === 'bugs') {
    return Promise.resolve({id: 1})
  } else {
    return 'nothing'
  }
}); 

export const deleteDatabaseFav = jest.fn().mockImplementation(() => Promise.resolve())

export const postFavorite = jest.fn().mockImplementation(() => Promise.resolve())

