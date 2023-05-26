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

import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';

const RelogioPageComponent = (props) => {

    const [relogios, setRelogios] = useState([]);
  
    useEffect( () => {
      const load = async () => {
        const resultJson = await fetch("https://dummyjson.com/products/category/mens-watches");
  
        const resultProduct = await resultJson.json();
        let resultFormatado = resultProduct.products.map(({ id, title, price, thumbnail, rating, stock }) => ({
          id: id,
          nome: title,
          preco: price,
          imagem: thumbnail,
          avaliacao: rating,
          estoque: stock,
        }));
  
        setRelogios(resultFormatado);
      };
  
      load();
    },[] );
  
    return (
          <>
        <View>
          <Text>Relógios</Text>
  
          <View>
            {relogios.map((relogio) => {
              return (
                <View key={relogio.id}>
                  <View>
                    <Image
                      src={relogio.imagem}
                      />
                  </View>
                  <View>
                    <View>
                      {relogio.nome}
                    </View>
  
                    <View>
                      <View>{relogio.descricao}</View>
                      <View>R${relogio.preco}</View>
                      <View>{relogio.avaliacao}</View>
                      <View>{relogio.estoque}</View>
                    </View>

                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </>
    );
  };
  
  export default RelogioPageComponent;