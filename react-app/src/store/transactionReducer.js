import { bindActionCreators } from "redux"

export const GET_TRANSACTION_ITEMS = "/transactionReducer/getTransactionItems"
export const ADD_TRANS_ITEMS = "/transactionReducer/addTransItems"

export const getTransactionItems = (items) => ({
    type: GET_TRANSACTION_ITEMS,
    items
})

export const addTransItems = (items) => ({
    type: ADD_TRANS_ITEMS,
    items
})

export const getTransactionItemsThunk = () => async (dispatch) => {
    const res = await fetch("/api/transactions/current")
    if (res.ok) {
        const items = await res.json();
        dispatch(getTransactionItems(items))
    }
}

export const addTransaction = (items) => async (dispatch) => {
    const numItems = parseInt(items.length)
        const transactionCreator = await fetch("/api/transactions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(items)
        })

        const transactionResponse = await transactionCreator.json();
        // console.log("TRANSRESPONSE" , transactionResponse)
        dispatch(addTransactionItems(numItems, transactionResponse, items))

}

export const addTransactionItems = (numItems, transactionResponse, items) => async(dispatch) => {
    const newItems = [];
    const itemsArr = Object.values(items)
        itemsArr.forEach(async (item) =>  {
        newItems.push(item)
        const res = await fetch(`/api/transactions/${transactionResponse.id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "transactionId": transactionResponse.id,
                "productId": item.productId
            })
        })
        if (res.ok) {
            const items = await res.json();
            dispatch(addTransItems(newItems))


        }
        else {
        }
})
return items
}




const initialState = {
    transactions: {},
    transaction: {}
};

export const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRANSACTION_ITEMS:
            const transState = {...state}
            action.items.forEach(
                (item) => transState.transactions[item.id] = item
            )
            return transState
        case ADD_TRANS_ITEMS:
            let newState = {...state, transactions: {...state.transactions}}
            action.items.forEach((item) => {
                newState.transactions[item.id] = item
            })
            return newState
        default:
            return { ...state }
    }
}
