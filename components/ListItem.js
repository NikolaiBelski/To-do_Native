
import { StyleSheet, Text,TouchableOpacity } from 'react-native';

export default function ListItem({elem,deleteList}) {
  return (
    <TouchableOpacity onPress={()=>deleteList(elem.key)}>
        <Text style={styles.text}>{elem.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
   text:{
    padding:20,
    marginLeft:'20%',
    backgroundColor:'#c5d1eb',
    textAlign:'center',
    borderRadius:8,
    borderWidth:1,
    width:'60%',
    marginTop:20
   }
});
