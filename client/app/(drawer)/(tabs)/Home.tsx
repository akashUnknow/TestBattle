// client/app/(drawer)/(tabs)/Home.tsx
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

const EXAM_CATEGORIES = [
  { 
    id: 1, 
    name: 'SSC Exams',
    shortName: 'SSC',
    icon: '📚', 
    enrolled: '130K',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400',
    color: 'from-blue-600 to-blue-800'
  },
  { 
    id: 2, 
    name: 'RRB Selection',
    shortName: 'RRB',
    icon: '🚂', 
    enrolled: '98K',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400',
    color: 'from-green-600 to-green-800'
  },
  { 
    id: 3, 
    name: 'Banking Exams',
    shortName: 'Banking',
    icon: '🏦', 
    enrolled: '145K',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400',
    color: 'from-purple-600 to-purple-800'
  },
  { 
    id: 4, 
    name: 'UPSC Civil Services',
    shortName: 'UPSC',
    icon: '🎓', 
    enrolled: '87K',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
    color: 'from-orange-600 to-orange-800'
  },
  { 
    id: 5, 
    name: 'State PSC',
    shortName: 'PSC',
    icon: '🏛️', 
    enrolled: '76K',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400',
    color: 'from-red-600 to-red-800'
  },
  { 
    id: 6, 
    name: 'Police Recruitment',
    shortName: 'Police',
    icon: '👮', 
    enrolled: '65K',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400',
    color: 'from-indigo-600 to-indigo-800'
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-gray-900">
      {/* Header Section */}
      <View className="bg-gradient-to-r from-blue-600 to-purple-600 pt-16 pb-8 px-6">
        <Text className="text-white text-3xl font-bold mb-2">Welcome Back! 👋</Text>
        <Text className="text-blue-100 text-base">Ready to ace your exam today?</Text>
      </View>

      {/* Daily Challenge Banner */}
      <View className="px-6 -mt-4 mb-6">
        <View className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-6 shadow-xl">
          <View className="flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-white text-2xl font-bold mb-2">🔥 Daily Challenge</Text>
              <Text className="text-orange-100 mb-4">Complete today challenge and earn rewards!</Text>
              <TouchableOpacity 
                className="bg-white px-6 py-3 rounded-xl self-start"
                onPress={() => router.push("/(drawer)/(tabs)/Test")}
              >
                <Text className="text-orange-600 font-bold">Start Now →</Text>
              </TouchableOpacity>
            </View>
            <Text className="text-6xl ml-4">🎯</Text>
          </View>
        </View>
      </View>

      {/* Stats Section */}
      <View className="px-6 mb-6">
        <View className="flex-row justify-between">
          <View className="bg-gray-800 rounded-2xl p-4 flex-1 mr-2 border border-gray-700">
            <Text className="text-gray-400 text-sm mb-1">Tests Taken</Text>
            <Text className="text-white text-2xl font-bold">24</Text>
          </View>
          <View className="bg-gray-800 rounded-2xl p-4 flex-1 mx-2 border border-gray-700">
            <Text className="text-gray-400 text-sm mb-1">Avg Score</Text>
            <Text className="text-green-500 text-2xl font-bold">87%</Text>
          </View>
          <View className="bg-gray-800 rounded-2xl p-4 flex-1 ml-2 border border-gray-700">
            <Text className="text-gray-400 text-sm mb-1">Rank</Text>
            <Text className="text-blue-500 text-2xl font-bold">#156</Text>
          </View>
        </View>
      </View>

      {/* Exam Categories Title */}
      <View className="px-6 mb-4">
        <Text className="text-white text-2xl font-bold">Choose Your Exam</Text>
        <Text className="text-gray-400">Select a category to start practicing</Text>
      </View>

      {/* Exam Categories Grid */}
      <View className="px-6 pb-6">
        <View className="flex-row flex-wrap justify-between">
          {EXAM_CATEGORIES.map((exam) => (
            <TouchableOpacity
              key={exam.id}
              onPress={() => router.push("/(drawer)/(tabs)/Test")}
              className="w-[48%] mb-4"
            >
              <View className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
                {/* Card Image */}
                <View className="relative">
                  <Image
                    source={{ uri: exam.image }}
                    className="w-full h-32"
                    contentFit="cover"
                  />
                  <View className="absolute inset-0 bg-black/40" />
                  <View className="absolute top-2 right-2 bg-white/90 rounded-full w-10 h-10 items-center justify-center">
                    <Text className="text-2xl">{exam.icon}</Text>
                  </View>
                </View>

                {/* Card Content */}
                <View className="p-4">
                  <Text className="text-white font-bold text-base mb-1" numberOfLines={1}>
                    {exam.name}
                  </Text>
                  <View className="flex-row items-center justify-between">
                    <Text className="text-gray-400 text-sm">{exam.enrolled} enrolled</Text>
                    <View className="bg-blue-600 px-2 py-1 rounded">
                      <Text className="text-white text-xs font-bold">Start</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Recent Activity Section */}
      <View className="px-6 pb-8">
        <Text className="text-white text-2xl font-bold mb-4">Recent Activity</Text>
        
        <View className="bg-gray-800 rounded-2xl p-4 mb-3 border border-gray-700">
          <View className="flex-row items-center">
            <View className="w-12 h-12 bg-green-600 rounded-full items-center justify-center mr-4">
              <Text className="text-white text-xl">✓</Text>
            </View>
            <View className="flex-1">
              <Text className="text-white font-semibold">SSC Mock Test #5</Text>
              <Text className="text-gray-400 text-sm">Score: 92% • 2 hours ago</Text>
            </View>
            <Text className="text-green-500 font-bold">🏆</Text>
          </View>
        </View>

        <View className="bg-gray-800 rounded-2xl p-4 mb-3 border border-gray-700">
          <View className="flex-row items-center">
            <View className="w-12 h-12 bg-blue-600 rounded-full items-center justify-center mr-4">
              <Text className="text-white text-xl">✓</Text>
            </View>
            <View className="flex-1">
              <Text className="text-white font-semibold">Banking Quiz #12</Text>
              <Text className="text-gray-400 text-sm">Score: 78% • 1 day ago</Text>
            </View>
            <Text className="text-blue-500 font-bold">👍</Text>
          </View>
        </View>

        <View className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
          <View className="flex-row items-center">
            <View className="w-12 h-12 bg-purple-600 rounded-full items-center justify-center mr-4">
              <Text className="text-white text-xl">✓</Text>
            </View>
            <View className="flex-1">
              <Text className="text-white font-semibold">RRB Practice Test</Text>
              <Text className="text-gray-400 text-sm">Score: 85% • 2 days ago</Text>
            </View>
            <Text className="text-purple-500 font-bold">🎯</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}