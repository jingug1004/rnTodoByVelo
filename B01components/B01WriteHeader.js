import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import B01TransparentCircleButton from './B01TransparentCircleButton';

const B01WriteHeader = ({ onSave }) => {
  const navigation = useNavigation();

  const onGoBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <B01TransparentCircleButton
          onPress={onGoBack}
          name={'arrow-back'}
          color={'#424242'}
        />
      </View>
      <View style={styles.buttons}>
        <B01TransparentCircleButton
          name={'delete-forever'}
          color={'#ef5350'}
          hasMarginRight
        />
        <B01TransparentCircleButton
          name={'check'}
          color={'#009688'}
          onPress={onSave}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default B01WriteHeader;
