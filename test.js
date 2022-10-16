const firebase = require('firebase/app')
const firestore = require('firebase/firestore')
const { initializeApp } = require("firebase/app");
const { getFirestore } = require('firebase/firestore')
const { collection, query, where, getDocs } = require("firebase/firestore")

async function main() {
    const firebaseConfig = {
        apiKey: "AIzaSyCbHLBaEBkHQ9zv-QS7099yiTGQCPhspPo",
        authDomain: "dca-next-app.firebaseapp.com",
        projectId: "dca-next-app",
        storageBucket: "dca-next-app.appspot.com",
        messagingSenderId: "688044112616",
        appId: "1:688044112616:web:6b6195d20569d1be10275d",
        measurementId: "G-Y6DF75MEG6"
    };

    const firebaseapp = initializeApp(firebaseConfig)
    const db = getFirestore(firebaseapp)

    const q = query(collection(db, "userData"), where("frequency", "==", "daily"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let amount = doc.data().amount
        let apiKey = doc.data().apiKey
        let apiSecret = doc.data().apiSecret
        let cryptocurrency = doc.data().cryptocurrency
        console.log(doc.id, " => ", doc.data());
    });

}
main()

