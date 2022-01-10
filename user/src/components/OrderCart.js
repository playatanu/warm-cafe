import {StyleSheet, View, Text} from 'react-native';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
const OrderCart = () => {
  return (
    <>
      <View style={{backgroundColor: '#FFF', margin: 8}}>
        <View style={styles.top}>
          <Text>JDGADOEI6DAF</Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialCommunity
              name="radiobox-marked"
              color={true ? '#0E9C0B' : '#FF000F'}
            />
            <Text>Submitted</Text>
          </View>
        </View>

        <View style={styles.mid}>
          <Text>Momo</Text>
          <Text>x3</Text>
          <Text>₹20</Text>
        </View>

        <View style={styles.mid}>
          <Text>Momo</Text>
          <Text>x3</Text>
          <Text>₹20</Text>
        </View>

        <View style={styles.buttom}>
          <Text style={{color: '#FFF', fontWeight: 'bold'}}>Total</Text>
          <Text style={{color: '#FFF', fontWeight: 'bold'}} />
          <Text style={{color: '#FFF', fontWeight: 'bold'}}>₹ 223</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  top: {
    flex: 0,
    paddingHorizontal: 20,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  mid: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    padding: 8,
  },

  buttom: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    padding: 8,
    backgroundColor: '#FF971D',
  },
});

export default OrderCart;
