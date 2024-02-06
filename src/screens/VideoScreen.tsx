import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Video, { ResizeMode } from "react-native-video";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const VideoScreen = () => {
  const [paused, setPaused] = useState<boolean>(true);
  return (
    <View className="flex-1 justify-center items-center bg-gray-800">
      <Video
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        style={{ width: windowWidth, height: windowHeight }}
        controls={true}
        onError={(error) => console.log("Video playback error:", error)}
        fullscreen={true}
        resizeMode={ResizeMode.COVER}
        paused={paused}
      />
      <TouchableOpacity
        className="absolute bottom-44 bg-black p-2 items-center justify-center w-20"
        onPress={() => setPaused(!paused)}
      >
        <Text className="text-white font-bold text-lg">
          {paused ? "Play" : "Pause"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  videoPlayer: {
    width: 300, // Adjust dimensions as per your requirements
    height: 200,
  },
});
export default VideoScreen;
