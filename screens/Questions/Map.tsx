import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from '../../components/Themed';

interface MapProps {}

const Map = (props: MapProps) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa da propriedade</Text>

      <View style={styles.containerInput}>
        
        <Text style={styles.text}>
          Produtor(a)!{"\n"}
          Aqui você vai anexar um desenho da sua propriedade, localizando as principais áreas de produção, os rios e fontes de água e a infraestrutura.
          Quando finalizar o desenho, basta tirar uma foto com o telefone no botão abaixo.
        </Text>

      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.exampleButton} onPress={() => navigate('FarmSize')}>
          <Text style={styles.buttonText}>Ver exemplo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startButton} onPress={() => navigate('FarmSize')}>
          <Text style={styles.buttonText}>Fotografar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Map;

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
    height: (Dimensions.get("screen").height / 4),
    paddingTop: 25,
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

  text: {
    fontWeight: '900',
    fontSize: 24,
    marginHorizontal: 40,
    marginTop: 10,
    color: '#fff',
  },

  exampleButton: {
    backgroundColor: '#0aaaff',
    width: Dimensions.get("screen").width - 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 20,
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
