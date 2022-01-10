const geoAction = value => {
  return {
    type: 'updateGeo',
    payload: value,
  };
};

export default geoAction;
