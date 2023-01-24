import React from "react";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        // marginTop: 50,
        // marginBottom: 100,
       

    },
    card: {
        // flex: 1,
        // // borderWidth: 2,
        // // borderColor: '#E8E8E8',
        // // justifyContent: 'center',
        // backgroundColor: 'white',
        // borderRadius: 10,
        // // marginTop: 50,
        // marginBottom: 50,

        // flex: 1,
        // borderRadius: 4,
        // borderWidth: 2,
        // borderColor: '#E8E8E8',
        // justifyContent: 'center',
        // backgroundColor: 'white',
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
        //  width: '80%',
        paddingHorizontal: 10,
        marginBottom: 20,
        alignContent: 'center',
        //buttons on center
        // marginTop: 50,
        // marginBottom: 50,
        // position: "absolute",
        // bottom: 0,
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
        // marginBottom: 50,
        //shadow
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // elevation: 1,
        //how to do a shadow: 0px 10px 16px 
        // rgba(0, 0, 0, 0.1);
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
        marginTop: 60,
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
        //fontWeight 700
    
        fontStyle: 'normal',
        // lineHeight: '125%',
        color: '#434141',
        //to keep the text on the right
    

      
        justifyContent: "flex-end",
        alignSelf: "flex-end",
       


    },
    textName: {
        fontSize: 16,
        fontFamily: 'NunitoSans_700Bold',
        //fontWeight 700
    
        fontStyle: 'normal',
        // lineHeight: '125%',
        color: '#434141',
        //to keep the text on the right
    

       


    },
    textCountry: {
        fontSize: 8,
        fontFamily: 'NunitoSans_700Bold',
        //fontWeight 700
      
        fontStyle: 'normal',
        // lineHeight: '125%',
        color: '#BFBFC0',

    },

});

export default styles;
