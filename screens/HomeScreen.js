import { StyleSheet,  View } from 'react-native'
import { Button, Input,  Text } from "@rneui/themed";
import React from 'react'
import{signOut} from 'firebase/auth'
import { auth } from '../firebase';


const HomeScreen = ({navigation}) => {

   
    const logout = () => {
        signOut(auth).then((res)=>{
          navigation.replace('Login')
        }).catch(err=>alert(err.message));
    }
  return (
    <View>
      <Text>{auth.currentUser.email}</Text>
      <Button
        raised
        title="Log Out"
        onPress={logout}
        containerStyle={styles.button}
      />
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  button: { width: 200, marginTop: 10, alignSelf: "center" },
});