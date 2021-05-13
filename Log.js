import React, { Component } from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Modal, TextInput, FlatList , Image , SafeAreaView, ImageBackground } from 'react-native';
import imagePath from './ImagePath'
class Log extends Component{
constructor(){
    super()


}

onLogin = () =>{

  <a href = "Feed.js"></a>
}

render(){
return(
<View style ={{flex : 1 , backgroundColor : 'white'}}> 

<View style = {{flex : 1  , backgroundColor : 'blue' , alignItems : 'center' , justifyContent : 'center'}}>
<Image source = {imagePath.fbmain} style = {StyleSheet.images}></Image>
</View>

<View style = {{flex : 1.5 , alignItems : 'center' }}>
<TextInput placeholder = "Enter UserName" style = {styles.inputs}></TextInput>
<TextInput placeholder = " Enter Password" style = {styles.inputs}></TextInput>
<Text style = {{left : 65 , top : 4 , fontWeight : 'bold'}} >Forgot Password ? </Text>
</View>

<View style = {{flex : 2  , alignItems : 'center' , justifyContent : 'center'}}>

<TouchableOpacity onPress ={this.onLogin} style = {{backgroundColor : 'royalblue' , width : 300 , height : 40 , borderRadius : 15}}>
<Text style = {{textAlign : 'center' , top : 10 , fontSize : 15 , fontWeight : 'bold'}}>LOGIN</Text>
</TouchableOpacity>


</View>


</View>
)

}
}

export default  Log;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
      },
      images : {

height : 20,
width  : 20,

      },
      inputs : {
        textAlign : 'center' ,
        borderWidth : 2,
        borderColor : 'gray',
        width : 250,
        marginTop : 70,
        borderRadius : 20,
        height : 40
       
      }


    });