import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

const LivroPage = () => {
  const [livros, setlivros] = useState([]);

  useEffect(() => {
    const load = async () => {
      const resultJson = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent("aventura")}&AIzaSyA2gnDV1nrAOHTaPOOCb181fexdxSXTc-c'
      );
      const resultProduct = await resultJson.json();
      let resultFormatado = resultProduct.items.map(({ id, volumeInfo }) => ({
        id: id,
        nome: volumeInfo.title,
        autor: volumeInfo.authors,
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
        <Text>Livros</Text>
        <ScrollView>
          {livros.map((livro) => {
            return (
              <View key={livro.id}>
                <View>
                  {livro.imagem && (
                    <Image source={{ uri: livro.imagem }} style={{ width: 100, height: 100 }} />
                  )}
                </View>
                <View>
                  <Text>{livro.nome}</Text>
                  <View>
                    <View>
                      <Text>{livro.autor}</Text>
                      <Text>{livro.categoria}</Text>
                      <Text>{livro.paginas}</Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default LivroPage;
