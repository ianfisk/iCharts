// @flow
'use strict';

import React, { Component, PropTypes } from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Colors from '../styles/Colors';
import DownloadCharts from './DownloadCharts';
import FontStyles from '../styles/FontStyles';
import SettingsRoutes from '../constants/SettingsRoutes';

const Settings = (props) => {
  return (
    <View style={{padding: 20}}>
      <TouchableHighlight
        style={styles.textHighlight}
        onPress={() => props.navigator.push({name: 'download'})}
        underlayColor={Colors.primary}>
        <Text style={[FontStyles.settingsItem, {paddingLeft: 8}]}>
          Download Charts
        </Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.textHighlight}
        onPress={() => console.log('eventually display more map information')}
        underlayColor={Colors.primary}>
        <Text style={[FontStyles.settingsItem, {paddingLeft: 8}]}>
          Remove Charts
        </Text>
      </TouchableHighlight>
    </View>
  );
}

class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    switch (route.name) {
      case SettingsRoutes.DOWNLOAD:
        return <DownloadCharts navigator={navigator} />
      case SettingsRoutes.SETTINGS_MAIN_MENU:
      default:
        return <Settings navigator={navigator} />
    }
  }

  render() {
    return (
      <View style={styles.settings}>
        <Navigator
          style={{ flex:1 }}
          initialRoute={{ name: SettingsRoutes.SETTINGS_MAIN_MENU }}
          renderScene={this.renderScene}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settings: {
    backgroundColor: Colors.secondary,
    flex: 1,
  },
  textHighlight: {
    borderRadius: 10,
    height: 100,
    justifyContent: 'center',
  },
});

export default SettingsContainer;
