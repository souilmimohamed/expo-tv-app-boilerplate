import { SafeAreaView, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import VideoScreen from "./src/screens/VideoScreen";
export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-800">
      <HomeScreen />
    </SafeAreaView>
  );
}
