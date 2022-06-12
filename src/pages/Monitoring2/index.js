import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import Menu from '../../components/atoms/menu';

const Monitoring2 = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Menu navigation={navigation} />
      {/* Logo */}
      <View style={styles.containerCenter}>
        <Image
          style={styles.imageLogo}
          source={require('../../assets/images/logo.png')}
        />
      </View>
      {/* Last Logo */}

      {/* Content */}
      <View style={styles.containerCenter}>
        <Text style={styles.textTitle}>PARAMETER GLIDEPATH </Text>
      </View>
      {/*  */}
      <View style={styles.containerColHeader}>
        <Text style={styles.textColHeader}>INTERGRAL</Text>
        <View style={styles.border} />
        <Text style={styles.textColHeader}>STANBY</Text>
      </View>
      {/*  */}
      <View style={{marginTop: 36}} />
      {/*  */}
      <View style={styles.containerContent}>
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>Path RF Level</Text>
          <View style={styles.containerNumber}>
            <Text style={styles.textNumber}>10</Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>Path RF Level</Text>
          <View style={styles.containerNumber}>
            <Text style={styles.textNumber}>10</Text>
          </View>
        </View>
      </View>
      {/*  */}
      <View style={styles.containerContent}>
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>Path DDM</Text>
          <View style={styles.containerNumber}>
            <Text style={styles.textNumber}>10</Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>Path DDM</Text>
          <View style={styles.containerNumber}>
            <Text style={styles.textNumber}>10</Text>
          </View>
        </View>
      </View>
      {/*  */}
      <View style={styles.containerContent}>
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>Path SDM</Text>
          <View style={styles.containerNumber}>
            <Text style={styles.textNumber}>10</Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>Path SDM</Text>
          <View style={styles.containerNumber}>
            <Text style={styles.textNumber}>10</Text>
          </View>
        </View>
      </View>
      {/*  */}
      <View style={styles.containerContent}>
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>Width DDM</Text>
          <View style={styles.containerNumber}>
            <Text style={styles.textNumber}>10</Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>Width DDM</Text>
          <View style={styles.containerNumber}>
            <Text style={styles.textNumber}>10</Text>
          </View>
        </View>
      </View>
      {/*   */}
      <View style={{marginTop: 33}} />
      {/*  */}
      <View style={styles.containerCenter}>
        <Text style={styles.textCleareance}>Clearence</Text>
      </View>
      {/*  */}
      <View style={styles.containerContent}>
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>RF Level</Text>
          <View style={styles.containerNumber}>
            <Text style={styles.textNumber}>10</Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>RF Level</Text>
          <View style={styles.containerNumber}>
            <Text style={styles.textNumber}>10</Text>
          </View>
        </View>
      </View>
      {/*  */}
      <View style={styles.containerContent}>
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>150Hz Mod Percent</Text>
          <View style={styles.containerNumber}>
            <Text style={styles.textNumber}>10</Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>150Hz Mod Percent</Text>
          <View style={styles.containerNumber}>
            <Text style={styles.textNumber}>10</Text>
          </View>
        </View>
      </View>
      {/*  */}
      <View style={{marginTop: 80}} />
      {/*  */}
      <View style={styles.containerContent}>
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>RF Freq Difference</Text>
          <View style={styles.containerNumber}>
            <Text style={styles.textNumber}>10</Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>RF Freq Difference</Text>
          <View style={styles.containerNumber}>
            <Text style={styles.textNumber}>10</Text>
          </View>
        </View>
      </View>
      {/* Last Content */}
    </View>
  );
};

export default Monitoring2;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  imageLogo: {
    width: 60,
    height: 60,
  },
  containerCenter: {
    alignItems: 'center',
  },
  textTitle: {
    fontFamily: 'Poppins-Bold',
    marginTop: 20,
    color: '#000000',
  },
  border: {
    borderWidth: 1,
  },
  containerColHeader: {
    marginTop: 20,
    backgroundColor: '#00FF29',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignContent: 'center',
  },
  textColHeader: {
    color: '#000000',
    fontFamily: 'Poppins-Bold',
  },
  containerContent: {
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  nameContent: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
  containerNumber: {
    width: 37,
    height: 19,
    backgroundColor: '#00FF29',
  },
  textNumber: {
    textAlign: 'center',
  },
  containerSubContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 10,
  },
  textCleareance: {
    color: 'red',
    fontFamily: 'Poppins-Regular',
  },
});
