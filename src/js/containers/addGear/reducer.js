const initState = {}

const addGear_reducer = (state = initState, action) => {
switch (action.type) {
case 'CREATE_GEAR_SUCCESS':
    return "Add Gear Successfully"
case 'CREATE_GEAR_ERROR':
    return "Add Gear Failed"
default:
    return state;
}
};

export default addGear_reducer;