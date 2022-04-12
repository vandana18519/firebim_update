import React, { useState } from "react";
// import { useStoreActions, useStoreState } from "easy-peasy";
import "../Style/App.css";
// import "./Home.css";
import { Button } from "./Button";
import { isEmpty } from "lodash";
import Heading from './Heading';

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Table_ from './Table';
import Paper from '@mui/material/Paper';

const Home = ()=> {
  const data = {
    Floors: [
      {
        id: 1,
        Element: "Floor101",
        Status: "Pass",
        Details: "Blah Blah Blah Floor101",
      },
      {
        id: 2,
        Element: "Floor102",
        Status: "Fail",
        Details: "Blah Blah Blah Floor102",
      },
      {
        id: 3,
        Element: "Floor103",
        Status: "Pass",
        Details: "Blah Blah Blah Floor103",
      },
    ],
    Beam: [
      {
        id: 1,
        Element: "Beam101",
        Status: "Pass",
        Details: "Blah Blah Blah Beam101",
      },
      {
        id: 2,
        Element: "Beam102",
        Status: "Fail",
        Details: "Blah Blah Blah Beam102",
      },
      {
        id: 3,
        Element: "Beam103",
        Status: "Pass",
        Details: "Blah Blah Blah Beam103",
      },
    ],
    Walls: [
      {
        id: 1,
        Element: "Walls101",
        Status: "Pass",
        Details: "Blah Blah Blah Walls101",
      },
      {
        id: 2,
        Element: "Walls102",
        Status: "Fail",
        Details: "Blah Blah Blah Walls102",
      },
      {
        id: 3,
        Element: "Walls103",
        Status: "Pass",
        Details: "Blah Blah Blah Walls103",
      },
    ],
  };

  const data1 = {
    Floors: [
      {
        id: 1,
        Element: "Floor101",
        Status: "Pass",
        Details: "Blah Blah Blah Floor101",
      },
      {
        id: 2,
        Element: "Floor102",
        Status: "Fail",
        Details: "Blah Blah Blah Floor102",
      },
      {
        id: 3,
        Element: "Floor103",
        Status: "Pass",
        Details: "Blah Blah Blah Floor103",
      },
    ],
    Beam: [
      {
        id: 1,
        Element: "Beam101",
        Status: "Pass",
        Details: "Blah Blah Blah Beam101",
      },
      {
        id: 2,
        Element: "Beam102",
        Status: "Fail",
        Details: "Blah Blah Blah Beam102",
      },
      {
        id: 3,
        Element: "Beam103",
        Status: "Pass",
        Details: "Blah Blah Blah Beam103",
      },
    ],
    Walls: [
      {
        id: 1,
        Element: "Walls101",
        Status: "Pass",
        Details: "Blah Blah Blah Walls101",
      },
      {
        id: 2,
        Element: "Walls102",
        Status: "Fail",
        Details: "Blah Blah Blah Walls102",
      },
    ],
  };

  const models = [
    {
      modelId: 1001,
      data: { ...data },
    },
    {
      modelId: 1002,
      data: { ...data1 },
    },
    {
      modelId: 1003,
      data: { ...data },
    },
    {
      modelId: 1004,
      data: { ...data1 },
    },
    {
      modelId: 1005,
      data: { ...data },
    },
    {
      modelId: 1006,
      data: { ...data1 },
    },
    {
      modelId: 1007,
      data: { ...data },
    },
    {
      modelId: 1008,
      data: { ...data1 },
    },
  ];

  const [showProps, setShowProps] = useState(false);
  const [showDetails, setShowDetails] = useState(true);
  const [detailText, setDetailText] = useState("");
  const [statusText, setStatusText] = useState("");
  const [elementText, setElementText] = useState("");
  const [modelData, setModelData] = useState({});
  // const { updateUserProfileInClientStore } = useStoreActions(
  //   (actions) => actions.profile
  // );

  const onClick1 = (data) => {
    console.log("data  --------------- ", data);
    setModelData(data);
    setShowProps(true);
  };

  const onClick = () => {
    setShowDetails(true);
    setShowProps(!showProps);
  };

  const [open, setOpen] = React.useState(false);
  const [open0, setOpen0] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClick = (num) => {
    if (num == 0) {
      setOpen0(!open0);
    }
    if (num == 1) {
      setOpen1(!open1);
    }
    if (num == 2) {
      setOpen2(!open2);
    }
    if (num == 3) {
      setOpen3(!open3);
    }
    if (num == 4) {
      setOpen(!open);
    }
    setOpen(!open);
  };

  const showDetailsForLists = (type) => {
    return modelData[type].map((cur) => {
      console.log("cur", cur);
      const colour = cur.Status == "Fail" ? "#FFDADA" : "#E0FFDA";
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            background: colour,
          }}
        >
          <div>{cur.Element}</div>
          <div>{cur.Status}</div>
          <Button
            onClick={() => {
              setShowDetails(!showDetails);
              setDetailText(cur.Details);
              setElementText(cur.Element);
              setStatusText(cur.Status);
            }}
            buttonStyle={{ padding: "0px 0px", fontSize: "12px" }}
          >
            Details
          </Button>
        </div>
      );
    });
  };

  const getAllModelsList = () => {
    return models.map((cur) => {
      return (
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4, margin:"5px"}}>
            <ListItemText
              primary={cur.modelId}
              onClick={() => onClick1(cur.data)}
            />
          </ListItemButton>
        </List>
      );
    });
  };
  
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <List
          sx={{ width: "100%", maxWidth: 300, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton
            onClick={() => handleClick(4)}
            style={{ background: "#1976d2", color: "White", borderRadius:"0px 10px"}}
          >
            <ListItemText primary="Models List"  />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {getAllModelsList()}
          </Collapse>
        </List>

        {showProps ? (
          <div style={{ display: "contents", justifyContent: "space-between" , width:"100%"}}>
            <div style={{ flexDirection:"row-reverse", width:"100%"}}>
              <img
                src="/images/img-1.jpg"
                style={{ width: "100%", maxHeight: "500px" }}
              />
              {showDetails ? <div>
                                <div>Element Name: {elementText}</div>
                                <div>Status: {statusText}</div>
                                <div>Decision: {detailText}</div>
                                <Table_/>
                              </div> : null}
                              
            </div>
             <div style={{ display:"contents" }}>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton
                onClick={() => handleClick(0)}
                style={{ background: "#1976d2", color:"white" }}
              >
                <ListItemText primary="Properties" />
                {open0 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open0} timeout="auto" unmountOnExit>
                <ListItemButton
                  onClick={() => handleClick(1)}
                  style={{ background: "#DAF3FF" }}
                >
                  <ListItemText primary="Floors" />
                  {open1 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open1} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <div
                      style={{
                        display: "flex",
                        fontSize: "25px",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>Element</div>
                      <div>Status</div>
                      <div>Details</div>
                    </div>
                    {showDetailsForLists("Floors")}
                  </List>
                </Collapse>

                <ListItemButton
                  onClick={() => handleClick(2)}
                  style={{ background: "#DAF3FF" }}
                >
                  <ListItemText primary="Beam" />
                  {open2 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>Element</div>
                      <div>Status</div>
                      <div>Details</div>
                    </div>
                    {showDetailsForLists("Beam")}
                  </List>
                </Collapse>

                <ListItemButton
                  onClick={() => handleClick(3)}
                  style={{ background: "#DAF3FF" }}
                >
                  <ListItemText primary="Walls" />
                  {open3 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open3} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>Element</div>
                      <div>Status</div>
                      <div>Details</div>
                    </div>
                    {showDetailsForLists("Walls")}
                  </List>
                </Collapse>
              </Collapse>
            </List>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
