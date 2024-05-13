import React from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/home");
  };
  return (
    <div style={{backgroundColor:"#1a202c"}}>
      <CardActions style={{backgroundColor:"#1a202c"}}><h1 style={{color:"#61e1f3", margin:"auto", marginTop:"3rem"}}>Beautiful<span style={{color:"#56e8ea"}}>Single-</span> <span style={{color:"#63f2d4"}}>Page</span></h1></CardActions>
<CardActions style={{backgroundColor:"#1a202c"}}><h1 style={{color:"#68f3cf", margin:"auto", marginTop:"-1rem"}}>resumes <span style={{color:"#8df8b0"}}>with</span> <span style={{color:"#a7fa9e"}}>in</span> <span style={{color:"#aff996"}}>minutes.</span> </h1></CardActions>
      <Card style={{ width: "250px", margin: "auto",marginTop:"3.7rem", backgroundColor:"#efefef" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <center><h2 style={{marginLeft:"1rem" }}>Login</h2></center>
        </Typography>

        <TextField
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          style={{ marginTop: "1rem", marginBottom: "1rem" ,marginLeft:"1rem"}}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          style={{ marginTop: "1rem", marginBottom: "1rem" ,marginLeft:"1rem"}}
        />
        <CardActions>
          <Button  style={{marginLeft:"1rem"}} size="small" variant="contained" onClick={handleSubmit}>
            Login 
          </Button>
        </CardActions>
        <CardActions>
          <Typography  style={{marginLeft:"1rem"}} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            You don't have an account <Link to="/"> SignUp </Link>this page?
          </Typography>
        </CardActions>
        <CardActions style={{backgroundColor:"#1a202c"}}></CardActions>
      <CardActions style={{backgroundColor:"#1a202c"}}></CardActions>

      
      </Card>
    </div>
  );
};

export default Login;