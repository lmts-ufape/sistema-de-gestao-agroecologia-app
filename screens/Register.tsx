import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from '../components/Themed';

interface RegisterProps {}

const Register = (props: RegisterProps) => {
  const { navigate } = useNavigation();
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [name, onChangeName] = React.useState('');
  const [confirmPassword, onChangeConfirmPassword] = React.useState('');

  return (
    <ScrollView style={{
      height: '100%',
      width: '100%',
      margin: 20,
      alignSelf: 'center'}}>
      <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>


      <View style={styles.containerInput}>
        <Text>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeName(text)}
          value={name}
          placeholder='João Silva'
        />

        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeEmail(text)}
          value={email}
          placeholder='exemplo@email.com'
        />

        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangePassword(text)}
          value={password}
          placeholder='*****'
        />

        <Text>Confirmar senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeConfirmPassword(text)}
          value={confirmPassword}
          placeholder='*****'
        />
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.registerButton} onPress={() => navigate('Root')}>
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigate('Login')}>
          <Text style={styles.buttonText}>Já tenho uma conta</Text>
        </TouchableOpacity>
      </View>

      </View>

    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 60
  },

  containerInput: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  containerButton: {
    marginTop: 20
  },

  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 20
  },

  input: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 20,
  },

  loginButton: {
    backgroundColor: '#0aaaff',
    width: 180,
    height: 50,
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
    fontWeight: 'bold',
    fontSize: 15
  }
});
