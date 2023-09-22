export const LOAD_PRODUCTS = 'products/loadProducts';
export const GET_PRODUCT = 'products/getProducts';
export const DELETE_PRODUCTS = 'products/deleteProduct'

export const loadProducts = (products) => ({
      type: LOAD_PRODUCTS,
      products
});

export const getProduct = (product) => ({
      type: GET_PRODUCT,
      product
})

export const deleteProduct = (productId) => ({
      type: DELETE_PRODUCTS,
      productId
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
                  const products = {}
                  allProducts.forEach(product => products[product.id] = product)
                  dispatch(loadProducts(products))

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

export const fetchCreateProduct = (product) => async (dispatch) => {
      try {
            const formData = new FormData();
            for (const key in product) {
                  if (key === 'image') {
                      formData.append('image', product.image);
                  } else {
                      formData.append(key, product[key]);
                  }
              }

            const res = await fetch("/api/products/new", {
                  method: "POST",
                  // headers: { "Content-Type": "application/json" },
                  // body: JSON.stringify(product),
                  body: formData
            });

            if (res.ok) {
                  const productResponse = await res.json();
                  const products = {}
                  products.singleProduct = { ...productResponse }
                  dispatch(getProduct(products))
                  return products;
            } else {
                  const errors = await res.json();
                  return errors;
            }
      } catch (error) {
            const errors = await error.json();
            return errors;
      }
};

export const fetchUpdateProduct = (product) => async (dispatch) => {

      // console.log('***************thunk begins in updating product', product);

      const {  name, price, description, quantity, category, image } = product;

      const update = { name, price, description, quantity, category }

      // console.log('***************** in thunk please update product *******', update);

      const res = await fetch(`/api/products/update/${product.id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(update),
      });

      if (res.ok) {
            const productResponse = await res.json();
            const products = {}
            products.singleProduct = { ...productResponse }
            console.log('midddle thunk', products);
            dispatch(getProduct(products))
            return products;
      } else {
            const errors = await res.json();
            return errors;
      }
};

export const fetchDeleteProduct = (productId) => async (dispatch) => {

      const res = await fetch(`/api/products/delete/${productId}`, {
            method: 'DELETE'
      })

      if (res.ok) {
            dispatch(deleteProduct(productId))
      } else {
            const errors = await res.json()
            return errors
      }
}


/** ======== Reducer ======== */

const initialState = {};

export const productsReducer = (state = initialState, action) => {
      switch (action.type) {
            case LOAD_PRODUCTS:
                  return {...state, ...action.products};
            case GET_PRODUCT:
                  return { ...state, ...action.product };
            case DELETE_PRODUCTS:
                  const newState = { ...state };
                  delete newState[action.productId-1];
                  return newState;
            default:
                  return state;
      }
}
