import { createNativeStackNavigator } from '@react-navigation/native-stack';

import pagBemVindos from '../paginas/pagBemVindos/TelaBemVindos';
import pagTelaLogin from '../paginas/pagTelaLogin/TelaLogin';
import pagTelaCadastro from '../paginas/pagTelaCadastro/TelaCadastro';
import pagSenha from '../paginas/pagSenha/TelaSenha';
import pagTelaInicial from '../paginas/pagTelaInicial/TelaInicial';
import pagLivroDetalhes from '../paginas/pagTelaInicial/pagLivroDetalhes/DetalhesLivro';

const Stack = createNativeStackNavigator();

export default function Rotas(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="pagBemVindos"
            component={pagBemVindos}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="pagTelaLogin"
            component={pagTelaLogin}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="pagTelaCadastro"
            component={pagTelaCadastro}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="pagSenha"
            component={pagSenha}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="pagTelaInicial"
            component={pagTelaInicial}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="pagLivroDetalhes"
            component={pagLivroDetalhes}
            options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}