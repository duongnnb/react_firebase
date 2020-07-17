import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: 'AIzaSyB_M9s0mHKWjYEiDxOvTj4_FwtUoCKrGsQ',
  authDomain: 'notereactfedu-e881a.firebaseapp.com',
  databaseURL: 'https://notereactfedu-e881a.firebaseio.com',
  projectId: 'notereactfedu-e881a',
  storageBucket: 'notereactfedu-e881a.appspot.com',
  messagingSenderId: '1017510758039',
  appId: '1:1017510758039:web:ef54349da773e2561e8bd2',
  measurementId: 'G-D1MVZEKTD4',
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export const firebaseConnect = firebase.initializeApp(firebaseConfig);

var data = firebase.database().ref('dataForNote/node3');
//sửa dữ liệu
// data.set({
//   id: 1,
//   title: 'Ngay nào đó',
//   content: 'Demo content for note',
// });

//lấy dữ liệu
// data.once('value').then(function (snapshot) {
//   console.log(snapshot.val());
// });
