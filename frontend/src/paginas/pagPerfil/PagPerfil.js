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
  
  export default function LivrosFavoritos() {
  
    const navigation = useNavigation();

    return (
    <View style={styles.container}>
        <ImageBackground  
        source={require('../../assets/backgroundEscuro.png')} 
        style={styles.imageBackground}
        >
       

        <View style={styles.logo}>
            <Animatable.Image
            animation="flipInX"
            source={require('../../assets/logo-perfil.png')}
            resizeMode="contain" style={styles.img}
            />
            </View>
        <View style={styles.containerInfo}>
            <Text style={styles.infos}>Nome</Text>
            <Text style={styles.infos}>Valter Soares</Text>
            <Text style={styles.infos}>E-mail</Text>
            <Text style={styles.infos}>exemplo@email.com</Text>
            <Text style={styles.infos}>Telefone</Text>
            <Text style={styles.infos}>(xx) xxxxx-xxxx</Text>
        </View>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('telaInicial')}>
                  <Text style={styles.textBotao}>
                      Voltar
                  </Text>
              </TouchableOpacity>
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
      img:{
        position: 'absolute',
        width: '70%',
        height: '80%',
        bottom: '75%'
      },
      logo:{
        flex: 1,
        top: '30%',
        alignItems: 'center'
      },
      infos:{
        marginBottom: '5%',
        fontSize: 18
      },
      containerInfo:{
        alignItems: 'center',
        position: 'absolute',
        top: '30%'
      },
      botao:{
        backgroundColor: '#2152CF',
        padding: 10,
        width: '45%',
        alignItems: 'center', 
        borderRadius: 10,
        position: 'absolute',
        bottom: '10%'
        
      },
      textBotao:{
        color: '#fff',
        fontWeight: 'bold'
      },
  })