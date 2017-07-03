import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    wrap:{
        display:'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        width:'100%',
        flex:1,
    },
    comeinCenter:{
        width:'100%',
        height:400,
        overflow:'hidden',
        display:'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
    },
    comeinText:{
        color:'#fff',
        fontSize:14,
        width:240,
        marginBottom:45,
        textAlign:'center',
    },
    comeinTextLogin:{
        color:'#fff',
        fontSize:14,
        width:240,
        marginBottom:25,
        marginTop:-20,
        textAlign:'center',
    },
    comeinButtons:{
        width:'100%'
    },
    button:{
        width:'100%',
        height:50,
        borderRadius:7,
        borderWidth:2,
        borderColor:'#d14638',
        borderStyle:'solid',
    },
    comeinButtonLogin:{
        backgroundColor:'#d14638'
    },
    comeinButtonRegistration:{
        marginTop:15,
        borderWidth:2,
        borderColor:'#5d6063',
        borderStyle:'solid',
        marginBottom:60
    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontSize:14,
        lineHeight:32
    },
    formInput:{
        fontSize:14,
        width:250,
        height:35,
        borderWidth:0,
        color:'#fff',
        borderColor:'#fff',
        borderBottomWidth:1,
        marginBottom:15,
        marginTop:10,
    },
    formInputReg:{
        fontSize:14,
        width:310,
        height:35,
        borderWidth:0,
        color:'#fff',
        borderColor:'#fff',
        borderBottomWidth:1,
        marginBottom:10,
        marginTop:10,
    }
})