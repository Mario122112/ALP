import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Link} from "expo-router";
import React from 'react';

const auth = () => {
  return (
    <View style={estilos.contenedor}>
      <Image source={require("../assets/images/fondo.png")} style={estilos.fondo} />

      <View style={estilos.textoContainer}>
        <Text style={estilos.texto}>Autentifiquese</Text>
      </View>
      <View style={estilos.cajaBlanca}>
        <Text style={estilos.textoCaja}>Acerque su tarjeta de estudiante al lector NFC</Text>
      </View>
      <TouchableOpacity>
        <Link href={"/auth_bien"} style={[{color:'#2BD31B'},{fontSize:24}]}>SALIDA CORRECTA</Link>
      </TouchableOpacity>
      <TouchableOpacity>
        <Link href={"/auth_mal"} style={[{color:'#BF1313'},{fontSize:24}]}>SALIDA INCORRECTA</Link>
      </TouchableOpacity>
      <Image source={require("../assets/images/lector.png")} style={estilos.lector}/>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fondo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  textoContainer: {
    zIndex: 1, 
    marginBottom:20,
  },
  texto: {
    color: 'white',
    fontSize: 64,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: { 
      width: 2,
      height: 2,
    },
  },
  cajaBlanca: {
    zIndex: 1,
    backgroundColor: '#F9F9F9',
    width: '55%', 
    height: '35%', 
    borderRadius:20,
    borderWidth:4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:90,
  },
  textoCaja:{
    fontSize: 40,
    fontWeight: 'bold',
    padding:15,
    textAlign:'center',
  },
  lector:{
    position: 'absolute', 
    bottom: -20,            
    left: 40,               
    height: 150,      
    width: 250,            
  },
});

export default auth;