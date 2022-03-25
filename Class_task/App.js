import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';



const intro=() => {
  return (
    <View style={styles.container}>
    <View>
      <Image 
      style ={styles.imagestal}
      source = {require('E:/bcs 6/Mobile Application Development/lab_task/2nd_project/img1.png')} 
      />
      </View>
      <Text 
      style={styles.textstyle1}>
          Discover Your{'\n'}Own  Dream House</Text>
      <Text 
      style={styles.textsecond}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{'\n'}Diam,
          maecenas mi non sed ut odio.Non,justo,sed facilisi{'\n'}et,
          . Eget viverra urna, vestibulum egestas faucibus{'\n'} egestas. Sagittits,
          nam velit volutpat eu nunc.</Text>
      <StatusBar style="auto" />
      <View style={[styles.btns,{
          flexDirection: 'row'}]}>
              <View style={styles.btn1}>
                  <Button
                  flex='1'
                  title='Sign in'
                  color='#EE97E2'
                    />
              </View>
              <View style={styles.btn2}>
                  <Button
                  flex='1'
                  title='Register'
                  color='gray'
                    />
              </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({

    btns:{
        fontSize:10,
        marginTop:30,
    },
  container: {
    padding: 70,
    alignItems: 'center',
    justifyContent: 'center',

  },
  textstyle1: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30,
    margin:15,
    
  },
  imagestal:{
      width:250,
      height:300,
      backgroundColor:'#EE97E2',
      borderRadius:20
  },
  textsecond:{
    textAlign:'center',
    fontSize: 10,
    marginBottom:15
  }
});

export default intro;