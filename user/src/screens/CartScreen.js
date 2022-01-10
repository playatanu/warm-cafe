import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import React from 'react';
import MiniFoodCard from '../components/MiniFoodCard';

const CartScreen = ({navigation}) => {
  const cart = useSelector(state => state.cartReducer);

  return (
    <View style={{padding: 8}}>
      <FlatList
        numColumns={1}
        data={cart.items}
        extraData={cart.items}
        //keyExtractor={cart.item}
        progressViewOffset={100}
        renderItem={({item}) => <MiniFoodCard foods={item} />}
      />
      <Text style={styles.totalText}>Subtotal ₹{cart.totalAmount}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
        <View style={styles.proceedBtn}>
          <Text style={styles.btnText}>
            Proceed to Buy ({cart.cartCounter} items)
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  totalText: {
    margin: 8,
  },
  proceedBtn: {
    margin: 8,
    backgroundColor: '#FF971D',
    padding: 8,
    alignItems: 'center',
    borderRadius: 5,
  },

  btnText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default CartScreen;
