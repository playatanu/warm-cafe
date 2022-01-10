const geoReducer = (
  state = {address: 'update your location', lat: '', lng: ''},
  action,
) => {
  switch (action.type) {
    case 'updateGeo':
      return action.payload;

    default:
      return state;
  }
};

export default geoReducer;
