const initState = {}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_GEAR_SUCCESS':
      console.log('create gear success');
      return state;
    case 'CREATE_GEAR_ERROR':
      console.log('create gear error');
      return state;
    default:
      return state;
  }
};

export default projectReducer;