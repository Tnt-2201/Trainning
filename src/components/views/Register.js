/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import React from 'react';
import queryString from 'query-string';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import Actions, {getActionUnmount} from '../../redux/actions';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import envs from './config/env';
import Feather from 'react-native-vector-icons/Feather';

import authAxios from '../../axios/axiosInterceptor';

console.log('URL:>>', envs);

// const [data, setData] = React.useState({
//   email: '',
//   password: '',
//   check_textInput: false,
//   secureTextEntry: true,
// });

const Register = ({navigation}) => {
  // const [data, setData] = useState({
  //   email: 'as',
  //   password: '123',
  //   full_name: '123',
  // });

  // const signUp = () => {
  //   const body = queryString.stringify({
  //     email: data.email,
  //     password: data.password,
  //     full_name: data.full_name,
  //   });
  //   authAxios
  //     .post('/signupUser', body)
  //     .then(function (response) {
  //       alert(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       alert(error.message);
  //     });
  // };

  const dispatch = useDispatch();
  const [register, setRegister] = useState({
    full_name: '',
    password: '',
    email: '',
  });
  const signUp = () => {
    dispatch({
      type: Actions.REGISTER_ACCOUNT,
      body: queryString.stringify({
        email: register.email,
        password: register.password,
        full_name: register.full_name,
      }),
      data: register,
    });
  };

  const Divider = props => {
    return (
      <View {...props}>
        <Text>Bạn đã có tài khoản?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.DN}>Đăng nhập.</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text styles={styles.text_header}>Đăng Ký</Text>
      </View>
      <View style={styles.footer}>
        <Ionicons name="person-outline" size={15} color={'black'}>
          Họ và Tên
        </Ionicons>
        <View style={styles.action}>
          <TextInput
            onChangeText={value => setRegister({...register, full_name: value})}
            style={styles.textInput}
            placeholder="Enter Your Name"
            autoCapitalize="none"
          />
          <Feather name="check-circle" color="green" size={20} />
        </View>
        <Ionicons name="key-outline" size={15} color={'black'}>
          Mật Khẩu
        </Ionicons>
        <View style={styles.action}>
          <TextInput
            value={register.password}
            onChangeText={value => setRegister({...register, password: value})}
            style={styles.textInput}
            placeholder="Enter Your Password"
            secureTextEntry={true}
          />
          <Feather name="eye-off" color="grey" size={20} />
        </View>
        <Ionicons name="key-outline" size={15} color={'black'}>
          Nhập Lại Mật Khẩu
        </Ionicons>
        <View style={styles.action}>
          <TextInput
            value={register.password}
            onChangeText={value => setRegister({...register, password: value})}
            style={styles.textInput}
            placeholder="Enter Your Password Again"
            secureTextEntry={true}
          />
          <Feather name="eye-off" color="grey" size={20} />
        </View>
        <Ionicons name="mail-outline" size={15} color={'black'}>
          Email
        </Ionicons>
        <View style={styles.action}>
          <TextInput
            onChangeText={value => setRegister({...register, email: value})}
            style={styles.textInput}
            textContentType="emailAddress"
            keyboardType="email-address"
            placeholder="Enter Your Email"
            autoCapitalize="none"
          />
          <Feather name="check-circle" color="green" size={20} />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={signUp}>
          <Text style={styles.loginButtonTittle}>Đăng Ký</Text>
        </TouchableOpacity>
        <Divider style={styles.divider} />
      </View>
    </View>
  );
};
export default Register;
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
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 300,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },

  action: {
    flexDirection: 'row',

    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  forget: {
    color: 'blue',
    textAlign: 'center',
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
  DN: {
    color: 'blue',
    fontWeight: 'bold',
  },
  divider: {
    flexDirection: 'row',
    width: 358,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
