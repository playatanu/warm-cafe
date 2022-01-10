// React
import {Text, View, TouchableOpacity, TextInput, Alert} from 'react-native';
import React, {useState, useRef} from 'react';

// Icon
import Icon from 'react-native-vector-icons/SimpleLineIcons';

// Action Sheet
import ActionSheet from 'react-native-actionsheet';

import Geolocation from '@react-native-community/geolocation';
import Geocoder from '@timwangdev/react-native-geocoder';

import {useSelector, useDispatch} from 'react-redux';
import geoAction from '../store/actions/geoAction';

const HeaderHome = () => {
  const [address, setaddress] = useState('');
  const geoState = useSelector(state => state.geoReducer);
  const dis = useDispatch();

  const cart = useSelector(state => state.cartReducer);

  //buttom sheets function
  const actionSheet = useRef();
  const showActionSheet = () => {
    actionSheet.current.show();
  };

  const geoLocationUpdate = () => {
    Geolocation.getCurrentPosition(async info => {
      try {
        const position = {
          lat: info.coords.latitude,
          lng: info.coords.longitude,
        };
        const geoposition = await Geocoder.geocodePosition(position);
        const geo = {
          address: geoposition[0].formattedAddress,
          lat: geoposition[0].position.lat,
          lng: geoposition[0].position.lng,
        };
        dis(geoAction(geo));
      } catch (err) {
        if (err) {
        }
      }
    });
  };

  //buttom sheet UI
  const sheetOption = [
    <TouchableOpacity
      onPress={geoLocationUpdate}
      style={{
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <Icon name="location-pin" size={15} color={'#FF971D'} />
      <Text style={{color: '#FF971D', marginLeft: 5}}>Current Location</Text>
    </TouchableOpacity>,

    <View style={{width: '90%'}}>
      <TextInput
        style={{}}
        // defaultValue={geoState.address}
        placeholder="Your Location"
        onChangeText={e => setaddress(e)}
      />
    </View>,
    'Save',
  ];

  React.useEffect(() => {
    geoLocationUpdate();
  }, []);

  return (
    <>
      <View style={{width: '100%', height: '100%'}}>
        <TouchableOpacity onPress={showActionSheet}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="location-pin" size={15} color={'#FF971D'} />
            <Text
              numberOfLines={1}
              style={{
                fontSize: 15,
                fontWeight: '400',
                paddingLeft: 10,
                paddingRight: 30,
              }}>
              {geoState.address}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <ActionSheet
        ref={actionSheet}
        options={sheetOption}
        tintColor={'#FF971D'}
        onPress={index => {
          if (index == 2) {
            address != '' ? dis(geoAction({address: address})) : '';
            setaddress('');
          }
        }}
      />
    </>
  );
};

export default HeaderHome;
