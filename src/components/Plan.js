import React from "react";
import Image from 'react-bootstrap/Image'
import About from "../img/about1.jpg"
import wave from "../img/hero wave.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function Plan(){
    return(
        <div className="container-plan">
            <div className="plan-card">
                <div className="card-image">
                    <Image
                        src={About}
                    />
                </div>
                <div className="content">
                    <h1>So what are our plans?</h1>
                        <div >

                            <p>Our municipal management system provides service for the issues registered issue by people to municipality. 
                                All the complaints received from the people are assigned to the different departments according to the complaint 
                                category and their priority.</p><br/>
                            <p>Relatable issues will be sorted by the
                                employee and review will be provided on the basis of the service
                                satisfaction.</p><br/>
                            <p>People from around the world can complaint with the help of our
                                website which is simple yet effortless complaints by launching the page
                                so that even a common civilian could be able to use the website with
                                trouble-free.</p><br/>
                            <p>Complaints of the civilians are directly reported through online website.
                                As the Management registers the complaint it verifies the location and
                                issue will be handed over to the municipality.
                                The workers who are assigned the complaint will proceed to the place
                                and they will resolve the problem and update the status of issue in the
                                website.</p><br/>
                            <p>The complaint will be marked as done and notification will be sent to the
                                registered civilian and photos of the resolved problem.</p>      
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Plan;