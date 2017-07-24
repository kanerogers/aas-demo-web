import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

injectTapEventPlugin();

var config = {
  apiKey: 'AIzaSyBkYlzxcFIxrdNWWBE2bgIPi7fXYSntfSM',
  authDomain: 'aas-demo.firebaseapp.com',
  databaseURL: 'https://aas-demo.firebaseio.com',
  projectId: 'aas-demo',
  storageBucket: '',
  messagingSenderId: '499087202872',
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
