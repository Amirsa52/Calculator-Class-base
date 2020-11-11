/**
 * Sample React Native App
 * https://github.com/facebo1/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import InputScrollView from 'react-native-input-scroll-view';

const Field = (props) => {
  const {styles,text,color,textInput}=props;
  return (
      <>
          <TouchableOpacity style={styles.Button}
           onPress={()=>{textInput(text)}}
          >
            <Text style={{ color: color, fontSize: 30 }}>{text}</Text> 
          </TouchableOpacity>
      </>
  )
};

export default class App extends React.Component {
	constructor(props) 
    {
		super(props)
		this.state={
      input:"",
      TextInputDisableHolder: false,
      mul:0,
      plus:0,
      neg:0,
      divide:0,
      history:[],
      count:"0",
      preValue:"",
      index:1,
      show:false,
      dot:0,
      visible:false,
      zero:0,
      preInput:""
		};
        
  };
  
  setValue = (text)=>{
    var len = "0";
    if(this.state.input!="" || text!="0")
    {
      if(/^\d+$/.test(text)){
        this.setState({index:this.state.index+1});
      }
      if(!/^\d+$/.test(text)){
        if(text=="x" || text=="-" || text=="+" || text=="." || text=="÷")
        {
          if(this.state.mul!=1 && this.state.divide!=1 && this.state.neg!=1 && this.state.plus!=1){
            this.setState({index:1});
          }
        }
      }
      if(this.state.index<=10)
      {
        if(text=="x"){
          this.setState({mul:1})
        }
        if(text=="+"){
          this.setState({plus:1})
        }
        if(text=="-"){
          this.setState({neg:1})
        }
        if(text=="÷"){
          this.setState({divide:1})
        }
        if(text=="."){
          len ="1" ;
          this.setState({count:len});
        }
        if(this.state.input!="" || text!=".")
        {
          if(this.state.input!="" || text!="x")
          {
          if(this.state.input!="" || text!="+")
            {
            if(this.state.input!="" || text!="-")
            {
            if(this.state.input!="" || text!="÷")
              {
                if(this.state.count=="1"){
                if(text!="."){
                  if(this.state.mul==0 && this.state.divide == 0 && this.state.plus == 0 && this.state.neg == 0){
                  var secondText ="";
                  var firstText=this.state.input;
                  var finalText = firstText + secondText;
                  secondText = text;
                  if(this.state.zero!=1){
                    finalText = firstText.concat(secondText);
                    this.setState({input:finalText});
                  }
                  }
                  else{
                    if(text!="x" && text!="+" && text!="-" && text!="÷"){
                      firstText=this.state.input;
                      finalText = firstText + secondText;
                      secondText = text;
                      if(this.state.zero!=1){
                        finalText = firstText.concat(secondText);
                        this.setState({input:finalText,count:"0"});
                      }
                    }
                  }
                }
              }
              else{
                if(this.state.mul==0 && this.state.divide == 0 && this.state.plus == 0 && this.state.neg == 0){
                  var secondText ="";
                  var firstText=this.state.input;
                  var finalText = firstText + secondText;
                  secondText = text;
                  finalText = firstText.concat(secondText);
                  this.setState({input:finalText,counter:0});
                  }
                  else{
                    if(this.state.dot!=2)
                    {
                      if(text!="x" && text!="+" && text!="-" && text!="÷"){
                        firstText=this.state.input;
                        finalText = firstText + secondText;
                        secondText = text;
                        if(this.state.zero!=1){
                          finalText = firstText.concat(secondText);
                          this.setState({input:finalText});
                        }
                        if(text=="."){
                          this.setState({dot:2});
                        }
                      }
                    }
                    else{
                      if(text!=".")
                      {
                        if(text!="x" && text!="+" && text!="-" && text!="÷"){
                          firstText=this.state.input;
                          finalText = firstText + secondText;
                          secondText = text;
                          if(this.state.zero!=1){
                            finalText = firstText.concat(secondText);
                            this.setState({input:finalText});
                          }
                        }
                      }
                    }
                  }
                
                
                }
              }
              else{
                if(text=="÷"){
                  this.setState({input:"0÷",divide:1});
                }
              }
            }
            else{
              if(text=="-"){
                this.setState({input:"0-",plus:1});
              }
            }
          }
          else{
            if(text=="+"){
              this.setState({input:"0+",plus:1,zero:1});
            }
          
          }
        }
        else{
          if(text=="x"){
            this.setState({input:"0x",mul:1});
          }
          
        }
        }
        else{
          if(text=="."){
            this.setState({input:"0."});
          }
        }
      }
      else{
        this.setState({visible: true},
          ()=>setTimeout(() => {this.setState({visible: false})}, 1000)
        )
      }
    }

  }
  setMinus = (text) =>{
    if(this.state.input==""){
      this.setState({input:"-0"})
    }
    else{
      if(this.state.input[0]!="-"){
        var val = "-" + this.state.input;
        this.setState({input:val});
      }
      else{
        var s2 = this.state.input.substring(1);
        this.setState({input:s2});
      }
    }

  }
  earse = (text) =>{
    if(this.state.input!=""){
      const text = this.state.input;
      const len = this.state.input.length;
      var check = this.state.input[len-1];
      const editedText = text.slice(0, -1);
      if(check=="x"){
        this.setState({mul:0});
      }
      if(check=="+"){
        this.setState({plus:0});
      }
      if(check=="-"){
        this.setState({neg:0});
      }
      if(check=="÷"){
        this.setState({divide:0});
      }
      if(check=="."){
        this.setState({count:"0",d0t:0});
      }
      
      this.setState({input:editedText});
    }
    else{

    }

  }
  earseInput=()=>{
    this.setState({input:this.state.preInput.toString(),preValue:""}) 

  }
  Clear =(text) =>{
    if(this.state.input!="0"){
      this.setState({input:"",mul:0,divide:0,neg:0,plus:0,count:"0",preValue:"",dot:0,index:0,preInput:""})
    }
  }
  Equal =() =>{
    var firstValue= "";
    var secondValue = "";
    var finalResult = "";
    if(this.state.mul==1){
       firstValue= this.state.input.split("x")[0].trim();
       secondValue = this.state.input.split('x')[1].trim();
       if(firstValue!="" && secondValue!=""){
         this.setState({preValue:this.state.input});
        this.state.history.push(this.state.input);
        finalResult = parseFloat(firstValue) * parseFloat(secondValue);
       }
       if(firstValue=="" && secondValue!=""){
        finalResult = parseFloat(secondValue);
      }
      if(firstValue!="" && secondValue==""){
        finalResult = parseFloat(firstValue);
      }
      this.setState({input: finalResult.toString()});

      this.setState({preInput: finalResult});
      this.state.history.push(finalResult);
      this.setState({mul:0,divide:0,neg:0,plus:0,dot:0});
    }
    else if (this.state.plus==1){
      firstValue= this.state.input.split("+")[0].trim();
      secondValue = this.state.input.split('+')[1].trim();
      if(firstValue!="" && secondValue!=""){
        this.setState({preValue:this.state.input});
        this.state.history.push(this.state.input);
        finalResult = parseFloat(firstValue) + parseFloat(secondValue);
      }
      if(firstValue=="" && secondValue!=""){
        finalResult = parseFloat(secondValue);
      }
      if(firstValue!="" && secondValue==""){
        finalResult = parseFloat(firstValue);
      }
      this.setState({input: finalResult.toString()});
      this.setState({preInput: finalResult});
      this.state.history.push(finalResult);
      this.setState({mul:0,divide:0,neg:0,plus:0,dot:0});
 

    }
    else if (this.state.neg==1){
      firstValue= this.state.input.split("-")[0].trim();
       secondValue = this.state.input.split('-')[1].trim();
       if(firstValue!="" && secondValue!=""){
        this.setState({preValue:this.state.input});
        this.state.history.push(this.state.input);
        finalResult = parseFloat(firstValue) - parseFloat(secondValue);
       }
       if(firstValue=="" && secondValue!=""){
        finalResult = parseFloat(secondValue);
      }
      if(firstValue!="" && secondValue==""){
        finalResult = parseFloat(firstValue);
      }
      this.setState({input: finalResult.toString()});
      this.setState({preInput: finalResult});
      this.state.history.push(finalResult);
      this.setState({mul:0,divide:0,neg:0,plus:0,dot:0})
      
    }
    else if (this.state.divide==1){
      firstValue= this.state.input.split("÷")[0].trim();
       secondValue = this.state.input.split('÷')[1].trim();
       if(firstValue!="" && secondValue!=""){
        this.setState({preValue:this.state.input});
        this.state.history.push(this.state.input);
        finalResult = parseFloat(firstValue) / parseFloat(secondValue);
       }
       if(firstValue=="" && secondValue!=""){
        finalResult = parseFloat(secondValue);
      }
      if(firstValue!="" && secondValue==""){
        finalResult = parseFloat(firstValue);
      }
      this.setState({input: finalResult.toString()});
      this.setState({preInput: finalResult});
      console.warn(this.state.preInput);
      this.state.history.push(finalResult);
      this.setState({mul:0,divide:0,neg:0,plus:0,dot:0})
      
    }
    else{

    }

  }
  getHistory = () => {
    var result=[];
     var len = this.state.history.length;
    for(let i=0; i<len; i++){
        result.push(
            <View  
            style={{width:"100%",padding:2,borderBottomColor:"white",alignItems:"flex-end"}}>
                <Text style={{color:"white",padding:10,fontSize:30}}>{this.state.history[i]}</Text>
            </View>

        )

    }
    return result;
  }
  Delete = () =>{
    var myArray = [];
    myArray =this.state.history;
    var len = myArray.length;
    for(let index=0; index<len; index++){
      myArray.splice(index, len);
    }
    this.setState({history:myArray});
    this.setState({input:"",preValue:""})
  }
  backScreen = () =>{
    this.setState({show:false});
  } 
  renderListItem = (data) =>{
    <View style={{flex:1,margin:10,width:"100%",borderColor:"white",borderWidth:2}}>
        <Text style={{color:"white",width:"100%"}}>
            {data.item.input}
        </Text>
    </View>    

  }
  render() {
   return (
   <SafeAreaView style={styles.body}>
     <View style={styles.header}>
             
            </View>
     <ScrollView
          style={styles.scrollView}>
             <StatusBar 
                backgroundColor="#0E0E0E"
                barStyle="light-content"
              />
              {
                this.state.visible? 
                <View style={{flex:1,position:"absolute",left:100,backgroundColor:'#1D1D1D',width:"50%",borderRadius:100,alignItems:"center",top:100}}>
                  <Text style={{color:"white"}}>Limit Exceed</Text>
                </View>  : <View></View>
              }
            <ScrollView contentContainerStyle={{ flexGrow: 1,alignItems: 'flex-end', }}>
              <Text style={styles.preValue}>{this.state.preValue}</Text>
            </ScrollView>
            <View style={{ overflow: 'hidden',alignItems: 'flex-end', }}>
              <ScrollView horizontal={true} Style={{ padding: 8 }}>
                  <TextInput style={styles.InputText}placeholder="0" 
                  placeholderTextColor="white"
                  value={this.state.input}
                  editable={this.state.TextInputDisableHolder}
                  />
              </ScrollView>
            </View>  
          </ScrollView>  
            <View style={styles.action}>
              {
                this.state.show ?
                <View style={{flex:1,width:"100%"}}>
                  <View style={{ flexDirection: "row", width: "100%",alignItems:"center",justifyContent:"center"}}>

                      <TouchableOpacity onPress={()=>{this.Delete()}} style={{padding:5,margin:5,alignItems:"center"}}>
                        <Icon name="minus-circle" size={25} color="#FE7D28" style={{}} />
                        <Text style={{color:"#FE7D28"}}>Delete</Text>
                      </TouchableOpacity>

                      
                      <TouchableOpacity onPress={()=>{this.backScreen()}} style={{padding:5,margin:5,alignItems:"center"}}>
                        <Icon name="backward" size={25} color="#FE7D28" style={{}} />
                        <Text style={{color:"#FE7D28"}}>Continue</Text>
                      </TouchableOpacity>
                    </View>
                  <ScrollView style={{width:"100%",flex:1}}> 
                    
                      
                      {this.getHistory()}

                    
                  </ScrollView>
                </View>
                  
                  :
                <>
              <View style={{}}>
              <View style={{flex:1,bottom:0,marginBottom:0,paddingBottom:0,alignItems:"center"}}>
                <TouchableOpacity style={{}} onPress={()=>{this.setState({show:true})}}>
                  <Icon name="ellipsis-h" size={35} color="#1C1C1C" style={{bottom:0}} />
                </TouchableOpacity>
              </View>
              
              <View style={{flexDirection:"row",marginTop:20}}>
              <TouchableOpacity style={styles.Button}
                onPress={()=>{this.Clear()}}
                onLongPress={()=>{this.earseInput()}}
                >
                <Text style={{color:"white",fontSize:40}}>C</Text>
                </TouchableOpacity>
                <Field
                  styles={styles}
                  text="+/_"
                  color="white"
                  textInput={this.setMinus}
                />
                <TouchableOpacity style={styles.Button}
                onPress={()=>{this.earse("e")}}
                >
                <Icon name="eraser" size={30} color="white" style={{}} />
                </TouchableOpacity>
                <Field
                  styles={styles}
                  text="÷"
                  color="#FE7D28"
                  textInput={this.setValue}
                />
              </View>
              <View style={{flexDirection:"row",marginTop:20}}>
                <Field
                  styles={styles}
                  text="7"
                  color="white"
                  textInput={this.setValue}
                />
                <Field
                  styles={styles}
                  text="8"
                  color="white"
                  textInput={this.setValue}
                />
                <Field
                  styles={styles}
                  text="9"
                  color="white"
                  textInput={this.setValue}
                />
                <Field
                  styles={styles}
                  text="x"
                  color="#FE7D28"
                  textInput={this.setValue}
                />
              </View>
              <View style={{flexDirection:"row",marginTop:20}}>
                <Field
                  styles={styles}
                  text="4"
                  color="white"
                  textInput={this.setValue}
                />
                <Field
                  styles={styles}
                  text="5"
                  color="white"
                  textInput={this.setValue}
                />
                <Field
                  styles={styles}
                  text="6"
                  color="white"
                  textInput={this.setValue}
                />
                <Field
                  styles={styles}
                  text="-"
                  color="#FE7D28"
                  textInput={this.setValue}
                />
              </View>
              <View style={{flexDirection:"row",marginTop:20}}>
                <Field
                  styles={styles}
                  text="1"
                  color="white"
                  textInput={this.setValue}
                />
                <Field
                  styles={styles}
                  text="2"
                  color="white"
                  textInput={this.setValue}
                />
                <Field
                  styles={styles}
                  text="3"
                  color="white"
                  textInput={this.setValue}
                />
                <Field
                  styles={styles}
                  text="+"
                  color="#FE7D28"
                  textInput={this.setValue}
                />
              </View>
              <View style={{flexDirection:"row",marginTop:20}}>
                <TouchableOpacity style={styles.ButtonZero}
                onPress={()=>{this.setValue("0")}}
                >
                <Text style={{ color: "white", fontSize: 30 }}>0</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.Button}
                onPress={()=>{this.setValue(".")}}
                >
                <Text style={{ color: "white", fontSize: 30 }}>.</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonEqual}
                onPress={()=>{this.Equal()}}
                >
                <Text style={{ color: "white", fontSize: 30 }}>=</Text> 
                </TouchableOpacity>

              </View>
              </View>
              
              </>
            }
             </View>

     

   </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor:"#0E0E0E"
  },
  scrollView: {
    
  },
  header:{
    flex:1,
    alignItems:'flex-end',
  },
  InputBody:{
    alignItems: 'flex-end',
  },
  InputText:{
    marginTop:10,
    padding:10,
    height:100,
    fontSize:50,
    color:"white",
  },
  preValue:{
    marginTop:10,
    padding:10,
    fontSize:50,
    color:"#464646",

  },
  action:{
    height:480,
    backgroundColor:"#161616",
    alignItems:"center"

  },
  Button:{
    padding:5,
    paddingTop:0,
    backgroundColor:"#1C1C1C",
    margin:2.5,
    borderRadius:100,
    width:65,
    height:65,
    alignItems:"center",
    justifyContent:"center",
    marginTop:0

  },
  ButtonZero:{
    padding:5,
    backgroundColor:"#1C1C1C",
    margin:2.5,
    borderRadius:50,
    width:140,
    height:65,
    alignItems:"center",
    justifyContent:"center"

  },
  ButtonEqual:{
    padding:2.5,
    backgroundColor:"#FE7D28",
    margin:5,
    borderRadius:100,
    width:65,
    height:65,
    alignItems:"center",
    justifyContent:"center"

  }
  
});