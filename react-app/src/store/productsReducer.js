export const LOAD_PRODUCTS = 'products/loadProducts';
export const GET_PRODUCT = 'products/getProducts';

export const loadProducts = (products) => ({
      type: LOAD_PRODUCTS,
      products
});

export const getProduct = (product) => ({
      type: GET_PRODUCT,
      product
})

export const fetchProducts = (query) => async (dispatch) => {

      if (query) {
            const res = await fetch(`/api/products?${query}`)

            if (res.ok) {
                  const allProducts = await res.json();
                  const productsArray = Object.values(allProducts)
                  dispatch(loadProducts(productsArray))

            } else {
                  const errors = await res.json()
                  return errors
            }

      } else {
            const res = await fetch('/api/products')

            if (res.ok) {
                  const allProducts = await res.json();
                  const productsArray = Object.values(allProducts)
                  dispatch(loadProducts(productsArray))

            } else {
                  const errors = await res.json()
                  return errors
            }

      }

}

export const fetchProductDetails = (productId) => async (dispatch) => {
      const res = await fetch(`/api/products/${productId}`)

      if (res.ok) {
            const product = await res.json()
            const products = {}
            products.singleProduct = { ...product }
            dispatch(getProduct(products))
      } else {
            const errors = await res.json()
            return errors
      }
}

export const createProductThunk = (product) => async (dispatch) => {
      try {
            const res = await fetch("/api/products", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(product),
            });

            if (res.ok) {
                  const productResponse = await res.json();
                  return productResponse;
            } else {
                  const errors = await res.json();
                  return errors;
            }
      } catch (error) {
            const errors = await error.json();
            return errors;
      }
};

export const updateProductThunk = (product) => async (dispatch) => {
      const res = await fetch(`/api/products/${product.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
      });

      if (res.ok) {
            const productResponse = await res.json();
            return productResponse;
      } else {
            const errors = await res.json();
            return errors;
      }
};

/** ======== Reducer ======== */

const initialState = {};

export const productsReducer = (state = initialState, action) => {
      switch (action.type) {
            case LOAD_PRODUCTS:
                  return [...action.products];
            case GET_PRODUCT:
                  return { ...state, ...action.product }
            default:
                  return state;
      }
}
