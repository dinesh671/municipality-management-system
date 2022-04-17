import React from "react";
import "./sidebar.css";
import {SideBarData} from "./SidebarData"
function SideBar(){
    return(
        <div className="sidebar">
            <ul className="sidebarList">
                {SideBarData.map((val, key)=>{
                return <li key={key} className="row" onClick={()=>{window.location.pathname =val.link}}>{" "} 
                <div id="icon">
                        {val.icon} 
                    </div> {" "}
                    <div id="title">
                        {val.title}
                    </div> 
                    </li>;
            })}
            </ul>
        </div>
    )
}
export default SideBar;