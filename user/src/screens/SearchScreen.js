import React, {useState} from 'react';
import {
  View,
  TextInput,
  Switch,
  StyleSheet,
  FlatList,
  Text,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import foodData from '../db/foodData';

import FoodCard from '../components/FoodCard';

const SearchScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [vegFilter, setVegFilter] = useState(false);

  const updateFood = e => {
    console.log(e);
    setSearchText(e);
  };

  const toggleFunc = e => {
    setVegFilter(e);
  };

  return (
    <>
      <ScrollView>
        <View style={{alignItems: 'center', marginBottom: 50}}>
          {/* Search Bar */}

          <View style={styles.searchbox}>
            <TextInput
              placeholder="Find your fab Foods.."
              style={{
                flex: 0,
                flexDirection: 'row',
                width: '85%',
              }}
              onChangeText={e => updateFood(e)}
            />
            <Icon name="search1" size={25} />
          </View>

          {/* Veg Only Switch */}

          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}>
            <Text>Veg Only</Text>
            <Switch
              trackColor={{false: '#767577', true: '#767577'}}
              thumbColor={vegFilter ? '#FF971D' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              value={vegFilter}
              onValueChange={toggleFunc}
            />
          </View>

          {/* Flatlist Food Item */}
          <FlatList
            numColumns={2}
            data={foodData
              .filter(val => {
                if (searchText == '') {
                  console.log(val.name);
                  return null;
                } else if (
                  val.name.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return val;
                }
              })
              .filter(val => {
                if (vegFilter) {
                  if (val.veg == vegFilter.toString()) {
                    return val;
                  }
                } else {
                  return val;
                }
              })}
            renderItem={({item}) => <FoodCard foods={item} />}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  searchbox: {
    flexDirection: 'row',
    marginHorizontal: 0,
    marginVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default SearchScreen;
