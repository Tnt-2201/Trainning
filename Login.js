import React from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

// const [data, setData] = React.useState({
//   email: '',
//   password: '',
//   check_textInput: false,
//   secureTextEntry: true,
// });

const Login = ({navigation}) => {
  const Divider = props => {
    return (
      <View {...props}>
        <View style={styles.line} />
        <Text styles={styles.TextOr}>Hoặc</Text>
        <View style={styles.line} />
      </View>
    );
  };
  const DN = props => {
    return (
      <View {...props}>
        <Text>Bạn Chưa có tài khoản?</Text>
        <Text style={styles.DNN}>Đăng Ký.</Text>
      </View>
    );
  };
  const Logo = props => {
    return (
      <View {...props}>
        <Ionicons name="logo-google" style={styles.glogo} />
        <Ionicons name="logo-facebook" style={styles.facelogo} />
        <Ionicons name="logo-apple" style={styles.applogo} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text styles={styles.text_header}>Đăng Nhập</Text>
      </View>
      <View style={styles.footer}>
        <Ionicons name="person-outline" size={15} color={'black'}>
          Tài khoản
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
        <Ionicons name="key-outline" size={15} color={'black'}>
          Mật Khẩu
        </Ionicons>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Your Password"
            secureTextEntry={true}
          />
          <Feather name="eye-off" color="grey" size={20} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={styles.forget}>Quên mật khẩu ?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonTittle}>Đăng Nhập</Text>
        </TouchableOpacity>
        <Divider style={styles.divider} />
        <Logo style={styles.iconlogo} />
        <DN style={styles.DN} />
      </View>
    </View>
  );
};
export default Login;
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
    marginTop: 10,
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
  facelogo: {
    fontSize: 32,
    color: '#3b5998',
    borderRadius: 20,
    width: 35,
    height: 35,
    textAlign: 'center',
    margin: 20,
  },
  glogo: {
    fontSize: 33,
    color: '#FBBB00',
    borderRadius: 200,
    width: 33,
    height: 33,
    textAlign: 'center',
    margin: 20,
  },
  applogo: {
    backgroundColor: 'black',
    fontSize: 24,
    color: '#FFFFFF',
    borderRadius: 20,
    width: 30,
    height: 30,
    textAlign: 'center',
    margin: 20,
  },
  line: {
    height: 0.5,
    margin: 10,
    flex: 2,
    backgroundColor: 'black',
  },
  TextOr: {
    flex: 1,
    textAlign: 'center',
  },
  divider: {
    flexDirection: 'row',
    width: 358,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconlogo: {
    flexDirection: 'row',
    width: 358,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  DNN: {
    color: 'blue',
  },
  DN: {
    flexDirection: 'row',
    width: 358,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
