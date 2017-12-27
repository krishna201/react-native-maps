/**
 * @Author: H krishna
 * @Date:   2017-12-08T15:58:44+05:30
 * @Email:  krishnahare201@gmail.com
 * @Filename: App.js
 * @Last modified by:   H krishna
 * @Last modified time: 2017-12-09T14:05:21+05:30
 */



import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RunInfo from './components/run-info';
import RunInfoNumeric from './components/run-info-numeric';
import MapView from 'react-native-maps'
let id = 0;
export default class App extends Component<{}> {
  constructor(props) {
    super(props);


  let watchID =  navigator.geolocation.watchPosition((position)=>{
    this.setState({
      markers:[
        ...this.state.markers,{
          coordinate: position.coords,
          key: id++
        }
      ]
    }, null, {distanceFilter:10});
    })

    this.state = { markers:[], watchID};
    setInterval(()=>{
      this.distanceInfo.setState({value:Math.random()*100});
        this.speedInfo.setState({value:Math.random()*15});
          this.directionInfo.setState({
            value:this.directionInfo.state === 'N'? 'NW':'N'
          });
    },1000);
  }


  componentWillUnmount() {
    navigator.geolocation.stopWatch(this.state.watchID);
  }

addMarker(region){
  let now = (new Date).getTime();
  if(this.state.ladAddedMarker> now - 5000){
    return;
  }
  this.setState({
    markers:[
      ...this.state.markers,{
        coordinate: region,
        key: id++
    }],
      ladAddedMarker:now

  });
}

  render() {
    return (
      <View style={{flex: 1}}>
         {/* <Text style={{flex:1,backgroundColor: 'red'}}>MAPVIEW</Text>  */}
<MapView style={styles.map}

  showsUserLocation

  initialRegion={{
      latitude: 28.644454,
      longitude: 77.326388,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    }}
>
  {/* <MapView.PolyLine
    coordinates = {this.state.markers.map((marker)=> marker.coordinate)}
    strokeWidth={5}
/> */}
</MapView>



        <View style={styles.infoWrapper}>
          <RunInfoNumeric title="Distance"
            unit="km"
             ref={(info) => this.distanceInfo = info}

           />
            <RunInfoNumeric title="Speed"
              unit="km/h"
               ref={(info)=> this.speedInfo = info}
             />
              <RunInfo title="Direction"
                value="NE"
                ref={(info) => this.directionInfo = info}
              />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infoWrapper:{
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    flex: 1,
    // backgroundColor: 'white'
  },
  map:{
    ...StyleSheet.absoluteFillObject
  }
});
