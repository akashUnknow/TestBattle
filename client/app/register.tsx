import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Register() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    if (!name || !phoneNumber) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    Alert.alert("Success", `Registered as ${name}`);
    router.push("/"); // Navigate back to login
  };
  const handleRegisterWithGoogle = () => {
    Alert.alert("Info", "Google Sign-In is not implemented yet");
  }

  return (
    <View className="flex-1 justify-center items-center bg-gray-800 px-6">
      <Text className="text-3xl font-bold text-white mb-6">Register</Text>

      {/* userName */}
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        placeholderTextColor="#999"
        className="w-full bg-gray-700 text-white px-4 py-3 rounded mb-4"
      />

      {/* PhoneNumber */}
      <TextInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Phone Number"
        placeholderTextColor="#999"
        className="w-full bg-gray-700 text-white px-4 py-3 rounded mb-4"
        keyboardType="phone-pad"
      />

            {/* handle continue button */}
      <TouchableOpacity
        onPress={handleRegister}
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
        onPress={handleRegisterWithGoogle}
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

      <View className="flex-row mt-4">
        <Text className="text-gray-200">Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text className="text-blue-400 font-bold">Login</Text>
        </TouchableOpacity>
      </View>

     
    </View>
  );
}
