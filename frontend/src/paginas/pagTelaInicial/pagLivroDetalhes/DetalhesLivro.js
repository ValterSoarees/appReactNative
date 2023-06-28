import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet, ImageBackground, TouchableOpacity, TextInput, Button } from "react-native";

const urlDev = "http://localhost:3003"
const urlProduct = "https://api-backend-bd-tarde.onrender.com"

export default function DetalhesLivro() {
  const route = useRoute();
  const { livro } = route.params;

  const [livroDetalhes, setLivroDetalhes] = useState(null);

  const [comentario, setComentario] = useState('')
  const [nome, setNome] = useState('')

  const load = async () => {
    const result = await fetch("http://localhost:3003/cadastrocomentario",
      {
        method: "POST",
        headers: {
          nome: nome,
          comentario: comentario
        },
      }

    ).then(res => res)

    const resultadoComentario = await result.json()

    console.log('resultadoComentario', resultadoComentario)

  }

  useEffect(() => {
    const load = async () => {
      if (livro) {
        const resultado = await fetch(`https://www.googleapis.com/books/v1/volumes/${livro.id}`);
        const livroDetalhes = await resultado.json();

        setLivroDetalhes({
          id: livroDetalhes.id,
          nome: livroDetalhes.volumeInfo.title,
          imagem: livroDetalhes.volumeInfo.imageLinks?.thumbnail,
          autor: livroDetalhes.volumeInfo.authors,
          descricao: livroDetalhes.volumeInfo.description,
          categoria: livroDetalhes.volumeInfo.categories,
          paginas: livroDetalhes.volumeInfo.pageCount,
        });
      }
    };

    load();
  }, [livro]);

  return (
    <>
    <ImageBackground  
        source={require('../../../assets/backgroundDetalhes.png')} 
        style={styles.imageBackground}
        >
    <View style={styles.container}>
      <ScrollView>
        {livroDetalhes && (
          <View key={livroDetalhes.id} style={styles.detalhesContainer}>
            <View>
              {livroDetalhes.imagem ? (
                <View style={styles.containerImagem}>
                <Image source={{ uri: livroDetalhes.imagem }} style={styles.imagem} />
                </View>
              ) : (
                <View style={styles.placeholderContainer}>
                  <Text style={styles.placeholderText}>Imagem indisponível</Text>
                </View>
              )}
            </View>

            <View style={styles.cardInformacoes}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>{livroDetalhes.nome}</Text>
              <Text><Text style={styles.negrito}>Autor(a)</Text>: {livroDetalhes.autor}</Text>
              <Text><Text style={styles.negrito}>Quantidade de páginas:</Text> {livroDetalhes.paginas}</Text>

              <TouchableOpacity style={styles.btFavoritar}>
                <View>
                  <Text style={styles.textBtFavoritar}>Adicionar aos favoritos</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.textDescricao}>
              <Text><Text style={styles.negrito}>Descrição: </Text>{livroDetalhes.descricao}</Text>
              </View>
            </View>
            <View style={{alignSelf: 'flex-start', marginLeft: '10%', marginTop: '7%', marginBottom: '4%'}}>
              <Text style={styles.negrito}>Comentários:</Text>
            </View>

            <View style={styles.cardComentarios}>
            <Text style={styles.negrito}>Você já leu essa obra? Deixe um comentário abaixo </Text>
              <TextInput placeholder="Nome" onChangeText={(text) => setNome(text)} style={styles.nomeComentario}/>
              <TextInput multiline={true} numberOfLines={500} onChangeText={(text) => setComentario(text)} style={styles.caixaComentario}/>
            
            <TouchableOpacity style={styles.buttonComentar} onPress={() => load()}>
            <Text style={styles.textButton}>
            Comentar
            </Text>
            </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
    </ImageBackground>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detalhesContainer: {
    alignItems: 'center'
  },
  containerImagem:{
    marginTop: '20%',
    marginBottom: '5%'
  },
  imagem: {
    width: 200,
    height: 300,
  },
  imageBackground: {
    flex: 1,
  },
  negrito:{
    fontWeight: 'bold',
    marginBottom: 10
  },
  btFavoritar:{
    backgroundColor: '#2152CF',
    padding: 10,
    borderRadius: 20,
    marginTop: '3%',
    marginBottom: '4%',
    fontWeight: 'bold',
  },
  textBtFavoritar: {
    color: '#fff'
  },
  cardInformacoes:{
    alignItems: 'center'
  },
  textDescricao: {
    marginLeft: '5%',
    marginRight: '5%'
  },
  nomeComentario:{
    borderWidth: 1,
    borderColor: '#2152CF',
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: '2%',
    width: '90%',
    height: '10%'
  },
  cardComentarios:{
    width: '90%',
    alignItems: 'center',
    paddingBottom: '20%'
  },
  caixaComentario:{
    borderWidth: 1,
    borderColor: '#2152CF',
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: '2%',
    width: '90%',
    height: '20%',
  },
  buttonComentar:{
    backgroundColor: '#2152CF',
    padding: 10,
    marginTop: 10,
    width: '90%',
    borderRadius: 10
    
  },
  textButton:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600'
  }
});
