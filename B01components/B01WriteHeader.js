import React, { useReducer } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import B01TransparentCircleButton from './B01TransparentCircleButton';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const initialState = { mode: 'date', visible: false };
const reducer = (state, action) => {
  switch (action.type) {
    case 'open':
      return {
        mode: action.mode,
        visible: true,
      };
    case 'close':
      return {
        ...state,
        visible: false,
      };
    default:
      throw new Error('l~ Unhandled action type');
  }
};

const B01WriteHeader = ({
  onSave,
  onAskRemove,
  isEditing,
  date,
  onChangeDate,
}) => {
  const navigation = useNavigation();

  const onGoBack = () => {
    navigation.pop();
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const open = mode => dispatch({ type: 'open', mode });
  const close = () => dispatch({ type: 'close' });

  const onConfirm = selectedDate => {
    close();
    onChangeDate(selectedDate);
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
        {isEditing && (
          <B01TransparentCircleButton
            name={'delete-forever'}
            color={'#ef5350'}
            hasMarginRight
            onPress={onAskRemove}
          />
        )}
        <B01TransparentCircleButton
          name={'check'}
          color={'#009688'}
          onPress={onSave}
        />
      </View>
      <View style={styles.center}>
        <Pressable onPress={() => open('date')}>
          <Text>
            {format(new Date(date), 'PPP', {
              locale: ko,
            })}
          </Text>
        </Pressable>
        <View style={styles.separator} />
        <Pressable onPress={() => open('time')}>
          <Text>{format(new Date(date), 'p', { locale: ko })}</Text>
        </Pressable>
      </View>
      <DateTimePickerModal
        isVisible={state.visible}
        mode={state.mode}
        onConfirm={onConfirm}
        onCancel={close}
        daet={date}
      />
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
  center: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
    flexDirection: 'row',
  },
  separator: {
    width: 8,
  },
});

export default B01WriteHeader;
