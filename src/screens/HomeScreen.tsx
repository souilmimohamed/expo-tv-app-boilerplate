import React, { useState } from "react";
import {
  View,
  Text,
  TVFocusGuideView,
  TouchableOpacity,
  useTVEventHandler,
} from "react-native";
import Items from "../components/menuItems";
const HomeScreen = () => {
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [lastEventType, setLastEventType] = React.useState("");
  const myTVEventHandler = (evt) => {
    setLastEventType(evt.eventType);
  };
  useTVEventHandler(myTVEventHandler);
  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleBlur = (index) => {
    if (focusedIndex === index) {
      setFocusedIndex(null);
    }
  };

  const getStyle = (index) => {
    return (
      focusedIndex === index && {
        shadowColor: "#fff",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
      }
    );
  };
  const handlePress = () => {
    if (lastEventType === "longSelect") console.log("long pressed");
    else console.log("pressed");
  };

  return (
    <TVFocusGuideView className="flex-1 flex-col items-center justify-center relative">
      <View className="flex-row space-x-16">
        {Items.map((item, index) => (
          <View className=" flex flex-col items-center" key={index}>
            <TouchableOpacity
              style={getStyle(index)}
              onFocus={() => handleFocus(index)}
              onBlur={() => handleBlur(index)}
              onPress={handlePress}
              className={`p-5 m-2 border-4 text-white bg-gray-400 rounded-lg ${
                focusedIndex === index ? "border-white" : "border-gray-400"
              }`}
              activeOpacity={1}
              hasTVPreferredFocus={index === 0}
            >
              {item.icon}
            </TouchableOpacity>
            <Text className="text-white font-bold text-lg">{item.title}</Text>
          </View>
        ))}
      </View>
      <Text className="text-white text-sm font-bold absolute bottom-0">
        V 1.0.0
      </Text>
    </TVFocusGuideView>
  );
};

export default HomeScreen;
