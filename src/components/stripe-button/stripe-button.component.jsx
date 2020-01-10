import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_AIs5VkgysUAnkJrJnAEv0O5M00qAdfwTee';

  const onToken = token => {
    console.log(token);
    alert('Payement Successfull')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='BareBack Store Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;