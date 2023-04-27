import React, {useState} from "react";
import {ImageBackground, Text, View, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Pontos(props){
    
    const [pontos, setPontos] = useState(0);
    const adicionarUm = () => {
        setPontos(pontos + 1);
    };

    const removerUm = () => {
        setPontos(pontos - 1);
    };

    const restaurar = () => {
        setPontos(0);
    };

    const rotacao = (props.rotacao === 180 ? estilos.rotacao : '' );


    return(
        <View style={[estilos.container, rotacao]}>

            <ImageBackground source={props.fundo} blurRadius={60} style={estilos.imagemFundo}>

                <AntDesign name='minuscircleo' size={50} color='white' onPress={removerUm}/>

                <View style={estilos.areaNumero}>
                    <Text style={estilos.numeroPrincipal}>{pontos}</Text>
                    <MaterialCommunityIcons name='restore' size={60} color='white' onPress={restaurar}/>
                </View>

                <AntDesign name='pluscircleo' size={50} color='white' onPress={adicionarUm}/>

            </ImageBackground>

        </View>
    )
};

const estilos = StyleSheet.create({
    rotacao:{
        transform: [
            {rotate: '180deg'}
        ]
    },
    
    container: {
        width: '100%',
        height: '50%',
    },

    imagemFundo: {
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
    },

    areaNumero: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    numeroPrincipal: {
        fontSize: 120,
        marginBottom: 50,
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 4
    }
})
