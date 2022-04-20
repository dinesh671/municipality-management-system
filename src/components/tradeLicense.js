import React, {useState} from "react";
import "./form.css"
import "../app.css"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import PersonalDetails from "./tradeLicenseForm/PersonalDetails";
import Tradeinfo from "./tradeLicenseForm/Tradeinfo";
import Agrement from "./tradeLicenseForm/Agrement";


const steps = [
  "PersonalDetails", 
  "Tradeinfo", 
  "Agreement"
];

export default function TradeLicense(){
    const [page,setPage]=useState(0);
    const FormTitles =["PersonalDetails", "Tradeinfo", "Agreement"];
    const PageDisplay=()=>{
        if(page===0){
            return(<PersonalDetails/>)
            }else if(page===1){
                return(<Tradeinfo/>)
            }else{
                return(<Agrement/>)
            }
    }


    return(
        <div className="container">
            <h1>Sehore Municipality Trade License</h1>
            
            <Stepper activeStep={page} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                <StepLabel>{label}</StepLabel>
                </Step>
            ))}
            </Stepper>
                
            <div className="form-container" action="https://formspree.io/f/xoqrkyyw" method="post">
                <div className="header">
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="body">
                    {PageDisplay(page)}
                </div>
                <div className="trade-footer">
                    <button className="btn-cta"
                     disabled={page === 0}
                     onClick={()=>{
                        setPage((currPage) => currPage-1)
                    }}
                    >Prev</button>
                    <button className="btn-cta"
                    disabled={page === FormTitles.length-1}
                     onClick={()=>{
                        setPage((currPage) => currPage+1)
                    }}>Next</button>
                </div>
            </div>
        </div>
    )
}

 
