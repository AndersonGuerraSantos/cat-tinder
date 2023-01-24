import React from "react";
import { StyleSheet } from "react-native";
import { Platform } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    card: {
        position: "relative",
        height: "75%",
        borderRadius: 10,
    },  
   

    text: {
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'transparent',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

        paddingHorizontal: 10,
        marginBottom: 20,
        alignContent: 'center',

        flex: 0.3,

    },
    button: {
        backgroundColor: 'white',
        borderRadius: 32,
        padding: 10,
        width: 54,
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 50,
      
        shadowColor: '#bfbfc0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 7,
        
        elevation: 10,


    

    },
    swithHeader: {
        marginTop: Platform.OS === 'ios' ? 30 : 60,
        height:40,
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 5,
        flex: 0.2,
    },
    swiper: {
        paddingTop: 30,
      },
    textNumber: {
        fontSize: 16,
        fontFamily: 'NunitoSans_700Bold',
  
    
        fontStyle: 'normal',
  
        color: '#434141',
  
        justifyContent: "flex-end",
        alignSelf: "flex-end",
       


    },
    textName: {
        fontSize: 16,
        fontFamily: 'NunitoSans_700Bold',    
        fontStyle: 'normal',  
        color: '#434141',

    },
    textCountry: {
        fontSize: 8,
        fontFamily: 'NunitoSans_700Bold',
      
        fontStyle: 'normal',
        color: '#BFBFC0',

    },

});

export default styles;
