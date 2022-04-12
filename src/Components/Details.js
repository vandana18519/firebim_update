import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Data from './data.json';
import {Button} from "./Button";

export const Details= (props) => {
  const{
    params,
    image,
    _id,
    model,
    last_update
  } = props.value;

    const [showDetails, setShowDetails] = useState(true);
    const [elementText, setElementText] = useState("");
    const [detailText, setDetailText] = useState("");
    const [statusText, setStatusText] = useState("");
    const [showProps, setShowProps] = useState(true);
    
    const getAllModelsList = () => {
      return params.map((cur, index) => {
        console.log("Vandana");
        return (

          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <div>
                {/* <div>Element Name: {cur.element}</div> */}
                {/* <div>Status: {statusText}</div>
                <div>Decision: {detailText}</div> */}
              </div>
            </ListItemButton>
          </List>
        );
      });
    };

  
    return (
      <div style={{ display:"flex", background:"yellow" }}>
        Okay
      </div>
    )
  };
  export default Details;