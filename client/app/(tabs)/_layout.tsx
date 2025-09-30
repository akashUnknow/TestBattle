import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#3B82F6",
        tabBarInactiveTintColor: "#6B7280",
        tabBarStyle: { backgroundColor: "#1F2937" },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
      }}
    >
      <Tabs.Screen
      
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Friends"
        options={{
          title: "Friends",
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="users" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="phone" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Test"
        options={{
          title: "Test",
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="flask" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
