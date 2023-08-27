export const LOAD_PRODUCTS = 'products/loadproducts';

export const loadproducts = (products) => ({
      type: LOAD_PRODUCTS,
      products
})

export const fetchProducts = (query) => async (dispatch) => {

      if (query) {

            const res = await fetch('/api/products')

            if (res.ok) {
                  const allProducts = await res.json();
                  dispatch (loadproducts(allProducts));
            }

      } else {

            const res = await fetch('/api/products')



      }



}
