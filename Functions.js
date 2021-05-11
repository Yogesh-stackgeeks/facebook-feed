import { Component } from "react";
import Feed from './Feed'

class Functions extends Component{
    constructor(props){
        super(props)
    }
onMode = () =>{
this.setState({modale: true})
}

render(){
return(
 <View>
    <Feed onMode= {this.onMode} />
    </View>
);



}




}

export default Functions;