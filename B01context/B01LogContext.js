import React, { createContext, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import B01LogsStorage from '../storages/B01LogsStorage';

const B01LogContext = createContext();

export const B01LogContextProvider = ({ children }) => {
  const initialLogsRef = useRef(null);
  const [logs, setLogs] = useState([]);

  const onCreate = ({ title, body, date }) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };

  const onModify = modified => {
    // logs 배열을 순회해 id가 일치하면 log를 교체하고 그렇지 않으면 유지
    const nextLogs = logs.map(log => (log.id === modified.id ? modified : log));
    setLogs(nextLogs);
  };

  const onRemove = id => {
    const nextLogs = logs.filter(log => log.id !== id);
    setLogs(nextLogs);
  };

  useEffect(() => {
    // useEffect 내에서 async 함수를 만들고 바로 호출 // IIFE 패턴
    (async () => {
      const savedLogs = await B01LogsStorage.get();
      if (savedLogs) {
        initialLogsRef.current = savedLogs;
        setLogs(savedLogs);
      }
    })();
  }, []);

  useEffect(() => {
    if (logs === initialLogsRef.current) {
      return;
    }
    B01LogsStorage.set(logs);
  }, [logs]);

  return (
    <B01LogContext.Provider value={{ logs, onCreate, onModify, onRemove }}>
      {children}
    </B01LogContext.Provider>
  );
};

export default B01LogContext;
