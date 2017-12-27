/**
 * @Author: H krishna
 * @Date:   2017-12-08T16:22:02+05:30
 * @Email:  krishnahare201@gmail.com
 * @Filename: run-info.js
 * @Last modified by:   H krishna
 * @Last modified time: 2017-12-08T19:25:48+05:30
 */
import React, { Component } from 'react';
import {Text,View} from 'react-native';

import sharedStyles from './shared-styles';

export default class RunInfo extends Component{
  constructor(props) {
    super(props);

    this.state = {value: this.props.value};
  }
  formatValue(){
    return this.state.value;
  }
  render(){
    let value = this.state.value ? this.formatValue() : '-';
    return(
      <View style={[sharedStyles.RunInfoWrapper,{flex:1, flexDirection: 'column-reverse'}]}>
        <Text style={sharedStyles.RunInfoTitle}>{this.props.title.toUpperCase()}</Text>
        <Text style={sharedStyles.RunInfoValue}>{value}</Text>
      </View>
    );
  }
}
