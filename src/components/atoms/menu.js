import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Menu = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.openDrawer()}>
        <Text style={styles.textButton}>MENU</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  button: {
    marginTop: 5,
    marginLeft: 5,
    width: '20%',
    backgroundColor: '#D9D9D9',
  },
  textButton: {
    textAlign: 'center',
    padding: 10,
    fontFamily: 'Poppins-Bold',
  },
});
