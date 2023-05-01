import { useState } from "react";
import classes from "./ExpandeCollapseList.module.css";

function ExpandCollapseList(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ cursor: "pointer",marginBottom:"5px"}}   onClick={handleExpandCollapse}>
      <div style={{ display: "flex", justifyContent: "space-between",backgroundColor:"#e5e5e5",padding:"10px"}} className={classes.listItem}>
        <div style={{ fontWeight: "bold",color:"#eb523d"}}>{(props.data.displayName)}</div>
        <div>
          {isExpanded ? "-" : "+"}
        </div>
      </div>
      {isExpanded && (
        <div style={{ display: "flex", width: "100%", overflowX: "scroll" }}>
          {props.data.category.map((data) => {
            return (
              <div key={data.name} style={{ width: "500px", margin: "0 10px" }}>
                <h4 style={{marginBottom:"8px"}}>{data.name}</h4>
                {data.items.map((item) => {
                  return (
                    <div key={item.displayName} style={{ display: "flex", justifyContent: "space-between",whiteSpace:"nowrap"}}>
                      <div style={{paddingRight:"14px"}}>
                        {item.displayName}
                        <div style={{fontSize:"12px",fontWeight:"bold"}}>{item.typeOptions}</div>
                      </div>
                      <div style={{whiteSpace:"normal"}}>
                        {item.qty}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ExpandCollapseList;
