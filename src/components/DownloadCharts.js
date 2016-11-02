// @flow
'use strict';

import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

// this will have to make some api requests on mount, create a container for this?

const DownloadCharts = (props) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => props.navigator.pop()} style={{margin: 20}}>
        <Text>
          Back
        </Text>
      </TouchableHighlight>
      <Text>
        Download!!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default DownloadCharts;
