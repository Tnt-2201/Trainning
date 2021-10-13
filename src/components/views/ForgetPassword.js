/* eslint-disable prettier/prettier */
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

// const [data, setData] = React.useState({
//   email: '',
//   password: '',
//   check_textInput: false,
//   secureTextEntry: true,
// });

const ForgetPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text styles={styles.text_header}>Quên Mật Khẩu</Text>
        <Text style={styles.text_header1}>
          Sau khi xác nhận email, bạn sẽ nhận được thông báo để yêu càu lấy lại
          mật khẩu
        </Text>
      </View>
      <View style={styles.footer}>
        <Ionicons name="mail-outline" size={15} color={'black'}>
          Email
        </Ionicons>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            textContentType="emailAddress"
            keyboardType="email-address"
            placeholder="Enter Your Email"
            autoCapitalize="none"
          />
          <Feather name="check-circle" color="green" size={20} />
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonTittle}>Xác Nhận</Text>
        </TouchableOpacity>
        <Text style={styles.textemail}>Kiểm Tra Email</Text>
      </View>
    </View>
  );
};
export default ForgetPassword;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#AEB6BF',
    fontWeight: 'bold',
    fontSize: 300,
  },
  text_header1: {
    marginTop: 20,
    color: '#AEB6BF',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },

  textInput: {
    width: 358,
    height: 45,
  },
  loginButton: {
    width: 358,
    height: 50,
    marginBottom: 20,
    backgroundColor: '#2F78E1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  loginButtonTittle: {
    fontSize: 18,
    color: 'rgb(255, 255, 255)',
  },
  textemail: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 200,
  },
});
