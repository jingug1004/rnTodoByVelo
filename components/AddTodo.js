import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function AddTodo({ date }) {
  return <View style={styles.block} />;
}

const styles = StyleSheet.create({
  block: {
    padding: 64,
    backgroundColor: 'red',
  },
});

export default AddTodo;
