import {StyleSheet, Text, Image, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Menu from '../../components/atoms/menu';
import database from '@react-native-firebase/database';

const Monitoring1 = ({navigation}) => {
  const [dataStandby, setDataStandby] = useState([]);
  const [dataIntegral, setDataIntegral] = useState([]);
  const [text, setText] = useState('');

  const getData = () => {
    // Get data Integral
    database()
      .ref('/integral/Monitor1')
      .on('value', snapshot => {
        setDataIntegral(snapshot.val());
      });

    // Get Data Standby
    database()
      .ref('/standby/Monitor1')
      .on('value', snapshot => {
        setDataStandby(snapshot.val());
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const renderDataIntegral = (value, low, hight, prelow, preHight) => {
    if (value < low || value > hight) {
      return styles.containerNumberRed;
    } else if (value < prelow || value > preHight) {
      return styles.containerNumberYellow;
    } else {
      return styles.containerNumberGreen;
    }
  };

  const renderTextBold = (value, prelow, preHight) => {
    if (value < prelow || value > preHight) {
      return styles.textNumberBold;
    } else {
      return styles.textNumber;
    }
  };
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
          <View
            style={renderDataIntegral(
              dataIntegral.pathRFLevel,
              80.0,
              120.0,
              85.0,
              115.0,
            )}>
            <Text style={renderTextBold(dataIntegral.pathRFLevel, 85.0, 115.0)}>
              {dataIntegral.pathRFLevel}
            </Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>Path RF Level</Text>
          <View
            style={renderDataIntegral(
              dataStandby.pathRFLevel,
              80.0,
              120.0,
              85.0,
              115.0,
            )}>
            <Text style={renderTextBold(dataStandby.pathRFLevel, 85.0, 115.0)}>
              {dataStandby.pathRFLevel}
            </Text>
          </View>
        </View>
      </View>
      {/*  */}
      <View style={styles.containerContent}>
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>Path DDM</Text>
          <View
            style={renderDataIntegral(
              dataIntegral.pathDDM,
              -0.05,
              0.05,
              -0.038,
              0.038,
            )}>
            <Text style={renderTextBold(dataIntegral.pathDDM, -0.038, 0.038)}>
              {dataIntegral.pathDDM}
            </Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>Path DDM</Text>
          <View
            style={renderDataIntegral(
              dataStandby.pathDDM,
              -0.05,
              0.05,
              -0.038,
              0.038,
            )}>
            <Text style={renderTextBold(dataStandby.pathDDM, -0.038, 0.038)}>
              {dataStandby.pathDDM}
            </Text>
          </View>
        </View>
      </View>
      {/*  */}
      <View style={styles.containerContent}>
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>Path SDM</Text>
          <View
            style={renderDataIntegral(
              dataIntegral.pathSDM,
              76.0,
              84.0,
              77.0,
              83.0,
            )}>
            <Text style={renderTextBold(dataIntegral.pathSDM, 77.0, 83.0)}>
              {dataIntegral.pathSDM}
            </Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>Path SDM</Text>
          <View
            style={renderDataIntegral(
              dataStandby.pathSDM,
              76.0,
              84.0,
              77.0,
              83.0,
            )}>
            <Text style={renderTextBold(dataStandby.pathSDM, 77.0, 83.0)}>
              {dataStandby.pathSDM}
            </Text>
          </View>
        </View>
      </View>
      {/*  */}
      <View style={styles.containerContent}>
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>Width DDM</Text>
          <View
            style={renderDataIntegral(
              dataIntegral.widthDDM,
              0.125,
              0.225,
              0.137,
              0.213,
            )}>
            <Text style={renderTextBold(dataIntegral.widthDDM, 0.137, 0.213)}>
              {dataIntegral.widthDDM}
            </Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>Width DDM</Text>
          <View
            style={renderDataIntegral(
              dataStandby.widthDDM,
              0.125,
              0.225,
              0.137,
              0.213,
            )}>
            <Text style={renderTextBold(dataStandby.widthDDM, 0.137, 0.213)}>
              {dataStandby.widthDDM}
            </Text>
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
          <View
            style={renderDataIntegral(
              dataIntegral.rfLevel,
              75.0,
              133.0,
              81.0,
              125.0,
            )}>
            <Text style={renderTextBold(dataIntegral.rfLevel, 81.0, 125.0)}>
              {dataIntegral.rfLevel}
            </Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>RF Level</Text>
          <View
            style={renderDataIntegral(
              dataStandby.rfLevel,
              75.0,
              133.0,
              81.0,
              125.0,
            )}>
            <Text style={renderTextBold(dataStandby.rfLevel, 81.0, 125.0)}>
              {dataStandby.rfLevel}
            </Text>
          </View>
        </View>
      </View>
      {/*  */}
      <View style={styles.containerContent}>
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>150Hz Mod</Text>
          <View
            style={renderDataIntegral(
              dataIntegral.mod150,
              65.0,
              95.0,
              69.0,
              91.0,
            )}>
            <Text style={renderTextBold(dataIntegral.mod150, 69.0, 91.0)}>
              {dataIntegral.mod150}
            </Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>150Hz Mod</Text>
          <View
            style={renderDataIntegral(
              dataStandby.mod150,
              65.0,
              95.0,
              69.0,
              91.0,
            )}>
            <Text style={renderTextBold(dataStandby.mod150, 69.0, 91.0)}>
              {dataStandby.mod150}
            </Text>
          </View>
        </View>
      </View>
      {/*  */}
      {/*  */}
      <View style={styles.containerContent}>
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>RF Freq</Text>
          <View
            style={renderDataIntegral(
              dataIntegral.rfDiff,
              65.0,
              95.0,
              69.0,
              91.0,
            )}>
            <Text style={renderTextBold(dataIntegral.rfDiff, 69.0, 91.0)}>
              {dataIntegral.rfDiff}
            </Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.containerSubContent}>
          <Text style={styles.nameContent}>RF Freq</Text>
          <View
            style={renderDataIntegral(
              dataStandby.rfDiff,
              65.0,
              95.0,
              69.0,
              91.0,
            )}>
            <Text style={renderTextBold(dataStandby.rfDiff, 69.0, 91.0)}>
              {dataStandby.rfDiff}
            </Text>
          </View>
        </View>
      </View>
      {/* Last Content */}
    </View>
  );
};

export default Monitoring1;

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
  containerNumberGreen: {
    width: 50,
    height: 19,
    backgroundColor: '#00FF29',
  },
  containerNumberRed: {
    width: 50,
    height: 19,
    backgroundColor: '#FF0000',
  },
  containerNumberYellow: {
    width: 50,
    height: 19,
    backgroundColor: '#FFCE00',
  },
  textNumber: {
    textAlign: 'center',
  },
  textNumberBold: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
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
