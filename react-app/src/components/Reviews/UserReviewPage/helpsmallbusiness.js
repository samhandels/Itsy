import OpenModalButton from "../../OpenModalButton"
import ReviewFormModal from "../ReviewFormModal"

export const LeaveReviewPrompt = ({noReviews}) => {


    return (
        <div id='help-small-business-outer-div'>
            <div className="help-small-business">
                <div className="help-small-bus-title">Your reviews on Itsy help shop owners by providing them instant feedback and allowing
                    them to stock their shops with items their customers will love.</div>
                {noReviews.length ? <div>
                    <div id='unreviewed-line'></div>
                    <div className="unreviewed-title">Unreviewed items</div>
                    {noReviews?.map((purchase) => (
                        <OpenModalButton
                            buttonText={<div className="unreviewed-purchases">
                                <div><img className="unreview-product-img" src={purchase.product_image}></img></div>
                                <div className='unrev-prod-info'>
                                    <div>{purchase.name}</div>
                                    <div>Purchased from: {purchase.ownerName}</div>
                                </div>
                            </div>}
                            modalComponent={<ReviewFormModal productId={purchase.id} />}
                        />))}
                </div> : <div></div>}

            </div>
        </div>

    )
}
