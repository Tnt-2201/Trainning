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

const Regiser = ({navigation}) => {
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
        <Ionicons name="key-outline" size={15} color={'black'}>
          Nhập Lại Mật Khẩu
        </Ionicons>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Your Password Again"
            secureTextEntry={true}
          />
          <Feather name="eye-off" color="grey" size={20} />
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonTittle}>Đăng Nhập</Text>
        </TouchableOpacity>
        <Divider style={styles.divider} />
      </View>
    </View>
  );
};
export default Regiser;
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
