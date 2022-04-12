import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import data from './data.json';
import Properties from './Properties'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export const ModelList = () => {
    
      const [showProps, setShowProps] = useState(false);
      const [modelData, setModelData] = useState({});
      const onClick1 = (id) => {
        console.log("data  --------------- ", data[id], id);
        setModelData(data[id]);
        setShowProps(true);
      };
    
      const getAllModelsList = () => {
        return data.map((cur, index) => {
          return (
            
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ArrowForwardIcon/>
                <ListItemText
                  primary={cur.model}
                  onClick={() => onClick1(index)}
                />
              </ListItemButton>
            </List>
          );
        });
      };


    return (
      <div style={{display:"flex"}}>
          <List
            sx={{ width: "100%", maxWidth: 300, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            >
            <ListItemButton style={{ background: "#1976d2", color: "White", borderRadius:"10px 10px 0px 0px"}}>
              <ListItemText primary="Models List"  />
              <FormatListBulletedIcon/>
            </ListItemButton>
              {getAllModelsList()}
         </List>
         {showProps ? (
         <Properties value={modelData}/>
         ):null}
         
      </div>
    
    );
  };
  export default ModelList;