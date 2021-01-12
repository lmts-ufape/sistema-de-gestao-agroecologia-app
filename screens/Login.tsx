import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from '../components/Themed';

interface LoginProps {}

const Login = (props: LoginProps) => {
  const { navigate } = useNavigation();
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGO</Text>


      <View style={styles.containerInput}>
        <Text style={styles.label}>Email ou CPF</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeEmail(text)}
          value={email}
          placeholder='exemplo@email.com'
          keyboardType='email-address'
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangePassword(text)}
          value={password}
          placeholder='*****'
          secureTextEntry
        />

      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigate('Start')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.line} />

        <TouchableOpacity>
          <Text style={styles.forget}>Esqueceu a senha?</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#068e76'
  },

  containerInput: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#068e76',
    marginBottom: 50
  },

  footer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: Dimensions.get("screen").width,
    height: (Dimensions.get("screen").height / 3) + 30,
    paddingTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },

  title: {
    fontWeight: 'bold',
    fontSize: 60,
    marginTop: 20,
    color: '#fff'
  },

  label: {
    fontSize: 20,
    marginTop: 20,
    color: '#fff',
    marginLeft: 5,
    marginBottom: 5
  },

  input: {
    height: 55,
    width: Dimensions.get("screen").width - 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 7,
    padding: 10
  },

  loginButton: {
    backgroundColor: '#79ce50',
    width: Dimensions.get("screen").width - 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 20,
  },

  registerButton: {
    backgroundColor: '#0aaa0a',
    width: 180,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 28
  },

  line: {
    height: 2,
    width: Dimensions.get("screen").width - 40,
    backgroundColor: '#ccc580',
  },

  forget: {
    color: '#05aaaa',
    fontSize: 18,
    marginTop: 10,
    textDecorationLine: 'underline'
  },
});
