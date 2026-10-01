import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Producto = (props) => {
  return (
    <View style={styles.tarjeta}>

        <View style={[styles.contenedorImagen, {backgroundColor: props.color}]}>

        <Image source={{ uri: props.imagen }} style={styles.imagen} />
    </View>

    <View style={styles.informacion}>

        <View style={styles.filaPrecio}>
        <Text style={styles.precio}>${props.precio}</Text>
        <TouchableOpacity>

        <Ionicons 
        name="heart-outline"
        size={20}
        color="#BFC2D9"
        />
        </TouchableOpacity>
        </View>

        <Text style={styles.nombre} numberOfLines={1}>
            {props.nombre}
        </Text>

        <Text style={styles.tiempo}>
            {props.tiempo}
        </Text>

        </View>

        </View>
        

  );
};

const styles = StyleSheet.create({
    tarjeta:{
        width: "48%",
        backgroundColor: "#fff",
        borderRadius: 7,
        marginBottom: 12,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#e8e8e8",
        elevation: 2,
    },
    contenedorImagen:{
        height: 185,
        justifyContent: "center",
        alignItems: "center",
    },
    imagen:{
        width: "85%",
        height: "90%",
        resizeMode: "contain",
    },
    informacion:{
        padding: 8,
    },
    filaPrecio:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    precio:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#7c7cff",
    },
    nombre:{
        fontSize: 12,
        color: "#555",
        marginTop: 5,
    },
    tiempo:{
        fontSize: 9,
        color: "#aaaaaa",
        marginTop: 5,
    },
});

export default Producto;

