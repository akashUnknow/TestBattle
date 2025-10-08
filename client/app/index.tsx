import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  

const handleLogin = () => {
  if (!email || !password) {
    Alert.alert("Error", "Please enter email and password");
    return;
  }
  // Navigate to Tabs
  // router.replace("/(tabs)/Home"); // <-- this will open the tab navigator
};


  return (
    <View className="flex-1 justify-center items-center bg-gray-800 px-6">
      <Text className="text-3xl font-bold text-white mb-6 mt-12 ">Login</Text>
      {/* input Enter ur mobile nuimber */}
      <TextInput
        value={mobileNumber}
        onChangeText={setmobileNumber}
        placeholder="Mobile Number"
        placeholderTextColor="#999"
        className="w-full bg-gray-700 text-white px-4 py-3 rounded mb-4"
        keyboardType="phone-pad"
      />

      {/* handle continue button */}
      <TouchableOpacity
        onPress={handleLogin}
        className="w-full bg-blue-500 py-3 rounded items-center mb-10"
      >
        <Text className="text-white font-bold text-lg">Continue</Text>
      </TouchableOpacity>

      {/* horizontal line */}

      <View className="flex-row items-center justify-center w-full mb-6">
        <View className="flex-1 border-t border-gray-400" />
        <Text className="px-4 text-gray-200 uppercase text-sm">
          OR USE SINGLE-CLICK SOCIAL SIGN IN
        </Text>
        <View className="flex-1 border-t border-gray-400" />
      </View>

      {/* handle continue  google button */}
      <TouchableOpacity
        onPress={handleLogin}
        className="w-full bg-blue-500 py-3 rounded items-center mb-10"
      >
        <View className="flex-row items-center justify-between">
          <Text className="text-white font-bold text-lg">
            {" "}
            <FontAwesome5 name="google" size={18} color="#DB4437" className="mr-4" /> Continue
            with google
          </Text>
        </View>
      </TouchableOpacity>


      {/* handle continue  truecaller button */}
      <TouchableOpacity
        onPress={handleLogin}
        className="w-full bg-blue-500 py-3 rounded items-center mb-10"
      >
        <View className="flex-row items-center justify-between">
          <Text className="text-white font-bold text-lg">
            {" "}
             Continue
            with truecaller
          </Text>
        </View>
      </TouchableOpacity>

      <View className="flex-row mt-4">
        <Text className="text-gray-200">Don&#39;t have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text className="text-blue-400 font-bold">Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
