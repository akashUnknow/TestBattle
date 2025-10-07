import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Image } from "expo-image";

const Friends = () => {
  return (
    <View className="flex-1 bg-gray-900 pt-20">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {[...Array(10)].map((_, index) => (
          <View
            key={index}
            className="w-20 h-20 bg-blue-500 rounded-full justify-center items-center mr-4"
          >
            <Image
              source={{ uri: "https://example.com/profile.jpg" }}
              className="w-16 h-16 rounded-full"
            />
            <View className="absolute bottom-0 right-2 w-4 h-4 bg-green-500 border-1 border-white rounded-full" />
          </View>
        ))}
      </ScrollView>

      <ScrollView className="mt-4" contentContainerStyle={{ paddingHorizontal: 16 }}>
        {[...Array(20)].map((_, index) => (
          <View
            key={index}
            className="flex-row items-center mb-4 bg-gray-800 p-3 rounded-lg"
          >
            <Image
              source={{ uri: "https://example.com/profile.jpg" }}
              className="w-12 h-12 rounded-full mr-4"
            />
            <View className="flex-1">
              <Text className="text-white font-semibold">Friend {index + 1}</Text>
              <Text className="text-gray-400 text-sm">Online</Text>
            </View>
            <View className="bg-blue-500 px-3 py-1 rounded-full">
              <Text className="text-white text-sm">Message</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Friends;
