import { NavLink } from "react-router-dom"
import "./HelpSection.css"

const OrderIssuePage = () => {

    return (
        <div>
            <div className="order-issue-directory">
                <NavLink to="/help">Help home</NavLink>
                <i className="fa-solid fa-chevron-left"></i>
                <NavLink to="/help/your-orders">Your orders</NavLink>
                <i className="fa-solid fa-chevron-left"></i>
                <NavLink to="/help/order-issues">Order Issues & Returns</NavLink>

            </div>
            <div className="help-main">
                <div className="help-section-nav-bar-left">
                    <NavLink className="left-navbar-link" to="/help/buying">Buying on Etsy</NavLink>
                    <NavLink className="left-navbar-link" to="/help/cart">Cart & Payment</NavLink>
                    <NavLink className="left-navbar-link" to="/help/your-orders">Your Orders</NavLink>
                    <NavLink className="left-navbar-link" to="/help/your-account">Your Etsy Account</NavLink>
                </div>
                <div className="help-section-nav-bar-right">
                    <div className="help-section-header">How to Get Help with An Order</div>
                    <div className="help-section-quick-answer">
                        <div className="help-section-quick-answer-title">
                            <i className="fa-solid fa-wand-sparkles"></i>
                            <p>Quick Answer</p>
                        </div>
                        <div className="help-section-quick-answer-main">
                            <p>If you need help with your order: </p>
                            <button className="help-button">Choose your order</button>
                            <p>If you contacted the seller more than 48 hours ago, choose
                                Open a Case so Itsy can help you. For qualifying orders,
                                you’ll receive a refund for any item that doesn’t arrive,
                                arrives damaged, or doesn’t match the item description or
                                photos.</p>
                        </div>
                    </div>
                    <div>
                        <p>If you need help with an order, the seller you purchased your order from
                            is the best person to help you.
                        </p>
                        <ul>
                            <li>Check your order status</li>
                            <li>Update your shipping address</li>
                            <li>Make a change to your order</li>
                            <li>Request a refund, return, or exchange</li>
                            <li>Request a cancellation</li>
                        </ul>
                    </div>
                    <div>
                        <div className="help-order-diagram-title">Getting help with an order</div>
                        <div className="help-order-diagram">
                            <div className="help-order-diagram-step">
                                <div className="help-order-diagram-step-title">After you place an order</div>
                                <div className="help-order-diagram-step-comment">
                                    Your order confirmation email lets you know when your order
                                    should arrive, and other important details.
                                </div>
                                <div className="help-order-diagram-step-callout">
                                    <i className="fa-solid fa-envelope-open-text"></i>
                                    <div >If you can't find the email, check your spam folder</div>
                                </div>
                            </div>
                            <i className="fa-solid fa-arrow-right"></i>
                            <div className="help-order-diagram-step">
                                <div className="help-order-diagram-step-title">Before the estimated delivery date</div>
                                <div className="help-order-diagram-step-comment">
                                    If you need help with your order, the first step is to send the
                                    seller a Help with Order request
                                </div>
                                <div className="help-order-diagram-step-callout">
                                    <i className="fa-regular fa-comments"></i>
                                    <div>90% of all issues are solved by sellers</div>
                                </div>
                            </div>
                            <i className="fa-solid fa-arrow-right"></i>
                            <div className="help-order-diagram-step">
                                <div className="help-order-diagram-step-title">After the estimated delivery date</div>
                                <div className="help-order-diagram-step-comment">
                                    If you still need help 48 hours after you messaged the seller,
                                    open a case so Itsy can step in
                                </div>
                                <div className="help-order-diagram-step-callout">
                                    <i className="fa-solid fa-bullhorn"></i>
                                    <div>Open a case within 100 days of the estimated delivery date</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        Related Articles
                    </div>
                    <div>
                        Still have questions?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderIssuePage
