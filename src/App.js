import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import { firebaseConnect } from './firebaseConnect';

class App extends Component {
  pushData = () => {
    var connectData = firebase.database().ref('dataForNote');
    connectData.push({
      title: 'Ghi chú số 3',
      content: 'Nội dung ghi chú bá',
    });
    console.log('bạn vừa thêm dữ liệu');
  };
  deleteData = () => {
    var connectData = firebase.database().ref('dataForNote');
    connectData.child('-MBmac2IjnRD7XgxQ17W').remove();
    console.log('Xóa thành công');
  };

  render() {
    // console.log(firebaseConnect)
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <button onClick={() => this.pushData()}>
          Click de them moi bang ham push
        </button>
        <button onClick={() => this.deleteData()}>Click de xóa</button>
      </div>
    );
  }
}

export default App;
