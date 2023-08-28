export const LOAD_PRODUCTS = 'products/loadproducts';

export const loadProducts = (products) => ({
      type: LOAD_PRODUCTS,
      products
});

export const fetchProducts = () => async (dispatch) => {
            const res = await fetch('/api/products')

            // console.log('here');

            const allProducts = await res.json();

            const productsArray = Object.values(allProducts)

            // console.log('thunk', productsArray);

            dispatch (loadProducts(productsArray))


            // if (res.ok) {
            //       const allProducts = await res.json();
            //       console.log('thunk', allProducts);

            //       dispatch (loadproducts(allProducts))
            //       return allProducts
            // } else {
            //       const errors = await res.json()
            //       return errors
            // }

      // }

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
