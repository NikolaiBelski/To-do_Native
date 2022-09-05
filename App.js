import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';


export default function App() {
const [list,setList] = useState([
  {text:'Покормить котов',key : 1},
  {text:'Убрать за котами',key : 2},
  {text:'Погладить котов',key : 3},
  {text:'Снова покормить',key : 4},

])

const addList = (text) => {
 setList((list) => {
  return [
    {text:text,key:Math.random().toString(36).substring(7)},
    ...list
  ]
 })
}

const deleteList = (key) => {
  setList((list)=>{
    return list.filter(elem=>elem.key !=key)
  })
}

  return (
    <View style={styles.container}>
     <Header/>
     <Form addList = {addList}/>
     <FlatList data={list}
     renderItem = {({item})=>(
      <ListItem elem = {item} deleteList = {deleteList}/>
     )}
     />
<StatusBar style='auto'/> 
    </View>
  );
}

const styles = StyleSheet.create({
  
});
