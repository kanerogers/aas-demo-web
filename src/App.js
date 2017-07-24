import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import { database } from 'firebase';

import logo from './thl.png';
import './App.css';

const theme = getMuiTheme({
  palette: {
    primary1Color: '#046a38',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tweet: '',
    };
  }
  setTitle = event => {
    this.setState({
      title: event.target.value,
    });
  };
  setTweet = event => {
    this.setState({
      tweet: event.target.value,
    });
  };
  sendAlert = () => {
    database().ref('alerts').push().set(this.state);
    alert(`${this.state.title} + ${this.state.tweet}`);
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
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
                <TextField onChange={this.setTitle} hintText="Title" />
                <br />

                <TextField onChange={this.setTweet} hintText="Tweet Text" />
              </p>
            </CardText>
            <CardActions>
              <RaisedButton
                primary
                onClick={this.sendAlert}
                label="Send Alert"
              />
            </CardActions>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
