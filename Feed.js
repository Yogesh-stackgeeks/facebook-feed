import React, { Component } from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Modal, TextInput, FlatList , Image , SafeAreaView, ImageBackground } from 'react-native';
import imagePath from './ImagePath'

class Feed extends Component {
      constructor(props){
       super(props)
       


    this.state = {
        modale : false,
        val1 : "" ,
        val2  : '',
        viewButtons : false,
        arrData : [{
          title : "",
          images : "" }],
    }
}
onMode = ()=>{
  this.setState({modale : true})
}

 offMode = () => {
   this.setState({modale : false})
  }

 onSubmit = (data) => {


  this.setState({arrData : [{title : this.state.val1 , images : this.state.val2},...this.state.arrData] ,
     modale : false , viewButtons : true , 
    })
    this.state.arrData.splice(-1,1)
    console.log(this.state.arrData, "show data")

  }

  onEdit = () =>{
 console.log("Edit")
  }
  onDelete = () =>{
    console.log("Delete") 
  }


  render(){
  
    var showData = (data )=>{
     console.log(data,"data to shown")
     console.log(data.index,"index")
       return (
         <View>
         <View style={styles.container}>

    <View style = {styles.head}>
    <Image source={imagePath.main} style = {{height:45 , width : 45 , left : 20 , top : 38 }}  />
    <Text style = {{left : 75 , bottom : 45, fontWeight : 'bold' , top : -10}}> TOXSL  {'\n'} 1m .</Text>
  
      <Image source={imagePath.friends} style = {{height:12 , width : 12 , left : 110  , bottom : 23 }}  />
      <TouchableOpacity onPress = {this.onMode} style = {styles.buttons}>
       <Image source={imagePath.add } style = {{height : 40 , width : 40}}   />
       </TouchableOpacity>
       </View>

    <View style = {{flex : 4 }}>
    <Text style = {{ left : 20 ,marginBottom : 15 ,color : 'black' , fontWeight :'bold'   }}>{data.item.title}</Text>
    <Image source= {{uri : data.item.images }} style = {{flex : 4, width : 400 , height : 500 }} />   
     </View>
     { this.state.viewButtons ? 
    <View style = {{flex : 0.4 , backgroundColor : 'white' , width : 360 , flexDirection : 'row'}} >
   
    <View style = {{  flex : 1}}>
    <TouchableOpacity activeOpacity = {0.4} >
    <Image source={imagePath.likes} style = {{height : 18 , width : 18 , left : 18 , marginTop : 12}}   />
      <Text style = {styles.buttonText}>Like</Text>
      </TouchableOpacity>
    </View>
    <View style = {{ flex : 1}}>
    <TouchableOpacity activeOpacity = {0.4}>
    <Image source={imagePath.edit} style = {{height : 18 , width : 18 , left : 18 , marginTop : 12}}   />
      <Text style = {styles.buttonText}>Edit</Text>
      </TouchableOpacity>
    </View>
    <View style = {{  flex : 1}}>
    <TouchableOpacity>
    <Image source={imagePath.delete} style = {{height : 18 , width : 18 , left : 12 , marginTop : 12}}   />
      <Text style = {styles.buttonText}>Delete</Text></TouchableOpacity>
    </View>
    </View> : null
     }
     </View>
   
    <Modal visible = {this.state.modale} >
   <View style = {{backgroundColor : 'lightgreen' , height : 600 , borderRadius : 60, margin : 20 , marginTop : 40}}>
    <View style = {styles.modaal}>
    <View  style = {{ top : 60 } }>
    <Text style = {{ fontWeight : 'bold' , left : 10}} >TITLE</Text>
    <TextInput placeholder = "Enter TITLE "  style = {styles.placehold} onChangeText ={(val1) => this.setState({val1})}></TextInput>
     </View>
    <View style = {{ top : 100  } }>
    <Text  style = {{ fontWeight : 'bold' ,  left : 10}}>IMAGE</Text>
    <TextInput placeholder ="Enter  URL"  style = {styles.placehold} onChangeText ={(val2) => this.setState({val2})}></TextInput>
    </View>
   
    <View >
      <TouchableOpacity onPress = {()=>this.onSubmit(data) } style = {{backgroundColor : 'green' , height : 40 , justifyContent :'center' ,  borderRadius : 10 , width : 230 ,left : 10 , top : 180 , borderLeftWidth : 1 , borderRightWidth : 1 , borderBottomWidth : 1 }}>
        <Text style = {{textAlign : 'center'  ,  fontWeight : 'bold' ,color : 'white' , fontSize : 15}}>Submit</Text>
      </TouchableOpacity>
      </View>
      </View>
     
      <View style = {{left : 200 , bottom : 90}}>
      <TouchableOpacity onPress = {this.offMode} style = {{ bottom : 325 , left : 85 }} >
        <Image source = {imagePath.cross}  style = {{height : 25 , width : 25 }}         />
      </TouchableOpacity>
    </View>
    </View>
    </Modal>
    </View>
       );}
    
    return(
        <SafeAreaView>
        <FlatList
      data={this.state.arrData} 
      renderItem ={(data)=>showData(data)} >
        </FlatList>
        </SafeAreaView>
       
        )
    
  }
}


export default Feed;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
      },
      buttons : {
        bottom : 50,
        left : 320
  
      },
      placehold : {
         height : 40,
         width : 250,
         borderRadius : 15,
         textAlign : 'center',
         backgroundColor : 'lightgray',
         borderBottomWidth : 1,
         borderRightWidth : 1,
         borderLeftWidth : 1,
         fontWeight : 'bold'
      },
      
      head :{
  
        flex : 0.5 ,
          width : 400,
          height : 100, 
          marginTop : 30,
          justifyContent : 'center',
      },
      buttonText : {
  textAlign : 'center',
  color : "gray",
  bottom : 18,
  fontWeight : 'bold'
  
      },
      modaal : {
        height : 400,
        width : 300,
        padding : 20,
        margin : 30,
        marginTop : 80,
        backgroundColor : 'white',
        borderRadius : 50
      }
  });
  
