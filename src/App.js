import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import logo from './thl.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Action Alert System Demo</h2>
          </div>
          <Card className="card">
            <CardHeader>
              <CardTitle>Create an alert</CardTitle>
            </CardHeader>
            <CardText>
              <p className="App-intro">
                <TextField hintText="Title" />
                <br />

                <TextField hintText="Tweet Text" />
              </p>
            </CardText>
            <CardActions>
              <RaisedButton label="Send Alert" />
            </CardActions>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
