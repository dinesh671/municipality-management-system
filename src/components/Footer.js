import React from "react";
import { ModalFooter } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function Footer(){
    return(
        <ModalFooter sticky="bottom" className="stick-footer" style={{background:"#001220"}}>
            <div className="address">
            <p bg="dark"  >

             <p > <strong>Municipality Service System</strong><br/>
                     A Govt. of Madhya Pradesh Undertaking</p>
                     <p>Kotri Kalan</p>
                     <p>Ashta Tehsil, <br/>
                       Sehore District, <br/>
                       MP - 466114, Madhya Pradesh</p>
            </p>
            <iframe title="sehore municipality office" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8232.58186046359!2d77.0748049645783!3d23.
            19944141720608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397cf36b16256c83%3A0x4c06ebac520a47f9!2sNagar%20Palika%20Sehore!5e0!3m2!1sen!2sin!
            4v1650009414129!5m2!1sen!2sin" width="1052" height="250" style= {{border:"0"}} loading={"lazy"} 
            referrerpolicy={"no-referrer-when-downgrade"}></iframe>

            
        </div>
        </ModalFooter>
    );
}

export default Footer;

/**
 * <iframe title="sehore municipality office" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8232.58186046359!2d77.0748049645783!3d23.
            19944141720608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397cf36b16256c83%3A0x4c06ebac520a47f9!2sNagar%20Palika%20Sehore!5e0!3m2!1sen!2sin!
            4v1650009414129!5m2!1sen!2sin" width="1052" height="250" style= {{border:"0"}} loading={"lazy"} 
            referrerpolicy={"no-referrer-when-downgrade"}></iframe>
 */