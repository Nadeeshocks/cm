import producer from "immer";
let initailState = {
  // gears :[] ,
  cartItem: [],
  gearDetaily: null,
listcart:[],
  message : "",
  ListFavourite:[]
}

const gearcatReducer = (state = initailState, action) => {
  return producer(state, draft => {
    switch (action.type) {
      case 'LIST_ALL_GEARS_SUCCESS':

        // //  return [...state.gears , action.payload.data;

        break;
      case 'LIST_CART_GEARS':
          console.log('reducer list carts',action.payload);
        draft.listcart = action.payload
        
        break;
      // console.log("cart reducer",draft.cartItem);
      case 'LIST_GEARS_SUCCESS':
        //  return [...state.gears , action.payload.data]
        draft.message = action.payload;
        break;
      case 'CREATE_GEAR_SUCCESS':
          draft.message = action.payload;
        break;

      case 'LIST_GEAR_DETAIL':
        // return action.payload;
        console.log('gear detail reducer', action.payload);
        draft.gearDetaily = action.payload;
        break;
      case 'CREATE_GEAR_ERROR':
        console.log('create project error');
        draft.message = action.payload;
        break;
      case 'SEARCH_GEAR_SUCCESS':
        draft.message = action.payload;
        break;

      case 'SEARCH_GEAR_ERROR':
       
        draft.message = action.payload;
        break;
      case 'LIST_FAVOURITE_GEARS':
       
          draft.ListFavourite = action.payload;
          break;
     case 'ADD_CART_SUCCESS':
          console.log('add cart sucesss');
         
          break;
      case 'ADD_CART_ERROR':
          console.log('add cart error');
         
          break;
      

    }
  })


};
export default gearcatReducer;
