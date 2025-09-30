import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

const Friends = () => {
  return (
    <View className='flex-1 justify-center items-center bg-gray-900'>
      <View className='mb-4'>
        <View className='w-20 h-20 bg-blue-500 rounded-full justify-center items-center'>
          <Image source={{ uri: 'https://example.com/profile.jpg' }} className='w-16 h-16 rounded-full' />
        </View>
      </View>
      <View>
        <Text className='text-white'>Friends</Text>
      </View>
    </View>
  )
}

export default Friends