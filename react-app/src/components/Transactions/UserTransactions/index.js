import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTransactionItemsThunk } from "../../../store/transactionReducer"
import { fetchProducts } from "../../../store/productsReducer"
import { useState } from "react"

import "./UserTransactionPage.css"
const UserTransactionPage = () => {
    const dispatch = useDispatch()

    const user = useSelector((state) => state.session.user)

    const transactions = useSelector((state) => state.transactions.transactions)
    const products = useSelector((state) => state.products)
    const prodArr = Object.values(products)
    const transArr = Object.values(transactions)
    let userTransactions = transArr.filter((trans)=> trans.userId === user.id)
    let uniqueTransaction = {}
    userTransactions.forEach((userTransaction) => {
        if(!uniqueTransaction[userTransaction.transactionId]){
            uniqueTransaction[userTransaction.transactionId] = 1
        } else {
            uniqueTransaction[userTransaction.transactionId] += 1;
        }
    })
    let uniqueTransArr = Object.keys(uniqueTransaction)

    const filterTransactions = (uniqueTransId, userTransactions)  => {
        let retArr = []
        for(let i = 0;i< userTransactions.length;i++) {
            if(userTransactions[i].transactionId === parseInt(uniqueTransId)) {
                retArr.push(userTransactions[i])
            }
        }
        return retArr
    }

    const getPrice = (uniqueTransId, userTransactions)  => {
        let price = 0
        for(let i = 0;i< userTransactions.length;i++) {
            // console.log("PRICE", price)
            if(userTransactions[i].transactionId === parseInt(uniqueTransId)) {
                price += userTransactions[i].price
            }
        }
        return price
    }

    const returnProductImage = (productId) => {
        for(let i = 0;i< prodArr.length;i++) {
            if(prodArr[i].id == productId) {
                // console.log(prodArr[i].product_image)
                return prodArr[i].product_image
            }
        }
    }


    useEffect(() => {
        dispatch(getTransactionItemsThunk())
    }, [dispatch])

    useEffect(()=> {
        dispatch(fetchProducts())
    },[dispatch])

    return (
        <div id='outer-div-purchase-history'>

            <div id='inner-div-purchase-history'>

            <div id='my-purchase-page-sign'>My Purchase History</div>
            <div id='purchase-line'></div>
      <div id='purchase-butt'>
        See all your past purchases
      </div>
        <div id='other-transaction-holder-purchase'>

            {
                uniqueTransArr.map((uniqueTransId)=> (
                    <div id='transaction-holder-purchase'>
                        <div id='transaction-number-purchase'>Transaction # {uniqueTransId}</div>
                            <div id='one-transaction-purchase'>
                            {filterTransactions(uniqueTransId, userTransactions).map((item)=> (
                                <div id='item-transaction-purchase' className = "transaction-details">
                                    <img className = "purchased-product-image" src={returnProductImage(item.productId)}></img>
                                    <div id='item-name-purchase'>{item.productName}</div>
                                </div>
                                ))}
                            </div>
                        <div id='price-purchase'>Total Price: {getPrice(uniqueTransId, userTransactions)}</div>
                    </div>
                ))
            }


        </div>




            </div>
        </div>
    )
}

export default UserTransactionPage
