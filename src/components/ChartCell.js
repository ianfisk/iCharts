// @flow
'use strict';

import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../styles/Colors';
import FontStyles from '../styles/FontStyles';

const displayText = false;

const ChartCell = (props) => {
  var favIcon = 'ios-heart-outline';
  if(props.vfrChart.isFavorited == true){
    favIcon = 'ios-heart';
  }
      return (
        <View style={styles.inputsContainer}>
            <View style={styles.vfrText}>
              <TouchableHighlight style={styles.textHighlight} onPress={() => console.log('eventually display more map information')}>
                <Text style={FontStyles.thin}>
                    {props.vfrChart.regionId}
                    {"\n"}
                    {props.vfrChart.regionName}
                </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.buttons}>
               <TouchableHighlight
                 underlayColor={Colors.primary}
                 style={styles.icon}
                 onPress={() => props.onChartPress(props.vfrChart.uniqueId)}>
               <Icon style={{paddingTop: 3}} name={favIcon} size={20} color={Colors.border} />
               </TouchableHighlight>
            </View>
            <View style={styles.buttons}>
               <TouchableHighlight
                 underlayColor={Colors.primary}
                 style={styles.icon}
                 onPress={() => props.onViewPress()}>
                 <Icon style={{paddingTop: 3}} name="ios-arrow-forward" size={20} color={Colors.border} />
               </TouchableHighlight>
            </View>
        </View>

      );
  }



ChartCell.propTypes = {
    vfrChart: PropTypes.object.isRequired,
    onChartPress: PropTypes.func.isRequired,
    onViewPress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  inputsContainer:{
    flex: 1,
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    borderColor: 'black',
    borderWidth: 0.5,
    alignItems: 'center'
  },
  textHighlight: {
    flex: 1,
  },
  vfrText: {
    flex: 1,
  },
  icon: {
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderRadius: 15,
    borderWidth: 0.5,
    height: 30,
    justifyContent: 'center',
    margin: 15,
    width: 30,
  },
});

export default ChartCell;
