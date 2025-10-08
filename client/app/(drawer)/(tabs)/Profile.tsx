import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const Profile = () => {
  const user = {
    name: 'Akash Kumar',
    email: 'akash@example.com',
    phone: '+91 9876543210',
    profileImage: 'https://i.pravatar.cc/150?img=3',
  };

  const handleEditProfile = () => {
    console.log('Edit Profile clicked');
  };

  return (
    <ScrollView className="flex-1 bg-gray-800 items-center justify-center p-6">
      <View className="border-4 border-blue-500 rounded-full p-1 mb-6">
        <Image
          source={{ uri: user.profileImage }}
          className="w-32 h-32 rounded-full"
        />
      </View>

      <Text className="text-2xl font-bold mb-2">{user.name}</Text>
      <Text className="text-gray-600 text-lg mb-1">{user.email}</Text>
      <Text className="text-gray-600 text-lg mb-4">{user.phone}</Text>

      <TouchableOpacity
        className="bg-blue-500 px-8 py-3 rounded-full"
        onPress={handleEditProfile}
      >
        <Text className="text-white font-bold text-lg">Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;
