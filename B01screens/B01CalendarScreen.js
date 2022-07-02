import React, { useContext, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import B01CalendarView from '../B01components/B01CalendarView';
import B01LogContext from '../B01context/B01LogContext';
import { format } from 'date-fns';
import B01FeedList from '../B01components/B01FeedList';

const B01CalendarScreen = () => {
  const { logs } = useContext(B01LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  const markedDates = useMemo(
    () =>
      logs.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
        acc[formattedDate] = { marked: true };
        return acc;
      }, {}),
    [logs],
  );

  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );

  return (
    <B01FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <B01CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      }
    />
  );
};

const styles = StyleSheet.create({});

export default B01CalendarScreen;
