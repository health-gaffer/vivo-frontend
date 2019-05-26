import React, {Component} from 'react';
import {
  ActivityIndicator,
  TextInput,
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import {Button,  Badge} from 'react-native-elements';
import Styles from '../utils/Styles'
import Icon from 'react-native-vector-icons/FontAwesome5';
import CommentItem from './CommentItem';
import Global from '../utils/Global'
import Modal from 'react-native-modalbox';
export default class Comment extends Component {
  static navigationOptions = {
    header:null
  };

  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      nickname: '',
      myComment: '',
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let comments = [{id: 123456,  name: '昵称test',   comment: '我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人没有意义的回答没有意义的回答没有意义的回答没有意义的回答没有意义的回答没有意义的回答没有意义的回答没有意义的回答'
    },{id: 1246,  name: '昵称test',   comment: '我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人没有意义的回答没有意义的回答没有意义的回答没有意义的回答没有意义的回答没有意义的回答没有意义的回答没有意义的回答'
    },{id: 12345,  name: '昵称test',   comment: '我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人我是好人没有意义的回答没有意义的回答没有意义的回答没有意义的回答没有意义的回答没有意义的回答没有意义的回答没有意义的回答'
    }]
    this.setState({
      comments: this.state.comments.concat(comments)
    });
    // fetch(REQUEST_URL)
    //   .then(response => response.json())
    //   .then(responseData => {
    //     // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
    //     this.setState({
    //       data: this.state.data.concat(responseData.movies),
    //       loaded: true
    //     });
    //   });
  }
  setNickname(name) {
    this.setState({
      nickname: name,
    })
  }

  setMyComment(myComment) {
    this.setState({
      myComment: myComment,
    })
  }

  showQRCode = () => {
    this.refs.modal.open()
  }

  render() {
    const navigation = this.props.navigation
    return (
      <View style={{flex:1}}>
        <View style={[Styles.headerStyle,{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
          <View style={{marginLeft: 5}}>
            <Button
              type="clear"
              icon={<Icon name="arrow-left" size={20} color={Global.blue} />}
              onPress={() => {
                navigation.navigate('Home')
              }}
            />
          </View>
          <Text style={Styles.title}>{navigation.getParam('title','未知的讲座')}</Text>
          <View style={{marginRight: 5}}>
            <Button
              type="clear"
              icon={<Icon name="qrcode" size={25} color={Global.blue} />}
              onPress={this.showQRCode}
            />
          </View>
        </View>
        <Modal style={[styles.modal]} position={"center"} ref={"modal"} isDisabled={this.state.isDisabled}>
          <Text>todo通过当前的id在这里添加二维码</Text>
        </Modal>
        <KeyboardAvoidingView
          // keyboardVerticalOffset={StatusBar.currentHeight+Global.titleHeight}
          behavior='padding' style={{ flex: 1, justifyContent:'flex-end'}}>

          <FlatList
            data={this.state.comments}
            keyExtractor={item => item.id+''}
            style={{padding:6}}
            renderItem={(item, index) => <CommentItem item={item.item}/>}
          />

          <View style={{ backgroundColor: 'red'}}>
            <View style={{flexDirection: 'row' ,height:40, justifyContent:'space-between',alignItems: 'center',}}>
              {/*<Text style={{color: 'white', fontSize: 18}}>昵称:</Text>*/}
              <View>
                <TextInput
                  onChangeText={() => this.setNickname()}
                  value={this.state.nickname}
                  style={styles.commentInput} maxLength={6} placeholder={'输入评论昵称'}/>
              </View>
              <Badge onPress={() => {}}
                     key={'send'} textStyle={styles.badgeTextStyle}
                     badgeStyle={styles.badgeStyle}
                     value={'发送'}/>
            </View>
            <View style={{minHeight:40,backgroundColor: 'white'}}>
              <TextInput
                onChangeText={() => this.setMyComment()}
                value={this.state.myComment}
                multiline={true}
                style={styles.inputTextStyle}
                placeholder='在此输入评论内容'
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>

    )
  }
}
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  modal: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: width*0.8,
    width: width*0.8,
  },
  list: {
    backgroundColor: "#F5FCFF"
  },
  badgeStyle: {
    height: 24,
    borderRadius: 12,
    marginRight: 5,
    marginBottom: 8,
    paddingLeft: 3,
    paddingRight: 3,
  },
  badgeTextStyle: {
    fontSize: Global.fontSize - 4,
    textAlignVertical: 'center',
  },
  commentInput:{
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    backgroundColor: 'gray',
    borderRadius: 18,
    height: 30,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
    textAlignVertical: 'center',
    lineHeight: 24
  },
  inputTextStyle: {
    // padding: 0,
    // paddingBottom: 10,
    // paddingLeft: 5,
    // marginTop: 7,
    // fontSize: 17,
    // marginLeft: 8,
  },
})
