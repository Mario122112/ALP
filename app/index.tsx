import { View, Text, TouchableOpacity} from 'react-native'
import {Link} from "expo-router";
import React from 'react'



const app = () => {
  return (
    <View>
      <Text>Hola Mundo</Text>
        <TouchableOpacity>
          <Link href={"/autentificacion"}>Autentificacion</Link>
          <Link href={"/listado"}>Listado</Link>
        </TouchableOpacity>
    </View>
  )
}


export default app