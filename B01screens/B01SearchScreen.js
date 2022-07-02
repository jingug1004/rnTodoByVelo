import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import B01SearchContext from '../B01context/B01SearchContext';
import B01LogContext from '../B01context/B01LogContext';
import B01FeedList from '../B01components/B01FeedList';
import B01EmptySearchResult from '../B01components/B01EmptySearchResult';

const B01SearchScreen = () => {
  const { keyword } = useContext(B01SearchContext);
  const { logs } = useContext(B01LogContext);

  const filtered =
    keyword === ''
      ? []
      : logs.filter(log =>
          [log.title, log.body].some(text => text.includes(keyword)),
        );

  if (keyword === '') {
    return <B01EmptySearchResult type={'EMPTY_KEYWORD'} />;
  }

  if (filtered.length === 0) {
    return <B01EmptySearchResult type={'NOT_FOUND'} />;
  }

  return (
    <View style={styles.block}>
      <B01FeedList logs={filtered} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default B01SearchScreen;
