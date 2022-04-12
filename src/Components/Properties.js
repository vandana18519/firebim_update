import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import StarBorder from "@mui/icons-material/StarBorder";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import {Button} from "./Button";
import Details from "./Details";
// import Testcomp from "./Testcomp";

export const Properties= (props) => {

  const{
    params,
    image,
    _id,
    model,
    last_update
  } = props.value;

  const [open, setOpen] = React.useState(true);
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
    // setOpen(!open);
  };

    const [showDetails, setShowDetails] = useState(false);
    const [elementId, setElementId] = useState("");
    const [elementText, setElementText] = useState("");
    const [modelName, setModelName] = useState("");
    const [statusText, setStatusText] = useState("");
    const [elementProp, setElementProp] = useState("");
    const [remark, setRemark] = useState("");
    const [showProps, setShowProps] = useState(true);
    const[checkIt, setElementValue] = useState(true);
    

    const showDetailsForLists = (type_of_element) => {
      
        return params.map((cur) => {
          const colour = cur.result == "Fail" ? "#FFDADA" : "#E0FFDA";
          const icon = cur.result == "Fail" ? <CloseIcon/>: <DoneIcon/>;
          return (
            
            <div>
              <TableHead style={{
                        display: "flex",
                        fontSize: "15px",
                        justifyContent: "space-between",
                        // background: colour
                      }}>
                     <TableCell size="small" >{cur.element}</TableCell>
                     <TableCell size="small" >{icon}</TableCell>
                     <TableCell size="small"><Button
                          onClick={() => {
                            setModelName(model);
                            setElementId(cur.element_id);
                            setElementText(cur.element);
                            setStatusText(cur.result);
                            setElementProp(cur.Property);
                            setRemark(cur.remark);
                            setShowDetails(!showDetails);
                          }}
                        >
                          <FileOpenIcon/>
                      </Button></TableCell></TableHead>
            </div>
          );
        });
      };
    
    const getAllModelsList = () => {
      return params.map((cur, index) => {
        
        return (
          
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <div>
                <div>Element Name: {cur.element}</div>
                
              </div>
            </ListItemButton>
          </List>
        );
      });
    };
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));
    
    
    return (
            <div style={{ width:"100%"}}>
            {showProps ? (
                <div style={{ display: "flex", justifyContent: "space-between" , width:"100%"}}>
                  <div style={{ flexDirection:"row-reverse", width:"100%", }}>
                    <img
                      src={props.value.image}
                      style={{ width: "100%", maxHeight: "500px" }}
                    />
                    {showDetails ?   <TableContainer component={Paper} >
                                        <Table sx={{ minWidth: 700, Height: 10 }} aria-label="customized table">
                                          <TableHead>
                                            <TableRow  >
                                              <StyledTableCell >Element</StyledTableCell>
                                              <StyledTableCell  align="right">Value</StyledTableCell>
                                            </TableRow>
                                          </TableHead>
                                          <TableBody>
                                              <StyledTableRow>
                                                <StyledTableCell>Model Name</StyledTableCell>
                                                <StyledTableCell align="right">{modelName}</StyledTableCell>
                                              </StyledTableRow>
                                              <StyledTableRow>
                                                <StyledTableCell>Element Name</StyledTableCell>
                                                <StyledTableCell align="right">{elementText}</StyledTableCell>
                                              </StyledTableRow>
                                              <StyledTableRow>
                                                <StyledTableCell>Element Id</StyledTableCell>
                                                <StyledTableCell align="right">{elementId}</StyledTableCell>
                                              </StyledTableRow>
                                              <StyledTableRow>
                                                <StyledTableCell>Status</StyledTableCell>
                                                <StyledTableCell align="right">{statusText}</StyledTableCell>
                                              </StyledTableRow>
                                              <StyledTableRow>
                                                <StyledTableCell>Properties</StyledTableCell>
                                                <StyledTableCell align="right">{elementProp}</StyledTableCell>
                                              </StyledTableRow>
                                              <StyledTableRow>
                                                <StyledTableCell>Decision</StyledTableCell>
                                                <StyledTableCell align="right">{remark}</StyledTableCell>
                                              </StyledTableRow>
                                          </TableBody>
                                        </Table>
                                      </TableContainer>
                                    : null}
                                    
                    </div>
                    <div style={{ display:"contents" }}>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton
                onClick={() => handleClick(0)}
                style={{ background: "#1976d2", color:"white",  borderRadius:"10px 10px 0px 0px" }}
              >
                <ListItemText primary="Properties" />
                {open0 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open0} timeout="auto" unmountOnExit>
                <ListItemButton
                  onClick={() => handleClick(1)}
                  style={{ background: "#DAF3FF" }}
                >
                  < ArrowRightOutlinedIcon fontSize="small"/>
                  <ListItemText primary="Floors" />
              
                  {open1 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open1} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                   
                      <TableHead style={{
                        display: "flex",
                        fontSize: "15px",
                        justifyContent: "space-between",
                      }}>
                     <TableCell size="small" >Element</TableCell>
                     <TableCell size="small">Status</TableCell>
                     <TableCell size="small">Details</TableCell></TableHead>
                    
                    {showDetailsForLists("Floor")}
                  </List>
                </Collapse>

                <ListItemButton
                  onClick={() => handleClick(2)}
                  style={{ background: "#DAF3FF", }}
                >
                  < ArrowRightOutlinedIcon fontSize="small" />
                  <ListItemText primary="Beam" />
                  {open2 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                  <TableHead style={{
                        display: "flex",
                        fontSize: "15px",
                        justifyContent: "space-between",
                      }}>
                     <TableCell size="small" >Element</TableCell>
                     <TableCell size="small">Status</TableCell>
                     <TableCell size="small">Details</TableCell></TableHead>
                    {showDetailsForLists("Beam")}
                  </List>
                </Collapse>

                <ListItemButton
                  onClick={() => handleClick(3)}
                  style={{ background: "#DAF3FF" }}
                >
                  < ArrowRightOutlinedIcon fontSize="small" />
                  <ListItemText primary="Walls" />
                  {open3 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open3} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                  <TableHead style={{
                        display: "flex",
                        fontSize: "15px",
                        justifyContent: "space-between",
                      }}>
                     <TableCell size="small" >Element</TableCell>
                     <TableCell size="small">Status</TableCell>
                     <TableCell size="small">Details</TableCell></TableHead>
                    {showDetailsForLists("Walls")}
                  </List>
                </Collapse>
              </Collapse>
            </List>
            </div>
                        {/* {getAllModelsList()} */}
                  </div>
                ) : null}
            </div>
           )
  };
  export default Properties;