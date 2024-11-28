import { Image } from "@/components/ui/image";

import React from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { StyleSheet, View } from "react-native";
export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      {/* <View className="bg-red-500 h-10 w-10 border-2 border-black"></View> */}
      <Button
        action={"primary"}
        variant={"solid"}
        size={"md"}
        // isDisabled={true}
        className="mb-10"
      >
        <ButtonText>Testing Button</ButtonText>
      </Button>

      <Image
        size="2xl"
        source={{
          uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        }}
        alt="testing props"
      />
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
