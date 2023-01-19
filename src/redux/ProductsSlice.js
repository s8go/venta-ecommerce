import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const productsSlice = createSlice({
    name: "products",
    initialState:{
        status: "",
        data: [],

    },
    reducers: {
        addProduct(state, actions){
            // state.push(actions)
        },

        removeProduct(state, actions){
            // state.pop(actions)
        },

        // editProduct(){

        // }
    },

    extraReducers: (build)=>{
        build.addCase(getProducts.pending, (state,actions)=>{
            state.status = "fetching"
        })
        .addCase(getProducts.fulfilled, (state, actions)=>{
            state.status = "success"
            state.data.push(actions.payload)
        })
        .addCase(getProducts.rejected, (state, actions)=>{
            state.status= "error"
        } )
    }
})

export const getProducts = createAsyncThunk("products/fetchProducts", async ()=>{
   const products = await fetch('https://dummyjson.com/products?limit=100')
    return products.json()
})

export const selectProducts = (state)=>{
    return state.products.data[0]?.products
}

export const productActions = productsSlice.actions;
export default productsSlice.reducer