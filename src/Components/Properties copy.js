import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import {Button} from "./Button";
import Details from "./Details";
import Testcomp from "./Testcomp";

export const Properties= (props) => {

  const{
    params,
    image,
    _id,
    model,
    last_update
  } = props.value;

  // console.log("Arpit",props);
    const [showDetails, setShowDetails] = useState(true);
    const [elementText, setElementText] = useState("");
    const [detailText, setDetailText] = useState("");
    const [statusText, setStatusText] = useState("");
    const [showProps, setShowProps] = useState(true);

    // const showDetailsForLists = (type) => {
    //     return Data[type].map((cur) => {
    //       console.log("cur", cur);
    //       const colour = cur.model == "Fail" ? "#FFDADA" : "#E0FFDA";
    //       return (
    //         <div
    //           style={{
    //             display: "flex",
    //             justifyContent: "space-between",
    //             background: colour,
    //           }}
    //         >
    //           <div>{cur.model}</div>
    //           <div>{cur.Status}</div>
    //           <Button
    //             onClick={() => {
    //               // setShowDetails(!showDetails);
    //               setDetailText(cur.Details);
    //               setElementText(cur.model);
    //               setStatusText(cur.Status);
    //             }}
    //             buttonStyle={{ padding: "0px 0px", fontSize: "12px" }}
    //           >
    //             Details
    //           </Button>
    //         </div>
    //       );
    //     });
    //   };
    
    const getAllModelsList = () => {
      return params.map((cur, index) => {
        
        return (
          
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <div>
                <div>Element Name: {cur.element}</div>
                {/* <div>Status: {statusText}</div>
                <div>Decision: {detailText}</div> */}
              </div>
            </ListItemButton>
          </List>
        );
      });
    };

    
    return (
            <div style={{background:"green"}}>
            {showProps ? (
                <div style={{ display: "flex", justifyContent: "space-between" , width:"100%"}}>
                  <div style={{ flexDirection:"row-reverse", width:"100%", }}>
                    <img
                      src={props.value.image}
                      style={{ width: "100%", maxHeight: "500px" }}
                    />
                    {showDetails ? <div>
                                      <div>Element Name: {elementText}</div>
                                      <div>Status: {statusText}</div>
                                      <div>Decision: {detailText}</div>
                                    </div> : null}
                                    
                    </div>
                        {/* {getAllModelsList()} */}
                  </div>
                ) : null}
            </div>
           )
  };
  export default Properties;