import React from 'react';
import { height } from '@mui/system';


const Dignostic_rating= () => {
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
      const showDetailsForLists = (type_of_element) => {
      
        return params.map((cur) => {
          const colour = cur.result == "Fail" ? "#FFDADA" : "#E0FFDA";
          const icon = cur.result == "Fail" ? <CloseIcon/>: <DoneIcon/>;
          return (<>
            {cur.element === type_of_element?
            (
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
                            setShowDetails(true);
                          }}
                        >
                          <FileOpenIcon/>
                      </Button></TableCell></TableHead>
            </div> ) : null}
            </>
          );
        });
      };
    return(
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
                    {showDetailsForLists("Wall")}
                  </List>
                </Collapse>
              </Collapse>
            </List>
    );
}
export default Dignostic_rating;