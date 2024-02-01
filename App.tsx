import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TVEventHandler, useTVEventHandler } from 'react-native';

export default function App() {
  const [lastEventType, setLastEventType] = useState('');
  const myTVEventHandler = evt => {
    setLastEventType(evt.eventType);
  };
  useTVEventHandler(myTVEventHandler);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.text}>
          This example enables an instance of TVEventHandler to show the last
          event detected from the Apple TV Siri remote or from a keyboard.
        </Text>
      </TouchableOpacity>
      <Text style={{color: 'white'}}>{lastEventType}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'#fff',
    fontWeight:'bold'
  }
});
