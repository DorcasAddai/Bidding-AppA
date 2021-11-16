import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    bikeConotainer: {
        width: '100%',
        height: Dimensions.get('window').height,
      },
      titles: {
        marginTop: '20%',
        width:'80%',
        marginLeft: '10%',
        marginRight: '10%',
        alignItems: 'center',
        backgroundColor:'#171f20aa',
        borderRadius:30,
        
      },
      title:{
        fontSize: 40,
        fontWeight: '500',
        color: '#fffffe',
      },
      subtitle: {
        fontSize: 16,
        color: '#BFBFBF',
      },
      subtitleCTA: {
        textDecorationLine: 'underline',
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
      buttonsContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
      }
    });

export default styles;