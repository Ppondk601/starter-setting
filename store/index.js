export const state =() => ({
    products:"",
})
export const mutations = {
    set(state,product){
        state.products = product
        console.log(state.products)
    }
}

export const actions = {
    async fetchProduct(store){
        const productList = await fetch("https://dummyjson.com/products?limit=3")
        const product = await productList.json()
        store.commit("set",product)
    }

}