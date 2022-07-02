import AsyncStorage from '@react-native-community/async-storage';

const key = 'logs';

const B01LogsStorage = {
  async get() {
    try {
      const raw = await AsyncStorage.getItem(key);
      const parsed = JSON.parse(raw);
      return parsed;
    } catch (e) {
      throw new Error('l~ Failded to load logs');
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('l~ Failded to save logs');
    }
  },
};

export default B01LogsStorage;
