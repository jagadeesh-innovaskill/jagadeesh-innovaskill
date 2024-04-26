import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/home";
import Enquiry from "./enquiryForm/enquiry";
import OnlinePayment from "./onlinepayment/payment";
import Mernstack from "./src/component/MERN_Stackcourse/MERN_Stack";
import Kidspage from "./src/component/kidspage/kids_page";
import Studentlogin from "./src/component/Studentlogin_page/studentlogin";
import Franchise from "./Franchise/franchise";





function Main(){

    return (<>

    <BrowserRouter>
        <Routes>
            <Route path="/"                      element={<Home/>}/>
            <Route path="/enquiry-form"          element={< Enquiry/>}/>
            <Route path="/online-payment"        element={ <OnlinePayment/> }/>
            <Route path="mern-stack"             element={<Mernstack/>}/>
            <Route path="/kids"                  element={<Kidspage/>}/>
            <Route path="/student-login"         element={<Studentlogin/>}/>
            <Route path="/franchise-opportunity" element={<Franchise/>}/>
        </Routes>
    </BrowserRouter>
    
    </>);
}

export default Main;
