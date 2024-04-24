import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import "../Components/modal.css"
import { useLocation, useNavigate } from 'react-router-dom'

const CheckOutPage = () => {
    const [show, setShow] = useState(false)
    const [activeTab, setActiveTab] = useState("visa")

    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"

    const handleOrderConfirm = () => {
        alert("your order is placed succesfully")
        localStorage.removeItem("cart")
        navigate(from, { replace: true })

    }
    return (
        <div className='modalCard'>
            <Button variant='primary' className='py-2' onClick={handleShow}  >Proceed to Checkout</Button>

            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                className='modal fade'
                centered
            >
                <div className='modal-dialog'>
                    <h5 className='px-3 mb-3'>Select your Payment Method</h5>
                    <div className='modal-content'>
                        <div className='modal-body'>
                            <div className="tabs mt-3">
                                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`}

                                            id='visa-tab'
                                            data-toggle="tab"
                                            role='tab'
                                            aria-controls='visa'
                                            aria-selected={activeTab === "visa"}
                                            onClick={() => handleTabChange("visa")}

                                            href='#visa'> <img src='https://i.imgur.com/sB4jftM.png' width="80"></img></a>
                                    </li>
                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}

                                            id='paypal-tab'
                                            data-toggle="tab"
                                            role='tab'
                                            aria-controls='paypal'
                                            aria-selected={activeTab === "paypal"}
                                            onClick={() => handleTabChange("paypal")}

                                            href='#paypal'> <img src='https://i.imgur.com/yK7EDD1.png' width="80"></img></a>
                                    </li>
                                </ul>
                                <div className='tab-content' id='myTabContent'>
                                    <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                                        id='visa'
                                        role='tabpanel'
                                        aria-labelledby='visa-tab'
                                    >
                                        <div className='mt-4 mx-4'>
                                            <div className='text-center'>
                                                <h5>Credit Card</h5>
                                            </div>
                                            <div className='form mt-3'>
                                                <div className='inputbox'>
                                                    <input type='text' name='name' id='name' className='form-control' required></input>
                                                    <span>Cardholder Name</span>
                                                </div>
                                                <div className='inputbox'>
                                                    <input type='text' name='number' id='number' min="1" max="999" className='form-control' required></input>
                                                    <span>Card Number</span> <i className=' fa fa-eye'></i>
                                                </div>
                                                <div className='d-flex flex-row'>
                                                    <div className='inputbox'>
                                                        <input type='text' name='number' id='number' min="1" max="999" className='form-control' required></input>
                                                        <span>Expiration Date</span>
                                                    </div>
                                                    <div className='inputbox'>
                                                        <input type='text' name='number' id='number' min="1" max="999" className='form-control' required></input>
                                                        <span>CVV</span>
                                                    </div>
                                                </div>
                                                <div className='px-5 pay'>
                                                    <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Order now</button>
                                                </div>



                                            </div>
                                        </div>

                                    </div>

                                    <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                                        id='paypal'
                                        role='tabpanel'
                                        aria-labelledby='paypal-tab'
                                    >
                                        <div className='mt-4 mx-4'>
                                            <div className='text-center'>
                                                <h5>Paypal Account Info</h5>
                                            </div>
                                            <div className='form mt-3'>
                                                <div className='inputbox'>
                                                    <input type='text' name='name' id='name' className='form-control' required></input>
                                                    <span>Enter Your Email</span>
                                                </div>
                                                <div className='inputbox'>
                                                    <input type='text' name='name' id='name' className='form-control' required></input>
                                                    <span>Your Name</span>
                                                </div>
                                                <div className='d-flex flex-row'>
                                                    <div className='inputbox'>
                                                        <input type='text' name='number' id='number' min="1" max="999" className='form-control' required></input>
                                                        <span>Extra Info</span>
                                                    </div>
                                                    <div className='inputbox'>
                                                        <input type='text' name='number' id='number' min="1" max="999" className='form-control' required></input>
                                                        <span></span>
                                                    </div>

                                                </div>



                                                <div className='px-5 pay'>
                                                    <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Order</button>
                                                </div>



                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <p className='mt-3 px-4 p-Disclaimer'>
                                    <em> Payment Disclamer: </em>XXX
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </Modal>
        </div>
    )
}

export default CheckOutPage
