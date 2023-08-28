//type CRUD
/** Action Type Constants: */
export const GET_ITEMS = "shopping_cart/GET_ITEMS";

/**  Action Creators: */
export const getItemsAction = (items) => ({
  type: GET_ITEMS,
  items,
});


/** Thunk: */
export const getItemsThunk = () => async (dispatch) => {
  const res = await fetch("/api/shopping_cart/current");
  if (res.ok) {
    const items = await res.json();
    // console.log("*********************the response from backend in thunk**************", items);
    //thunk response is the backend route response, with a dict in the models to_dict method
    const itemsArr = items.shopping_carts;
    // console.log("*********************the response from backend in thunk**************", itemsArr);
    
    dispatch(getItemsAction(itemsArr));
  }
};



const initialState = { }; //store shape 

/** shopping Cart reducers: */
const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return { ...action.items };
    default:
      return state;
  }
};

export default shoppingCartReducer;
