import {StyleSheet} from 'react-native'

export default StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'   
    },

    titulo:{
        fontSize: 35,
        color: "#F00",
        alignItems: 'center'
    },
    
    conteudo:{
        fontSize: 25,
        color: "#00F",
        alignItems: 'center'
    },

    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },


    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },

    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderBottomWidth: 1,
        borderColor: '#333',
    }
})
