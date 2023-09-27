import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';
import Slider from '@react-native-community/slider';
import { ModalSenha } from './components/Modal';

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export default function Home(){
  const [caractere, setCaractere] = useState(10);
  const [senhaValue, setSenhaValue] = useState('');
  const [modalVisibilidade, setModalVisibilidade] = useState(false)

  function GerarSenha(){
    let senha = '';
    const tamanho = charset.length;

    for(let i= 0;  i < caractere; i++){
      senha += charset.charAt(Math.floor(Math.random() * tamanho))
    }
    setSenhaValue(senha)
    setModalVisibilidade(true)
  }


  return(
    <View style={estilo.container}>
      < Image source={require('./public/logo.png')} />
      <Text style={estilo.h1}>{caractere} Caracteres</Text>

      <View style={estilo.areaSlider}>
        <Slider 
        style={{height: 50}}
        minimumValue={6}
        maximumValue={20}
        maximumTrackTintColor='#BBBBBB'
        minimumTrackTintColor='#FF2626'
        thumbTintColor='#000'
        value={caractere}
        onValueChange={(valor) => setCaractere(parseInt(valor))}
        />
      </View>

      <TouchableOpacity style={estilo.button} onPress={GerarSenha}>
        <Text style={estilo.textButton}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisibilidade} animationType='fade' transparent={true}>
        < ModalSenha password={senhaValue} handleClose={() => setModalVisibilidade(false)}/>
      </Modal>

    </View>
  )
};

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F3F3FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1:{
    marginTop: 70,
    fontWeight: '800',
    fontSize: 30
  },
  areaSlider:{
    width: '80%',
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10
  },
  button:{
    height: 50,
    padding: 10,
    width: '60%',
    backgroundColor: '#392DE9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  textButton:{
    color: '#fff',
    fontSize: 20,
    fontWeight: '600'
  }
})