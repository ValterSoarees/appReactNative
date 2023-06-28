import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer'

import TabRota from './tab.rota';
import pagSenha from '../paginas/pagSenha/TelaSenha'
import { View } from 'react-native-animatable';
import MenuButtonItem from './menu/menuButtonItem';
import { Text, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

export default function DrawerRota(){
    return(
    <Drawer.Navigator
        drawerContent={ (props) => <MenuItens {...props}/>}
        
    >
        <Drawer.Screen
        name="Início"
        component={TabRota}
        />

    <Drawer.Screen
        name="Trocar Senha"
        component={pagSenha}
        options={{ headerShown: false }} 
        />

    </Drawer.Navigator>
    )
}

const MenuItens = ({ navigation }) => {
    return(
        <DrawerContentScrollView style={styles.container}> 
            <MenuButtonItem
            text= "Início"
            onPress= {() => navigation.navigate('Início')}
            style={styles.inicio}
            />

            <MenuButtonItem
            text= "Trocar Senha"
            onPress= {() => navigation.navigate('Trocar Senha')}
            />

            <MenuButtonItem
            text= "Sair"
            onPress= {() => navigation.navigate('pagTelaLogin')}
            />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
    },
})