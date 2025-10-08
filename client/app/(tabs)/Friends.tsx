import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { FontAwesome } from "@expo/vector-icons";

const Friends = () => {
  return (
    <View className="flex-1 bg-gray-900 pt-16">
      {/* 🔹 Horizontal Friends Row */}
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            alignItems: "center",
          }}
        >
          {[...Array(10)].map((_, index) => (
            <View
              key={index}
              className="w-20 h-20 bg-gray-800 rounded-full justify-center items-center mr-4 relative"
            >
              <Image
                source={{ uri: "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" }}
                className="w-16 h-16 rounded-full"
              />
              {/* Online dot */}
              <View className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-gray-900 rounded-full" />
            </View>
          ))}
        </ScrollView>
      </View>

      {/* 🔹 Vertical Scroll List */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        {[...Array(20)].map((_, index) => (
          <View
            key={index}
            className="flex-row items-center mb-4 bg-gray-800 p-3 rounded-xl"
          >
            <Image
              source={{ uri: "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" }}
              className="w-12 h-12 rounded-full mr-4"
            />
            <View className="flex-1">
              <Text className="text-white font-semibold">
                Friend {index + 1}
              </Text>
              <Text className="text-gray-400 text-sm">Online</Text>
            </View>
            <View className="bg-blue-600 px-3 py-1 rounded-full">
              <FontAwesome name="plus" size={16} color="white" />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Friends;
