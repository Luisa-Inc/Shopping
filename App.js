// import React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Create the navigator
const Stack = createNativeStackNavigator();

//import Firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import the screens
import ShoppingLists from "./components/ShoppingLists";

// Firebase configuration object
const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBFpzV36z1cz3h0NjyAj3AchHtSxheM6CM",
    authDomain: "chatapp-b23ab.firebaseapp.com",
    projectId: "chatapp-b23ab",
    storageBucket: "chatapp-b23ab.appspot.com",
    messagingSenderId: "232082015281",
    appId: "1:232082015281:web:075de60af6adfb48f74110",
    measurementId: "G-H8Y852PNWW",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ShoppingLists">
        <Stack.Screen name="ShoppingLists">
          {(props) => <ShoppingLists db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
