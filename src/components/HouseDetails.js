export default function HouseDetails(props) {
    return(
        <div style={{ display: "flex",flexDirection: "column", justifyContent: "space-between", alignItems: "stretch", marginBottom: "10px", width:"80%"}}>
                <div style={{ fontWeight: "bold",color:"#eb523d" }}>{props.title}</div>
                <div style={{ display: "flex", alignItems: "center",justifyContent:"space-between",margin:"10px 0px"}}>
                  <div>
                    <div style={{ fontWeight: "bold" }}>
                    {props.itemTitle1}
                    </div>
                    <div>{props.itemDes1}</div>
                  </div>
                  
                  <div>
                    <div style={{fontWeight: "bold"}}>
                    {props.itemTitle2}
                    </div>
                    <div>{props.itemDes2}</div>
                  </div>
                  <div>
                  <div style={{ fontWeight: "bold"}}>{props.itemTitle3}</div>
                  <div>{props.itemDes3}</div>
                  </div>
                </div>
              </div>
    )
}