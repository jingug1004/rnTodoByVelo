import AsyncStorage from '@react-native-community/async-storage';

const key = 'todos';

const todosStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(key);

      if (!rawTodos) {
        throw new Error('l~ No saved tods');
      }

      return JSON.parse(rawTodos);
    } catch (e) {
      throw new Error('l~ Failded to load todos');
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('l~ Failded to save todos');
    }
  },
};

export default todosStorage;
