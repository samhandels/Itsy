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

export const createItemThunk = (productId, purchaseQuantity) => async (dispatch) => {
  //  try {
  const res = await fetch(`/api/products/${productId}/shopping_cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({"purchaseQuantity": purchaseQuantity}),
  });

  // console.log(res);
  if (res.ok) {
    const newItemResponse = await res.json();
    dispatch(getItemsThunk());
    return newItemResponse;
  } else {
    const errors = await res.json();
    return errors;
  }
  //  } catch (error) {
  // const errors = await error.json();
  //  return error;
  //  }
};


export const deleteItemThunk = (productId) => async (dispatch) => {
     console.log("*********************the response from backend in thunk**************", productId);
  const res = await fetch(`/api/shopping_cart/${productId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(getItemsThunk());
  } else {
    const errors = await res.json();
    return errors;
  }
};

const initialState = {}; //store shape

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
