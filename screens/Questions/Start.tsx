import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from '../../components/Themed';

interface StartProps {}

const Start = (props: StartProps) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, Produtor!</Text>

      <View style={styles.containerInput}>
        
        <Text style={styles.text}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos...</Text>

        <View style={{height: 40}}/>

        <Text style={styles.text}>Propriedade</Text>

        <Text style={styles.text}>Produção</Text>

      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.startButton} onPress={() => navigate('FarmSize')}>
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
    height: (Dimensions.get("screen").height / 5),
    paddingTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },

  title: {
    fontWeight: '900',
    fontSize: 48,
    marginTop: 70,
    color: '#fff'
  },

  text: {
    fontWeight: '900',
    fontSize: 26,
    marginHorizontal: 40,
    marginTop: 10,
    color: '#fff',
  },

  startButton: {
    backgroundColor: '#79ce50',
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
