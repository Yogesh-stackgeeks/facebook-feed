import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, FlatList, Image, SafeAreaView, ImageBackground } from 'react-native';
import imagePath from './ImagePath';

class Feed extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modale: false,
      val1: "",
      val2: '',
      pressed : false,
      bgColor: "gray",
      index : 0,
      arrData: [""],
      pressed : false

    }
  }
  onMode = () => {
    this.setState({ modale: true })

  }

  offMode = () => {
    this.setState({ modale: false })
    
  }

  onSubmit = () => {
    const newData = [...this.state.arrData]
    newData.push({id : Math.random().toString() , title : this.state.val1 , images : this.state.val2})
    this.setState((prevState)=>{
      return {
        arrData : [...newData],
        modale : false,
      }
    })
  }
 
  

  onEdit = ( data) => {
    console.log(this.state.index)
    let store = this.state.arrData
    store[this.state.index] = {title : this.state.val1 , images : this.state.val2}

    this.setState({arrData : store , modale : false})

  }

  onDelete = (index) => {
    this.state.arrData.splice(index, 1)
    alert("Deleted Succesfully")
  }
  onLike = (index) => {
    console.log("Liked", index)
     this.setState({bgColor : 'red'})
    
  }
  render() {

    return (
      <View>
      <View style = {{flex : 0 , height : 90}}>
      <TouchableOpacity onPress={this.onMode} style={styles.buttons}>
                    <Image source={imagePath.add} style={{ height: 40, width: 40 }} />
                  </TouchableOpacity>
                   </View>
        <FlatList
          data={this.state.arrData}
          keyExtractor = {(item,index)=> index.toString()}
          renderItem={({ item, index }) =>
            <View>

              <View style={styles.container}>

                <View style={styles.head}>
                  <Image source={imagePath.main} style={{ height: 45, width: 45, left: 20}} />
                  <Text style={{ left: 75, bottom: 45, fontWeight: 'bold' }}> STACKGEEKS {'\n'} 1m .</Text>

                  <Image source={imagePath.friends} style={{ height: 12, width: 12, left: 110, bottom: 58 }} />
                 
                </View>

                <View style={{ flex: 3 }}>
                  <Text style={{ left: 20, color: 'black', fontWeight: 'bold' }}>{item.title}</Text>
                  <Image source={{uri : item.images}} style={{ flex: 4, width: 400, height: 500 }} />
                </View>
                  <View style={{ flex: 1, backgroundColor: 'white', width: 400, flexDirection: 'row' }} >

                    <View style={{ flex: 1 }}>
                      <TouchableOpacity activeOpacity={0.4}  onPress={() => this.onLike(index)} >
                        <Image source={imagePath.likes} style={{ height: 18, width: 18, left: 18, marginTop: 12  }} />
                        <Text style={[styles.buttonLike , {color : this.state.bgColor}]}>Like</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }} >
                      <TouchableOpacity activeOpacity={0.4} onPress={() => {
                        this.setState({val1 : item.title , val2 : item.images , index : index})
                        this.onMode(index, item)
                        this.state.val1 = index
                        }}
                        >
                        <Image source={imagePath.edit} style={{ height: 18, width: 18, left: 18, marginTop: 12 }} />
                        <Text style={styles.buttonText}>Edit</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                      <TouchableOpacity onPress={() => this.onDelete(index)}>
                        <Image source={imagePath.delete} style={{ height: 18, width: 18, left: 12, marginTop: 12 }} />
                        <Text style={styles.buttonText}>Delete</Text></TouchableOpacity>
                    </View>
                  </View> 
                
              </View>
            </View>
          }
        />
        <Modal visible={this.state.modale} >
          <View style={{ backgroundColor: 'lightgreen', height: 700, borderRadius: 50, margin: 20, marginTop: 40 }}>
            <View style={styles.modaal}>
              <View style={{ top: 60 }}>
                <Text style={{ fontWeight: 'bold', left: 10 }} >TITLE</Text>
                <TextInput placeholder="Enter TITLE " value={this.state.val1} style={styles.placehold} onChangeText={(text) => this.setState({ val1 : text })}></TextInput>
              </View>
              <View style={{ top: 100 }}>
                <Text style={{ fontWeight: 'bold', left: 10 }}>IMAGE</Text>
                <TextInput placeholder="Enter  URL" value={this.state.val2} style={styles.placehold} onChangeText={(text) => this.setState({ val2 : text })}></TextInput>
              </View>

              <View >
                <TouchableOpacity onPress={this.onSubmit}style={{ backgroundColor: 'green', height: 40, justifyContent: 'center', borderRadius: 10, width: 230, left: 6, top: 180, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1 }}>
                  <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white', fontSize: 15 }}>ADD NEW POST</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onEdit}style={{ backgroundColor: 'red', height: 40, justifyContent: 'center', borderRadius: 10, width: 230, left: 6, top: 200, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1 }}>
                  <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white', fontSize: 15 }}>UPDATE</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ left: 210, bottom: 200 }}>
              <TouchableOpacity onPress={this.offMode} style={{ bottom: 315, left: 65 }} >
                <Image source={imagePath.cross} style={{ height: 25, width: 25 }} />
              </TouchableOpacity>
            </View>
          </View>

        </Modal>

      </View>

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
  buttons: { 
    alignSelf : 'flex-end',
  marginTop : 50,
  marginRight : 20

  },
  placehold: {
    height: 40,
    width: 250,
    borderRadius: 15,
    textAlign: 'center',
    backgroundColor: 'lightgray',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    fontWeight: 'bold'
  },

  head: {

    flex: 0.5,
    width: 400,
    height: 100,
    marginTop: 30,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: "gray",
    bottom: 18,
    fontWeight: 'bold'

  },
  modaal: {
    height: 500,
    width: 280,
    padding: 20,
    margin: 35,
    marginTop: 80,
    backgroundColor: 'white',
    borderRadius: 50
  },
  buttonLike : {
    textAlign: 'center',
    bottom: 18,
    fontWeight: 'bold'
  }
});
