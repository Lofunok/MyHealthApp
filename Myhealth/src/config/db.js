//config/db.js
import Firebase from "firebase";
let config = {
  apiKey: "AIzaSyA060qd9WWud3l2o3EtAPfRX-zEwTYqDaQ",
  authDomain: "myhealth-bfff0.firebaseapp.com",
  projectId: "myhealth-bfff0",
  storageBucket: "myhealth-bfff0.appspot.com",
  messagingSenderId: "346169846585",
  appId: "1:346169846585:web:bb49ea8c7973ab11bf96e8",
  measurementId: "G-CEWNBV6W8X",
};
let app = Firebase.initializeApp(config);
export const db = app.database();

return (
  <View style={styles.container}>
    <Text style={styles.textStyle}>Hello, {this.state.displayName}</Text>
    <Button color="#3740FE" title="Logout" onPress={() => this.signOut()} />
  </View>
);
