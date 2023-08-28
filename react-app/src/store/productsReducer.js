export const LOAD_PRODUCTS = 'products/loadproducts';

export const loadProducts = (products) => ({
      type: LOAD_PRODUCTS,
      products
});

export const fetchProducts = (query) => async (dispatch) => {

      if (query) {
            const res = await fetch(`/api/products?${query}`)

            if (res.ok) {
                  const allProducts = await res.json();
                  const productsArray = Object.values(allProducts)
                  dispatch (loadProducts(productsArray))

            } else {
                  const errors = await res.json()
                  return errors
            }

      } else {
            const res = await fetch('/api/products')

            if (res.ok) {
                  const allProducts = await res.json();
                  const productsArray = Object.values(allProducts)
                  dispatch (loadProducts(productsArray))

            } else {
                  const errors = await res.json()
                  return errors
            }

      }

}


/** ======== Reducer ======== */

const initialState = {};

export const productsReducer = (state = initialState, action) => {
      switch (action.type) {
            case LOAD_PRODUCTS:
                  return [ ...action.products ];
            default:
                  return state;
      }
}
