import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground, 
    TextInput
  } from 'react-native';
  import React from 'react';
  
  import * as Animatable from 'react-native-animatable';
  import { useNavigation } from '@react-navigation/native';

  export default function TelaLogin() {

    const navigation = useNavigation();

    return (
    <View style={styles.container}>
        <ImageBackground  
        source={require('../../assets/background.png')} 
        style={styles.imageBackground}
        >

        <View style={styles.dadosCadastro}>
            
            <View style={{ }}>
            <Animatable.Image
            animation="flipInX"
            source={require('../../assets/logo.png')}
            resizeMode="contain"
            />
            </View>
            <Text style={styles.tituloPag}>Dados de Cadastro</Text>

            <Text style={styles.text}>
            Digite seu nome e sobrenome
            </Text>
            <TextInput style={styles.input}/>

            <Text style={styles.text}>
            Digite um username
            </Text>
            <TextInput style={styles.input}/>

            <Text style={styles.text}>
            Informe seu e-mail
            </Text>
            <TextInput style={styles.input}/>

            <Text style={styles.text}>
            Informe seu telefone
            </Text>
            <TextInput style={styles.input}/>

            <Text style={styles.text}>
            Crie uma senha
            </Text>
            <TextInput style={styles.input}/>

            <View style={styles.campoBotoes}>
              <Text style={styles.textFinalizar}>
              Clique em continuar para finalizar seu cadastro
              </Text>
            </View>
              <View style={styles.botoes}>
              <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('pagTelaLogin')}>
                  <Text style={styles.textBotao}>
                      Voltar
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botao}>
                  <Text style={styles.textBotao}>
                      Continuar
                  </Text>
              </TouchableOpacity>
              </View>

        </View>
        </ImageBackground>
    </View>
    )
  }

  const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
      },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
      },
      text:{
        fontSize: 20,
        marginBottom: 5
      },
      tituloPag:{
        fontSize: 40,
        fontWeight: 'bold'
      },
      input:{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: '#fff',
        padding: 6
      },
      dadosCadastro:{
        flex: 1,
      },
      campoBotoes:{
        alignItems: 'center',
        padding: 10,
        margin: 20
      },
      textFinalizar:{
        fontSize: 15,
        fontWeight: 'bold'
      },
      botoes:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },
      botao:{
        backgroundColor: '#2152CF',
        padding: 10,
        width: '35%',
        alignItems: 'center', 
        borderRadius: 10
      },
      textBotao:{
        color: '#fff',
      }
  })