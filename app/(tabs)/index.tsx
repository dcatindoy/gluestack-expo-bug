import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="bg-red-500 h-10 w-10 border-2 border-black"></View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
