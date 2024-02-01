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
          ELEMENT 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.text}>
          ELEMENT 2
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
