// import { Image, View, Text, StyleSheet, Pressable } from 'react-native';
// // import Constants from 'expo-contants';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.menuSuperior}>
//         <Text style={{color: '#fff', paddingLeft: 20, fontWeight: 400}}>
//           ComentaBook
//         </Text>
//         <Pressable style={{paddingRight: 20}}>
//           <Image style={{width: 25, height: 25}} source={require('../img/icon-perfil.png')}/>
//         </Pressable>
//       </View>
//       <View style={styles.principal}>

//         <View style={styles.cards}>
//           <Pressable>
//             <Image style={styles.card} source={require('../img/Sal-e-acucar.jpg')}/>
//             <Text style={styles.tituloLivro}>Sal e Açúcar</Text>
//           </Pressable>
//           <Pressable>
//             <Image style={styles.card} source={require('../img/Loucos-por-livros.jpg')}/>
//             <Text style={styles.tituloLivro}>Loucos por Livros</Text>
//           </Pressable>
//         </View>

//         <View style={styles.cards}>
//           <Pressable>
//             <Image style={styles.card} source={require('../img/a-perigosa-arte-de-ser-invisivel.jpg')}/>
//             <Text style={styles.tituloLivro}>A Perigosa Arte de ser Invisível</Text>
//           </Pressable>
//           <Pressable>
//             <Image style={styles.card} source={require('../img/azul-daqui-mais-azul.jpg')}/>
//             <Text style={styles.tituloLivro}>O Azul Daqui é Mais Azul</Text>
//           </Pressable>
//         </View>

//         <View style={styles.cards}>
//           <Pressable>
//             <Image style={styles.card} source={require('../img/o-principe-e-a-costureira.jpg')}/>
//             <Text style={styles.tituloLivro}>O Príncipe e a Costureira</Text>
//           </Pressable>
//           <Pressable>
//             <Image style={styles.card} source={require('../img/extraordinario.jpg')}/>
//             <Text style={styles.tituloLivro}>Extraordinário</Text>
//           </Pressable>
//         </View>

//         <View style={styles.cards}>
//           <Pressable>
//             <Image style={styles.card} source={require('../img/jogos-vorazes-a-esperanca.jpg')}/>
//             <Text style={styles.tituloLivro}>A Esperança (Jogos Vorazes)</Text>
//           </Pressable>
//           <Pressable>
//             <Image style={styles.card} source={require('../img/harry-potter-e-o-enigma-do-principe.jpg')}/>
//             <Text style={styles.tituloLivro}>Harry Potter e o Enigma do Príncipe</Text>
//           </Pressable>
//         </View>

//         <View style={styles.cards}>
//           <Pressable>
//             <Image style={styles.card} source={require('../img/os-sete-maridos-de-evelyn-hugo.jpg')}/>
//             <Text style={styles.tituloLivro}>Os Sete Maridos de Evelyn Hugo</Text>
//           </Pressable>
//           <Pressable>
//             <Image style={styles.card} source={require('../img/mesa-para-um.jpg')}/>
//             <Text style={styles.tituloLivro}>Mesa Para Um</Text>
//           </Pressable>        
//         </View>

//       </View>
//       <View style={styles.menuInferior}>
//         <Pressable style={{paddingRight: 20}}>
//           <Image style={{width: 20, height: 20}} source={require('../img/icon-home.png')}/>
//         </Pressable>
//         <Pressable style={{paddingRight: 20}}>
//           <Image style={{width: 20, height: 18}} source={require('../img/icon-fav.png')}/>
//         </Pressable>
//         <Pressable style={{paddingRight: 20}}>
//           <Image style={{width: 20, height: 20}} source={require('../img/icon-pesquisar.png')}/>
//         </Pressable>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     background: '#fff'
//   },
//   menuSuperior: {
//     flexDirection: 'row',
//     alignItems: 'center', 
//     justifyContent: 'space-between',
//     backgroundColor: '#7AC5CD',
//     paddingTop: 7,
//     paddingBottom: 7
//   },
//   principal: {
//     width: '100%',
//     backgroundColor: '#fff',
//     alignItems: 'center'
//   },
//   cards: {
//     flexDirection: 'row',
//     paddingTop: 20,
//     paddingBottom: 10,
//     paddingLeft: 5,
//     paddingRight: 5,
//     gap: 15,
//     textAlign: 'center'
//   },
//   card: {
//     borderRadius: 5,
//     width: 140,
//     height: 211
//   },
//   tituloLivro: {
//     fontWeight: 'bold',
//     width: 140
//   },
//   menuInferior: {
//     flexDirection: 'row',
//     alignItems: 'center', 
//     justifyContent: 'center',
//     backgroundColor: '#7AC5CD',
//     gap: 20,
//     paddingTop: 8,
//     paddingBottom: 8
//   }

  
// });