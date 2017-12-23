export const types = {
  something: 'something',
};

export const something = (token, profile) => {
  return {
    type: types.something,
    data: {
      //
      // Some data
      //
    }
  }
}
