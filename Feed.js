import React, { Component } from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Modal, TextInput, FlatList , Image , SafeAreaView } from 'react-native';

class Feed extends Component {
constructor(){
    super()

    this.state = {
        Modale : false,
        val1 : "" ,
        val2  : '',
        Vis : false,
        myArr : [{}]
    }
}



 items = [
    { title : "something" , imgUrl : "hello"},
    ]

    

 onmode = () =>{
   this.setState({Modale: true})
  }
  
 offmode = () => {
   this.setState({Modale : false})
  }
  
 onSubmit = (itm) => {

   this.setState({myArr : this.state.myArr[itm.index].title=this.state.val1})
   console.log(this.state.myArr , "hello thi is my arr")
   this.setState({Vis : true})
     console.log(this.state.val1 , "getting")
     console.log(this.state.val2 , "link")
    this.setState({Modale : false})
  }

  render(){
  
   var showData = (itm)=>{
     console.log(itm,"itm")
  return (
    <SafeAreaView>
    <View style={styles.container}>
    <View style = {styles.head}>
      <Image source={require('./assets/man.png')} style = {{height:45 , width : 45 , left : 35 , top : 38 }}  />
    
      <Text style = {{left : 90 , bottom : 45, fontWeight : 'bold' , top : -8}}> StackGeeks  {'\n'} 1m .</Text>
  
      <Image source={require('./assets/friends.png')} style = {{height:15 , width : 15 , left : 125  , bottom : 24 }}  />
      <TouchableOpacity onPress = {this.onmode} style = {styles.buttons}>
       <Image source={require('./assets/add.png') } style = {{height : 40 , width : 40}}   />
       </TouchableOpacity>
       </View>

    <View style = {{flex : 4 }}>
    <Text style = {{ left : 10 ,color : 'black'   }}>{this.state.myArr.title}{'\n'}</Text>
    <Image source= {{uri : this.items.title }} style = {{flex : 4, width : 400 , height : 500 }} />   
     </View>
     { this.state.Vis ? 
    <View style = {{flex : 0.4 , backgroundColor : 'white' , width : 360 , flexDirection : 'row'}} >
   
    <View style = {{  flex : 1}}>
    <TouchableOpacity activeOpacity = {0.4} >
    <Image source={require('./assets/likes.png')} style = {{height : 18 , width : 18 , left : 18 , marginTop : 12}}   />
      <Text style = {styles.buttonText}>Like</Text>
      </TouchableOpacity>
    </View>
    <View style = {{ flex : 1}}>
    <TouchableOpacity activeOpacity = {0.4}>
    <Image source={require('./assets/comment.png')} style = {{height : 18 , width : 18 , left : 18 , marginTop : 12}}   />
      <Text style = {styles.buttonText}>Edit</Text>
      </TouchableOpacity>
    </View>
    <View style = {{  flex : 1}}>
    <TouchableOpacity>
    <Image source={require('./assets/share3.png')} style = {{height : 18 , width : 18 , left : 12 , marginTop : 12}}   />
      <Text style = {styles.buttonText}>Delete</Text></TouchableOpacity>
    </View>
    </View> : null
     }

    <Modal visible = {this.state.Modale} >
    <View  style = {{flex : 1  , paddingTop : 40 , backgroundColor : 'gray' } }>
    <Text style = {styles.textVw}>Enter Text</Text>
    <TextInput placeholder = "Enter Text to show "  style = {styles.placehold} onChangeText ={(val1) => this.setState({val1})}></TextInput>
    <Text style = {styles.textVw}>Enter Image Url</Text>
    <TextInput placeholder ="Enter Image Url"  style = {styles.placehold} onChangeText ={(val2) => this.setState({val2})}></TextInput>
    <View style = {{flex : 1 , flexDirection : 'row' ,  top : 60 , margin : 20 }}>
    <View style = {{flex : 0.5 , borderRadius : 30 ,  marginRight : 30  }}>
      <TouchableOpacity onPress = {()=>this.onSubmit(itm)} style = {{backgroundColor : 'green' , height : 30 , justifyContent :'center' ,  borderRadius : 20}}>
        <Text style = {{textAlign : 'center'  ,  fontWeight : 'bold'}}>Submit</Text>
      </TouchableOpacity>
      </View>
      <View style = {{flex : 0.5  , height : 50 ,  borderRadius : 30}}>
      <TouchableOpacity onPress = {this.offmode} style = {{backgroundColor : 'red',  height : 30 , justifyContent :'center' , borderRadius : 20}} >
        <Text style = {{textAlign : 'center', color : "white" , fontWeight : 'bold'}}>Cancel</Text>
      </TouchableOpacity>
      </View>
    </View>
    </View>
    </Modal>

     </View>
     </SafeAreaView>);
    }
    return(
        <FlatList
      data={this.state.myArr}
      renderItem ={(itm)=>showData(itm)} >
        </FlatList>
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
        bottom : 60,
        left : 335
  
      },
      textVw : {
    left : 20
      },
      placehold : {
         textAlign : 'center',
         bottom : 22,
         borderWidth : 1,
         borderRadius : 30,
         height : 30,
         width : 220,
         left : 130
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
  
      }
  });
  
