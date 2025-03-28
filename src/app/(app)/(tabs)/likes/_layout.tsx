import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          animation: "none",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          animation: "none",
        }}
      />
    </Stack>
  );
}
