import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBTK2Cl2ei2F5wmZ6vhhULeSmmEI5JKqqA',
	authDomain: 'clone-a9f9e.firebaseapp.com',
	databaseURL: 'https://clone-a9f9e.firebaseio.com',
	projectId: 'clone-a9f9e',
	storageBucket: 'clone-a9f9e.appspot.com',
	messagingSenderId: '759424750843',
	appId: '1:759424750843:web:5dd063b50383ab55134c5e',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
