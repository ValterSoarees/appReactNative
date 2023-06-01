import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

export default function DetalhesLivro() {
  const route = useRoute();
  const { livro } = route.params;

  const [livroDetalhes, setLivroDetalhes] = useState(null);

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
    <View style={styles.container}>
      <ScrollView>
        {livroDetalhes && (
          <View key={livroDetalhes.id} style={styles.detalhesContainer}>
            <View>
              {livroDetalhes.imagem ? (
                <Image source={{ uri: livroDetalhes.imagem }} style={styles.imagem} />
              ) : (
                <View style={styles.placeholderContainer}>
                  <Text style={styles.placeholderText}>Imagem indisponível</Text>
                </View>
              )}
            </View>

            <View>
              <Text>{livroDetalhes.nome}</Text>
              <Text>{livroDetalhes.autor}</Text>
              <Text>{livroDetalhes.descricao}</Text>
              <Text>{livroDetalhes.categoria}</Text>
              <Text>{livroDetalhes.paginas}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detalhesContainer: {
  },
  imagem: {
  },
  placeholderContainer: {
  },
  placeholderText: {
  },
});
