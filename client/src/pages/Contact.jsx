import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport} from 'react-icons/bi'

const Contact = () => {
  return (
    <Layout>
       <div className="row contacts">
        <div className="col-md-6">
          <img src="/images/contact.webp" alt="Contact us" srcset="" style={{ width:"100%"}}/>
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className='text-justify mt-3 '>any query info about product feel free to call anytime we 24x7 available</p>
          <p className='mt-3'>
            <BiMailSend/> : www.help@ecommerce.com
          </p>
          <p className='mt-3'>
            <BiPhoneCall/> : 012-5656453
          </p>
          <p className='mt-3'>
            <BiSupport/> : 1800- 0000 - 9090 (toll free)
          </p>
        </div>
       </div>
    </Layout>
  )
}

export default Contact
