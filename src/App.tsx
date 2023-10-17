import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Button,
  lightColors,
  createTheme,
  ThemeProvider,
  Input,
} from "@rneui/themed";

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
});

function LoginScreen({ navigation }) {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text>Login with your NetID or Google Account</Text>
        <Button
          title="Login with NetID"
          onPress={() => alert('NetID Pressed')} />
        <Button
          title="Login with Google"
          onPress={() => {alert('Google Pressed'); navigation.navigate("Signup")}} />
        <Input placeholder="Name" />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

function SignupScreen({ navigation }) {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Input placeholder="First Name" />
        <Input placeholder="Last Name"/>
        <Button
          title="Back to Login"
          onPress={() => navigation.goBack()}/>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 5,
    borderColor: "red",
  },
});

export default App;