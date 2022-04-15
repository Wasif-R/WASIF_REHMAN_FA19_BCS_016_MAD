import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image,TextInput,TouchableOpacity, Text, View } from 'react-native';
//import { TouchableWithoutFeedback } from 'react-native-web';
//import { textDecorationColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
//import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.img}
           
            source={require('E:/bcs 6/Mobile Application Development/lab_task/signupform/fblogo.jfif')}/>
      <View style={styles.textbox}>
      <TextInput
          style={{
            height:"90%",
            width:"100%",
            borderRadius:4,
            borderWidth:1,
            backgroundColor:'white',
            padding: '5',
          }}
          placeholder="Email or Phone "
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
  
        />
        </View>
      <View style={styles.textbox}>
      <TextInput
          style={{
            height:"90%",
            width:"100%",
            borderWidth:1,
            borderRadius:4,
            backgroundColor:'white'
          }}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          
        />
      </View>
      <View style={styles.textbox}>
      <TouchableOpacity style={{
        backgroundColor:"#1D2B51",
         width:"100%",
         height:32,
        marginTop:15,
         
        borderRadius:4
         }}>
        <Text style={{color:"white",
        textAlign:"center",
        margin:5,
        backgroundColor:"1D2B51"
      

      }}>Log In</Text>
      </TouchableOpacity>

      
    </View>

    <View>
      <Text style = {styles.signup}>Sign up with Facebook</Text>
    </View>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#405EB0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width:200,
    height:60,
    backgroundColor:'white',
    borderRadius:1,
    marginBottom:30,
  },
  textbox:
  {width:300,
    height:45,
    margin:1,
    
  },

  signup: {
    fontWeight: 'bold',
    marginTop: 130,
    color: 'white',
    textDecorationLine: 'underline'
  }

  
 
  
 
  
});
