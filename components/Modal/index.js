import { View, Text, StyleSheet, TouchableOpacity, Pressable} from "react-native";
import *as Clipboard from 'expo-clipboard'

export function ModalSenha({password, handleClose}){

  async function CopiarSenha(){
    await Clipboard.setStringAsync(password)
    alert('Senha Salva')

    handleClose()
  }


  return(
    <View style={estilo.container}>
      <View style={estilo.modal}>
        <Text style={estilo.modalTitle}>Senha</Text>

        <Pressable style={estilo.containerSenha} onLongPress={CopiarSenha}>
          <Text style={estilo.textSenha}>
            {password}
          </Text>
        </Pressable>

        <View style={estilo.containerButtons}>
          <TouchableOpacity style={estilo.buttonVoltar} onPress={handleClose}>
            <Text style={estilo.contentVoltar}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilo.buttonSalvar}>
            <Text style={estilo.contentSalvar}>Salvar Senha</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'rgba(24,24,24,0.6)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal:{
    backgroundColor: '#F3F3FF',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10
  },
  modalTitle:{
    color: '#000',
    fontWeight: '600',
    fontSize: 25,
    marginBottom: 30
  },
  containerSenha:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0e0e0e',
    width: '90%',
    padding: 15,
    borderRadius: 10
  },
  textSenha:{
    fontWeight: '400',
    fontSize: 15
  },
  containerButtons:{
    flexDirection: 'row',
    marginTop: 40,
    width: '90%',
    justifyContent: 'space-around'
  },
  buttonVoltar:{
    padding: 10,
    borderRadius: 8,
    height: 50,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSalvar:{
    padding: 10,
    backgroundColor: '#392DE9',
    borderRadius: 8,
    height: 50,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentVoltar:{
    color: '#000',
    fontSize: 14,
    fontWeight: '600'
  },
  contentSalvar:{
    color: '#fff',
    fontSize: 14,
    fontWeight: '600'
  }
})