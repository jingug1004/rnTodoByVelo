import React, { useEffect, useRef, useState } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';

const FadeInAndOut = () => {
  const animation = useRef(new Animated.Value(1)).current;
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: hidden ? 0 : 1,
      useNativeDriver: true,
    }).start();
  }, [hidden, animation]);

  return (
    <View style={styles.block}>
      <Animated.View style={[styles.rectangle, { opacity: animation }]} />
      <Button
        title={'FadeIn'}
        onPress={() => {
          Animated.timing(animation, {
            toValue: 1,
            useNativeDriver: true,
          }).start();
        }}
      />
      <Button
        title={'FadeOut'}
        onPress={() => {
          Animated.timing(animation, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }}
      />
      <Animated.View style={[styles.rectangle, { opacity: animation }]} />
      <Button
        title={'Toggle'}
        onPress={() => {
          setHidden(!hidden);
        }}
      />
    </View>
  );
};

const SlideLeftAndRight = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const [enabled, setEnabled] = useState(false);
  const [enabled2, setEnabled2] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: enabled ? 150 : 0,
      useNativeDriver: true,
    }).start();
  }, [enabled, animation]);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: enabled2 ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [enabled2, animation]);

  return (
    <View style={styles.block}>
      <Animated.View
        style={[styles.rectangle, { transform: [{ translateX: animation }] }]}
      />
      <Button
        title={'Toggle'}
        onPress={() => {
          setEnabled(!enabled);
        }}
      />
      <Animated.View
        style={[
          styles.rectangle,
          {
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 150],
                }),
              },
            ],
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}
      />
      <Button
        title={'Toggle'}
        onPress={() => {
          setEnabled2(!enabled2);
        }}
      />
    </View>
  );
};

const B01CalendarScreen = () => {
  return (
    <View style={styles.block}>
      <FadeInAndOut />
      <SlideLeftAndRight />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {},
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: 'black',
  },
});

export default B01CalendarScreen;
