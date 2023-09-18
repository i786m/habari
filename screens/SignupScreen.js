import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Button, Input, Image, Text } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from "../firebase";


const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [fullName, setFullName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const signup = () => {
    if (password1 !== password2) {
      alert("passwords must match");
    } else {
       
        createUserWithEmailAndPassword(auth, email, password1)
          .then(() => {
            updateProfile(auth.currentUser, {
              displayName: fullName,
              photoURL:
                imageUrl ||
                ' "https://imgs.search.brave.com/qZf2S5wHvnax-kW8QpBanTmoVP5A5EKB5txKucXS0_g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2MxL1N0YXRlbWVu/dEF2YXRhclBob25l/LnN2Zw.svg"',
            })
              .then(() => console.log("user info updated"))
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
              });         })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
          });
    }
    alert("pressed");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="auto" />
      <Text h3> Create an account</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          type="text"
          autoFocus
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
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
          value={password1}
          onChangeText={(text) => setPassword1(text)}
        />
        <Input
          placeholder=" Confirm Password "
          type="password"
          secureTextEntry
          value={password2}
          onChangeText={(text) => setPassword2(text)}
        />
        <Input
          placeholder="Profile Picture URL(Optional)"
          type="text"
          autoFocus
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
        />
        <Button
          raised
          title="Sign up"
          containerStyle={styles.button}
          onPress={signup}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

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
