import {
  AntDesign,
  Feather,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

const Items = [
  {
    title: "Live",
    icon: <MaterialIcons name="live-tv" size={50} color="white" />,
  },
  {
    title: "Channels",
    icon: <Feather name="tv" size={50} color="white" />,
  },
  {
    title: "Favorites",
    icon: <MaterialIcons name="favorite-border" size={50} color="white" />,
  },
  {
    title: "Profile",
    icon: <AntDesign name="user" size={50} color="white" />,
  },
  {
    title: "Settings",
    icon: <Feather name="settings" size={50} color="white" />,
  },
];

export default Items;
