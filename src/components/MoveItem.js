import classes from "./MoveItem.module.css";
import arrow from "../Assets/Icons/arrow.svg"
import home from "../Assets/Icons/home.svg"
import danger from "../Assets/Icons/danger.svg"
import distance from "../Assets/Icons/distance.svg"
import packagebox from "../Assets/Icons/packagebox.svg"
import calendar from "../Assets/Icons/calender.svg"

import React,{useState} from "react";

import ExpandCollapseList from "./ExpandeCollapseList";
import HouseDetails from "./HouseDetails";

const monthNames = ["Jan ", "Feb ", "Mar ", "Apr ", "May ", "Jun ",
  "Jul ", "Aug ", "Sep ", "Oct ", "Nov ", "Dec "
];

export default function MoveItem(props) {
    const [showDetails,setShowDetails] = useState(false);

    console.log(props)
    return (
        <div style={{width: "80%", margin: "auto", display: "flex", flexDirection: "column",height:"auto", borderBottom:"2px solid #bbb",marginTop:"10px"}}>
          {/* First Div */}
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", flex: "3"}}>
            <div style={{paddingBottom:"50px"}}>
              <div style={{fontWeight: "bold"}}>From</div>
              <div>{props.data.from_address.fromLocality},{props.data.from_address.fromCity},{props.data.from_address.fromState}</div>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "50px", width: "50px", backgroundColor: "white", borderRadius: "50%", boxShadow: "2px 2px 3px 0px rgba(0,0,0,0.3)"}}>
            <img src={arrow} style={{width:24,height:24}}></img>
        </div>
            <div style={{paddingBottom:"50px"}}>
              <div style={{fontWeight: "bold"}}>To</div>
              <div>{props.data.to_address.toLocality},{props.data.to_address.toCity},{props.data.to_address.toState}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", flexDirection:"column",paddingBottom:"50px",textAlign:"left"}}>
        <div style={{ fontWeight: "bold", marginRight: "4px" }}>Request#</div>
        <div style={{fontWeight:"bold",color:"#EB523D"}}>{props.data.estimate_id}</div>
      </div>
          </div>
    
          {/* Second Div */}
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", flex: "2",paddingBottom:"10px"}}>
            <div style={{display: "flex", alignItems: "center"}}>
              <img src={home} alt="house icon" style={{height: "26px", width: "26px", marginRight: "10px"}} />
              <div>{props.data.property_size}</div>
            </div>
            <div style={{display: "flex", alignItems: "center"}}>
              <img src={packagebox} alt="packages icon" style={{height: "26px", width: "26px", marginRight: "10px"}} />
              <div>{props.data.total_items}</div>
            </div>
            <div style={{display: "flex", alignItems: "center"}}>
              <img src={distance} alt="distance icon" style={{height: "26px", width: "26px", marginRight: "10px"}} />
              <div>{props.data.distance}</div>
            </div>
            <div style={{display: "flex", alignItems: "center",whiteSpace:"normal"}}>
              <img src={calendar} alt="calender icon" style={{height: "26px", width: "26px", marginRight: "10px"}} />
              <div>{monthNames[(new Date(props.data.moving_on+"")).getMonth()] + (new Date(props.data.moving_on+"")).getDay()+"th " + (new Date(props.data.moving_on+"")).getFullYear() + " at " + (new Date(props.data.moving_on+"")).getHours() + ":" + (new Date(props.data.moving_on+"")).getMinutes()}</div>
              <div>
              <input style={{color:"#eb523d"}} type="checkbox" checked={true} />
              isFlexible
            </div>
            </div>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                alignContent:"center",

            }}>
              <button style={{border:"3px solid red",backgroundColor: "white",padding:"10px 20px", borderRadius:"5px", color:"#eb523d"}} onClick={() => {setShowDetails(prev => !prev)}}>View More Details</button>
              <div style={{
                width:"15px"
              }}></div>
              <button style={{border:"3px solid red",backgroundColor: "#eb523d",padding:"10px 20px", borderRadius:"5px", color:"white"}}>{props.data.custom_status}</button>
            </div>
          </div>
    
          {/* Third Div */}
          <div style={{display: "flex", justifyContent: "start", alignItems: "start", flex: "1",paddingBottom:"10px",fontSize:"14px"}}>
            <img src={danger} alt="danger icon" style={{height: "16px", width: "16px", marginRight: "10px"}} />
            <div><span style={{fontWeight:"bold"}}>Disclaimer:</span>Please Update Your Move Date Before 2 Days Of Shifting</div>
          </div>
          {showDetails && 
              <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
              {/* First Div */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div>
                <div style={{ fontWeight: "bold",fontSize:"20px"}}>Additional Details</div>
                Test Test
                </div>
                <button style={{ backgroundColor: "black", color: "white", padding: "10px 20px", borderRadius: "5px" }}>Edit Additional Details</button>
              </div>
        
              {/* Second Div */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div style={{ fontWeight: "bold",fontSize:"20px"}}>House Details</div>
                <div style={{ display: "flex", alignItems: "center" }}>
                <button style={{ backgroundColor: "black", color: "white", padding: "10px 20px", borderRadius: "5px" }}>Edit House Details</button>  
                </div>
              </div>
               <HouseDetails title="Existing House Details" itemTitle1="Floor No." itemDes1={props.data.old_floor_no} itemTitle2="Elevator Available" itemDes2={props.data.old_elevator_availability} itemTitle3="Distance from Elevator/Stircase to Truck" itemDes3="11"></HouseDetails>       
               <HouseDetails title="Existing House Details" itemTitle1="Floor No." itemDes1={props.data.new_floor_no} itemTitle2="Elevator Available" itemDes2={props.data.new_elevator_availability} itemTitle3="Distance from Elevator/Stircase to Truck" itemDes3="11"></HouseDetails>
              <div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div style={{ fontWeight: "bold",fontSize:"20px"}}>Inventory Details</div>
                <div style={{ display: "flex", alignItems: "center" }}>
                <button style={{ backgroundColor: "black", color: "white", padding: "10px 20px", borderRadius: "5px" }}>Edit Inventory Details</button>  
                </div>
              </div>
              <div style={{marginTop:"20px"}}>
              {props.data.items.inventory.map((data) => {
                return(
                    <ExpandCollapseList data={data}></ExpandCollapseList>
                )
              })}
              </div>    
              </div>
            </div>
          }
        </div>
      );
}