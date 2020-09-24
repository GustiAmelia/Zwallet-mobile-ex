import React from 'react';
import { View, Text,Image, StyleSheet} from 'react-native';

const CardTransaction = ({item}) => {
  return (
    <View style={Styles.contenCard}>
      <View style={Styles.leftContent}>
        <Image
        style={Styles.image}
        source={require('../../assets/avatar.png')}/>
        <View style={Styles.textLeftContent}>
          <Text style={Styles.textName}>{item.name}</Text>
          <Text style={Styles.description}>{item.description}</Text>
        </View>
      </View>
      <View style={Styles.rightContent}>
        <Text style={Styles.nominal}>{item.total}</Text>
      </View>
    </View>
  );
};

export default CardTransaction;

const Styles = StyleSheet.create({
  contenCard:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#ffffff',
    marginVertical:10,
    paddingVertical:10,
    borderRadius:10,
    elevation:5,

  },
  leftContent:{
    flexDirection:'row',
    marginLeft:16,
  },
  textLeftContent:{
    marginLeft:20,
    justifyContent:'center',
  },
  image:{
    width:56,
    height:56,
    borderRadius:10,
  },
  textName:{
    fontSize:16,
    fontWeight:'bold',
    color:'#4D4B57',
  },
  description:{
    fontSize:14,
    color:'#7A7886',
    marginTop:9,
  },
  rightContent:{
    marginRight:16,
    justifyContent:'center',
  },
  nominal:{
    fontSize:18,
    fontWeight:'bold',
    color:'#1EC15F',
  },
});
