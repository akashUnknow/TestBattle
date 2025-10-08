import { Drawer } from "expo-router/drawer";
import { FontAwesome } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router } from "expo-router";
import { View, Text } from "react-native";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      style={{ backgroundColor: "#1f2937" }} 
    >
      <View style={{ padding: 16 }}>
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", marginBottom: 16 }}>
          Menu
        </Text>

        <DrawerItem
          label="Home"
          onPress={() => router.push("/(drawer)/(tabs)/Home")}
          icon={({ color, size }) => <FontAwesome name="home" size={20} color="#fff" />}
          labelStyle={{ color: "#fff", fontSize: 16 }}
          style={{ borderRadius: 8 }}
        />
        <DrawerItem
          label="Friends"
          onPress={() => router.push("/(drawer)/(tabs)/Friends")}
          icon={({ color, size }) => <FontAwesome name="users" size={20} color="#fff" />}
          labelStyle={{ color: "#fff", fontSize: 16 }}
          style={{ borderRadius: 8 }}
        />
        <DrawerItem
          label="Profile"
          onPress={() => router.push("/(drawer)/(tabs)/Profile")}
          icon={({ color, size }) => <FontAwesome name="user" size={20} color="#fff" />}
          labelStyle={{ color: "#fff", fontSize: 16 }}
          style={{ borderRadius: 8 }}
        />
        <DrawerItem
          label="Test"
          onPress={() => router.push("/(drawer)/(tabs)/Test")}
          icon={({ color, size }) => <FontAwesome name="flask" size={20} color="#fff" />}
          labelStyle={{ color: "#fff", fontSize: 16 }}
          style={{ borderRadius: 8 }}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerTitle: "TestBattle",
        drawerType: "slide",
        overlayColor: "rgba(0,0,0,0.6)",
        drawerStyle: { backgroundColor: "#1f2937", width: 240 },
        headerStyle: { backgroundColor: "#111827" },
        headerTintColor: "#fff",
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    />
  );
}
