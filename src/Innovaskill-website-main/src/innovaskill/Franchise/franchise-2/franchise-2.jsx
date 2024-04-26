import "./franchise-2.css";
import collage from './images/COLLEGE MoU.png';
import company from './images/PLACEMENT.png';
function Franchise2(){

    return(<>
        {/* <div className="franschise-2-main">

            <div className="franchise-2-body">

                <div className="franchise-2-head">
                    <h1> Collage MoU </h1>
                </div>

                <div className="franchise-2-img">
                    <img src={collage}/>
                </div>

            </div>

        </div> */}

        <section className="fsd_section5">
          <h1>Innovaskill Technologies In Association with :</h1><br/>
            <section>
                <img src={collage} />
            </section>
        </section>
        <section className="fsd_section6">
          <h1>Our Clients / Our Student Working Companyies :</h1>
          <img src={company} />
        </section>

{/* <FormDiv/> */}
    </>)
}
export default Franchise2;


function FormDiv(){
    
    
    return(<>

        <div className="franchise-form-main">

            <div className="franchise-form-body">

                <div className="franchise-form">

                    <div className="franchise-form-head">
                        <h1> Franchise Enquiry Form </h1>
                    </div>

                    <div className="form">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Education/Qualification"/>
                        <input type="number" placeholder="Contact Number"/>
                        <input type="text" placeholder="Alternate Number"/>
                        <input type="email" placeholder="Alternate Number"/>
                        <select>
                            <option> Fresher </option>
                            <option> Experience </option>
                        </select>
                    </div>
                </div>

                <div className="">

                </div>

            </div>

        </div>

    </>)
}