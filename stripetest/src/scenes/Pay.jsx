import StripeCheckout from 'react-stripe-checkout';
import React, { useState,useEffect } from 'react';
import axios from "axios";

const KEY ="pk_test_51MOgENGjIAVyKS8VrCNqSps0Cv053QIHPWLvQh2yYHfGVGUaghNomhyVbex2KhH8RO3kkpF2Ly1TK0IK9B4tmH2700NRvC9ELE";

const Pay = () => {
    const [stripeToken,setStripeToken] = useState(null);
    const onToken = (token) =>{
        setStripeToken(token);
    }
    useEffect(()=>{
        const makeRequest = async () =>{
            try{
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }, {
                        headers: {'Content-Type': 'application/json'}
                    }
                );
                console.log(res.data);
            }catch(err){
                console.log(err);
            }
        };
        console.log(stripeToken);
        stripeToken && makeRequest();
    },[stripeToken]);
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <StripeCheckout
                name="E-commerce"
                image="https://avatars.githubusercontent.com/u/106019346?s=400&v=4"
                billingAddress
                shippingAddress
                description={`Your total is $20`}
                amount={200}
                token={onToken}
                stripeKey={KEY}
            >
                <button
                style={{
                    border: "none",
                    width: "120",
                    borderRadius: 5,
                    padding: "20px",
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "600",
                    cursor: "pointer",
                }} 
                >
                    Pay Now
                </button>
            </StripeCheckout>
        </div>
    )
}

export default Pay