import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from '../../components/Themed';

interface FarmSizeProps {}

const FarmSize = (props: FarmSizeProps) => {
  const { navigate } = useNavigation();
  const [size, onChangeSize] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual o tamanho do seu sítio?</Text>

      <View style={styles.containerInput}>
        
        <Text style={styles.label}>hectare</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeSize(text)}
          value={size}
          placeholder='500'
          keyboardType='numeric'
        />
        <Text style={styles.description}>1 hectare = 10.000 metros quadrados</Text>

      </View>

      <View style={styles.footer}>
        { size === '' ?
          <TouchableOpacity style={styles.disableButton} onPress={() => alert('Preencha o campo da pergunta!')}>
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>
        :
          <TouchableOpacity style={styles.nextButton} onPress={() => navigate('Map')}>
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>

        }
      </View>
    </View>
  );
};

export default FarmSize;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#068e76'
  },

  containerInput: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#068e76',
    marginBottom: 150
  },

  footer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: Dimensions.get("screen").width,
    height: (Dimensions.get("screen").height / 5),
    paddingTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },

  title: {
    fontWeight: '900',
    fontSize: 48,
    marginTop: 70,
    color: '#fff',
    marginHorizontal: 40,
    lineHeight: 50,
  },

  
  label: {
    fontSize: 28,
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

  description: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 5,
    marginTop: 10,
    alignSelf: 'flex-start'
  },

  nextButton: {
    backgroundColor: '#79ce50',
    width: Dimensions.get("screen").width - 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 20,
  },

  disableButton: {
    backgroundColor: '#aaa',
    width: Dimensions.get("screen").width - 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 28
  },
});
