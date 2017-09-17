export const allProducts = state => state.all // would need action/mutation if data fetched async
export const getNumberOfProducts = state => (state.all) ? state.all.length : 0
export const cartProducts = state => {
    return state.added.map(({ id, quantity }) => {
      const product = state.all.find(p => p.id === id)

      return {
        name: product.name,
        price: product.price,
        quantity
      }
    })
  }
