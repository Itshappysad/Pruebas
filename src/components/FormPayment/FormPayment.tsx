import React, { useState } from 'react'
import { payWithPayU } from '../../utilities/payuService';

const FormPayment = () => {
  const [formData, setFormData] = useState({
    referenceCode: '',
    description: '',
    amount: 0,
    notifyUrl: '',
    buyer: {
        name: '',
        email: '',
        // Otros campos del comprador
    },
    creditCard: {
        number: '',
        securityCode: '',
        expirationDate: '',
        // Otros campos de la tarjeta
    },
    paymentMethod: '',
    deviceSessionId: '',
    ipAddress: '',
    cookie: '',
    userAgent: ''
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const result = await payWithPayU(formData);
        console.log('Payment Result:', result);
    } catch (error) {
        console.error('Payment Error:', error);
    }
};

return (
    <form onSubmit={handleSubmit} className='flex gap-10 flex-column'>
      <section>
        <div className='row'>
          <div className='col-12'>
            <h2>Payment Details</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <input className='w-full border-solid border-2' type="text" name="referenceCode" placeholder="Reference Code" onChange={handleChange} />
          </div>
          <div className='col-6'>
            <input className='w-full border-solid border-2' type="text" name="description" placeholder="Description" onChange={handleChange} />
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <input className='w-full border-solid border-2' type="number" name="amount" placeholder="Amount" onChange={handleChange} />
          </div>
          <div className='col-6'>
            <input className='w-full border-solid border-2' type="text" name="notifyUrl" placeholder="Notify URL" onChange={handleChange} />
          </div>
        </div>
      </section>
      <section>
        <div className='row'>
          <div className='col-12'>
            <h2>Buyer Information</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <input className='w-full border-solid border-2' type="text" name="buyer.name" placeholder="Name" onChange={handleChange} />
          </div>
          <div className='col-6'>
            <input className='w-full border-solid border-2' type="email" name="buyer.email" placeholder="Email" onChange={handleChange} />
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <input className='w-full border-solid border-2' type="text" name="buyer.dniNumber" placeholder="DNI Number" onChange={handleChange} />
          </div>
          <div className='col-6'>
            <input className='w-full border-solid border-2' type="text" name="buyer.shippingAddress.street1" placeholder="Address" onChange={handleChange} />
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <input className='w-full border-solid border-2' type="text" name="buyer.shippingAddress.city" placeholder="City" onChange={handleChange} />
          </div>
          <div className='col-6'>
            <input className='w-full border-solid border-2' type="text" name="buyer.shippingAddress.country" placeholder="Country" onChange={handleChange} />
          </div>
        </div>
      </section>
      <section>
        <div className='row'>
          <div className='col-12'>
            <h2>Credit Card Information</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <input className='w-full border-solid border-2' type="text" name="creditCard.number" placeholder="Card Number" onChange={handleChange} />
          </div>
          <div className='col-6'>
            <input className='w-full border-solid border-2' type="text" name="creditCard.securityCode" placeholder="Security Code" onChange={handleChange} />
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <input className='w-full border-solid border-2' type="text" name="creditCard.expirationDate" placeholder="Expiration Date (MM/YY)" onChange={handleChange} />
          </div>
          <div className='col-6'>
            <input className='w-full border-solid border-2' type="text" name="creditCard.name" placeholder="Name on Card" onChange={handleChange} />
          </div>
        </div>
      </section>
      <section>
        <div className='row'>
          <div className='col-12'>
            <h2>Additional Information</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <input className='w-full border-solid border-2' type="text" name="paymentMethod" placeholder="Payment Method" onChange={handleChange} />
          </div>
          <div className='col-6'>
          <input className='w-full border-solid border-2' type="text" name="deviceSessionId" placeholder="Device Session ID" onChange={handleChange} />
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <input className='w-full border-solid border-2' type="text" name="cookie" placeholder="Cookie" onChange={handleChange} />
          </div>
          <div className='col-6'>
            <input className='w-full border-solid border-2' type="text" name="userAgent" placeholder="User Agent" onChange={handleChange} />
          </div>
        </div>
      </section>      

      <div className='row'>
        <div className='col-12 flex justify-center'>
          <button type="submit" className='border-solid border-2 border-[#000000] bg-[#ffffff] w-[200px] h-[4vh]'>Pay</button>
        </div>
      </div>
    </form>
);
}

export default FormPayment