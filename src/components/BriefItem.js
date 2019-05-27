/**
 * 首页药品简介中的单个简介项
 */
import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, Platform, TouchableNativeFeedback, View, Dimensions} from 'react-native';
import {withNavigation} from 'react-navigation';
import Global from "../utils/Global"
import Swipeout from "react-native-swipeout";

const {width} = Dimensions.get('window');
class BriefItem extends Component {
  constructor(props) {
    super(props);
  }
  checkDetail(id){
    //todo get all info
    this.props.navigation.navigate('Comment',{lectureId:1})
  }
  render() {
    //右边button属性
    const rightBtns = [{text: '删除',backgroundColor: "#F0F0F0",color:'red',borderRadius:10,borderWidth:1,borderColor:'black',marginLeft:7}];
    return (
      <Swipeout right={rightBtns} style={{backgroundColor:'white'}}>
        <TouchableNativeFeedback onPress={() => this.checkDetail(this.props.history.id)}>
        <View style={styles.container} >
          <View>
            <Text style={{fontSize:18}}>{this.props.history.title}</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',fontSize:10}}>
            <Text style={{flex:1}}>2019-10-2 22:12:10</Text>
            <Text style={{flex:1}}>主讲人：{this.props.history.professor}</Text>
          </View>
        </View>
        </TouchableNativeFeedback>
      </Swipeout>
    )
  };
}

let styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex: 1,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:8,
    paddingTop:8,
    borderWidth:1,
    borderRadius:10
  },


});


export default withNavigation(BriefItem);