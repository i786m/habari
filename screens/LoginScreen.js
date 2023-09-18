import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Input, Image, Text } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        navigation.replace('Home')
      } 
    })

    return unsubscribe
  },[])

  const getInfo = () => {}

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const signup = () => {};

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={{ width: 200, height: 200 }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwUm07SK86BsQ0aYV0Be02uCPEr39aI2wvVpMydTErmg&s",
        }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          type="email"
          autoFocus
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password "
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          raised
          title="Log In"
          onPress={login}
          containerStyle={styles.button}
        />
        <Text style={styles.prompt}>New User?</Text>
        <Button
          raised
          title="Sign up"
          onPress={() => navigation.navigate("Signup")}
          containerStyle={styles.button}
          type="outline"
        />
        <Button
          raised
          title="backend request"
          onPress={getInfo}
          containerStyle={styles.button}
          
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  inputContainer: { width: 300 },
  button: { width: 200, marginTop: 10, alignSelf: "center" },
  prompt: { textAlign: "center", marginTop: 10 },
});
