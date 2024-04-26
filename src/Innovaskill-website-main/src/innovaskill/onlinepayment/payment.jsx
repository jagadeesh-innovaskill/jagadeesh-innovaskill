import './payment.css';
import logo from './images/logo.png';
import Barcode from 'react-barcode';
import { Link } from "react-router-dom";

function OnlinePayment() {


    return (<>


    <div className='payment-main-div'> 

    <div className='logo-div'>
        <img src={logo}/>
    </div>

<div>
    {/* <Barcode value='https://www.innovaskill.in' width={1} height={100} displayValue={false} format='CODE128'/> */}
</div>

        <div className='payment-body'>

            <div className='payment-title'>
                <h2> Online Payment </h2>
            </div>

            {/* <form>
                <input type='text' placeholder='Account Name' />
                <input type='number' placeholder='Account Number' />
                <input type='text' placeholder='Account Type'/>
                <input type='number' placeholder='IFSC code'/>
                <input type='text' placeholder='Bank Name'/>
                <input type='text' placeholder='Branch Name'/>
            </form> */}

            <div className='payment-details-div'>
                <div className='payment-body-div'>
                    <h3>Account Name  </h3>  :  <p>Innovaskill Technologies Private Limited </p>
                </div>
                <div className='payment-body-div'>
                    <h3>Account Number </h3> : <p> 029705006344 </p>
                </div>
                <div className='payment-body-div'>
                    <h3>Account Type </h3>  :  <p> Current </p>
                </div>
                <div className='payment-body-div'>
                    <h3> IFSC code </h3> :  <p>ICIC0000297 </p>
                </div>
                <div className='payment-body-div'>
                    <h3> Bank Name </h3> :  <p>ICICI Bank </p>
                </div>
            </div>

            <div className='payment-home-btn'>
                <Link to={'/'}> <button> Home </button> </Link> 
            </div>

        </div>

    </div>

    </>);
}

export default OnlinePayment;
