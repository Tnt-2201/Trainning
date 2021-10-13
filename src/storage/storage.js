/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
class Storage {
  static async getItem(key) {
    try {
      let value = await AsyncStorage.getItem(key);
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    } catch (e) {
      return null;
    }
  }

  static async removeItem(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error('caught error', e);
    }
  }

  static async setItem(key, data) {
    data = typeof data === 'string' ? data : JSON.stringify(data);
    try {
      await AsyncStorage.setItem(key, data);
    } catch (e) {
      console.error('caught error', e);
    }
  }
}

export default Storage;
