import React from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { blue } from "@mui/material/colors";

const Signup = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/login");
  };
  return (
    <div style={{backgroundColor:"#1a202c"}}>
<CardActions style={{backgroundColor:"#1a202c"}}><h2 style={{color:"#61e1f3", margin:"auto", marginTop:"3rem"}}>Advance <span style={{color:"#56e8ea"}}>Resume</span> <span style={{color:"#63f2d4"}}>Builder</span></h2></CardActions>
<CardActions style={{backgroundColor:"#1a202c"}}><h1 style={{color:"#68f3cf", margin:"auto", marginTop:"-1rem"}}>Make <span style={{color:"#8df8b0"}}>the</span> <span style={{color:"#a7fa9e"}}>most</span> <span style={{color:"#aff996"}}>of</span> <span style={{color:"#cffa87"}}>your</span> <span style={{color:"#eaf979"}}>professional</span> <span style={{color:"#f9f871"}}>life</span></h1></CardActions>
      <Card style={{ width: "250px", margin: "auto", marginTop:"3.4rem" ,backgroundColor:"#efefef"}}>
        <Typography sx={{ fontSize: 14,}}  color="text.secondary" gutterBottom>
         <center> <h2 >SignUp</h2></center> 
        </Typography>

        <TextField
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          style={{ marginTop: "1rem", marginBottom: "1rem", marginLeft:"1rem"}}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          style={{ marginTop: "1rem", marginBottom: "1rem", margin:"1rem"}}
        />
        
        <CardActions>
          <Button style={{marginLeft:"1rem"}} size="small" variant="contained" onClick={handleSubmit}>
            sign up
          </Button>
        </CardActions>
        <CardActions>
          <Typography marginLeft="1rem" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            You have an account <Link to="/Login"> Login </Link> this page?
          </Typography>
        </CardActions>
      </Card>
      <CardActions style={{backgroundColor:"#1a202c"}}></CardActions>
      <CardActions style={{backgroundColor:"#1a202c"}}></CardActions>
      <CardActions style={{backgroundColor:"#1a202c"}}></CardActions>
      
      </div>
  
  );
};

export default Signup;
