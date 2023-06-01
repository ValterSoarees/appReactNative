import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'; 

const LivroPage = () => {

  const [livros, setlivros] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const load = async () => {
      const resultJson = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=love&key=AIzaSyA2gnDV1nrAOHTaPOOCb181fexdxSXTc-c'
        
      );
      const resultProduct = await resultJson.json();
      let resultFormatado = resultProduct.items.map(({ id, volumeInfo }) => ({
        id: id,
        nome: volumeInfo.title,
        autor: volumeInfo.authors,
        descricao: volumeInfo.description,
        imagem: volumeInfo.imageLinks?.thumbnail,
        categoria: volumeInfo.categories,
        paginas: volumeInfo.pageCount,
      }));

      setlivros(resultFormatado);
    };

    load();
  }, []);

  return (
    <>
      <View>
        <ScrollView>
          {livros.map((livro) => {
            return (
              <View key={livro.id} style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('pagLivroDetalhes', { livro })}>
                <View>
                  {livro.imagem && (
                    <Image source={{ uri: livro.imagem }} style={{ width: 220, height: 350 }} />
                  )}
                </View>
                <View>
                  <Text>{livro.nome}</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View>
                <Feather name="heart" size={24} color="black" />
                </View>
                </TouchableOpacity>

              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row'
  },
})

export default LivroPage;
