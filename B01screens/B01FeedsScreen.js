import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import B01LogContext from '../B01context/B01LogContext';
import B01FloatingWriteButton from '../B01components/B01FloatingWriteButton';
import B01FeedList from '../B01components/B01FeedList';

const B01FeedsScreen = () => {
  const { logs } = useContext(B01LogContext);
  const [hidden, setHidden] = useState(false);
  const onScrolledToBottom = isBottom => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };

  return (
    <View style={styles.block}>
      <B01FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <B01FloatingWriteButton hidden={hidden} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  box: {
    borderWidth: 2,
    padding: 16,
    borderBottomColor: 'black',
    marginBottom: 16,
  },
  input: {
    padding: 16,
    backgroundColor: 'white',
  },
});

export default B01FeedsScreen;
