import { useState } from 'react';
import './App.css';
import {
  Card,
  CardHeader,
  Switch,
  CardContent,
  Box,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  CssBaseline
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const profile = "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"

// Define theme settings

const light = {
  palette: {
    mode: "light",
  }
};

const dark = {
  palette: {
    mode: "dark",
  }
};


function App() {
  // Light theme is default
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // this function will work when swicth component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <div className="App">
      <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
        <CssBaseline />
        <Container>
          <div className="App">
            <Box component="div" p={4}></Box>
            <Card className="card">
              <CardHeader action={<FormGroup>
                <FormControlLabel control={
                  <Switch checked={isDarkTheme} onChange={changeTheme} />
                } label="Dark Theme" />
              </FormGroup>} />
              <Typography variant="h3" component="h3">
                <div className="container">
                  <div className="hPage">
                    Home Page
                  </div>
                  <h5>
                    This is my first test React app.
                    <br />
                    Hope to enjoy this experience.
                  </h5>
                </div>
              </Typography>
              <img src={profile} alt="profile" className="App-logo" />
              <Typography className="body1" variant="body1">
                Dark mode is {isDarkTheme ? "On" : "Off"}
              </Typography>
            </Card>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
