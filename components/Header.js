
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:60,
    backgroundColor: '#E2d4ba',
    height: 100,
   },
   text:{
    fontSize:18,
    color:'green',
    textAlign:'center'
   }
});
