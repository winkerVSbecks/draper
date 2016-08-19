import * as R from 'ramda';
import React from 'react';
import { Text, ScrollView } from 'react-native';
import s from './styles';

const styles = R.compose(
  R.values,
  R.mapObjIndexed((style, name) => (
    <Text style={[ style ]} key={ name }>{ name }</Text>
  )),
  R.omit(['config', 'fill'])
);

function Root() {
  return (
    <ScrollView style={[ s.mtIOS ]}>
      { styles(s) }
    </ScrollView>
  );
}

export default Root;
