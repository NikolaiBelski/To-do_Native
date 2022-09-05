
import { StyleSheet, View,Button,TextInput } from 'react-native';
import { useState } from 'react';


export default function Form ({addList}) {
const [text,setText] = useState('')

const onchange = (text) => {
setText(text)
};


  return (
    <View>
      <TextInput style={styles.input} 
                 onChangeText = {onchange}
                 placeholder = 'Добавить задачу'/>
                 <Button color='green' title='Добавить задачу' onPress={()=>addList(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
   input:{
    padding:20,
    borderBottomWidth:1,
    borderColor:'green',
    marginHorizontal:'20%',
    marginVertical:30,
    width:'60%'

    
   }
});
