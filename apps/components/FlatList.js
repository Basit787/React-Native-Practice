import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';

const menuItemsToDisplay = [
  {name: 'Hummus', price: '$5.00', id: '1A'},
  {name: 'Moutabal', price: '$5.00', id: '2B'},
  {name: 'Falafel', price: '$7.50', id: '3C'},
  {name: 'Marinated Olives', price: '$5.00', id: '4D'},
  {name: 'Kofta', price: '$5.00', id: '5E'},
  {name: 'Eggplant Salad', price: '$8.50', id: '6F'},
  {name: 'Lentil Burger', price: '$10.00', id: '7G'},
  {name: 'Smoked Salmon', price: '$14.00', id: '8H'},
  {name: 'Kofta Burger', price: '$11.00', id: '9I'},
  {name: 'Turkish Kebab', price: '$15.50', id: '10J'},
  {name: 'Fries', price: '$3.00', id: '11K'},
  {name: 'Buttered Rice', price: '$3.00', id: '12L'},
  {name: 'Bread Sticks', price: '$3.00', id: '13M'},
  {name: 'Pita Pocket', price: '$3.00', id: '14N'},
  {name: 'Lentil Soup', price: '$3.75', id: '15O'},
  {name: 'Greek Salad', price: '$6.00', id: '16Q'},
  {name: 'Rice Pilaf', price: '$4.00', id: '17R'},
  {name: 'Baklava', price: '$3.00', id: '18S'},
  {name: 'Tartufo', price: '$3.00', id: '19T'},
  {name: 'Tiramisu', price: '$5.00', id: '20U'},
  {name: 'Panna Cotta', price: '$5.00', id: '21V'},
];

const Item = ({name, price}) => {
  return (
    <View
      style={{
        padding: 10,
        margin: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'grey',
      }}>
      <Text style={{color: 'white', padding: 5, fontWeight: 'bold'}}>
        {name}
      </Text>
      <Text
        style={{
          color: 'white',
          backgroundColor: 'red',
          padding: 5,
          borderRadius: 4,
          width: 60,
          textAlign: 'center',
        }}>
        {price}
      </Text>
    </View>
  );
};

const separator = () => {
  return <View style={{borderBottomWidth: 10, borderBottomColor: 'black'}} />;
};

const FlatListData = () => {
  const renderItem = ({item}) => <Item name={item.name} price={item.price} />;

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          backgroundColor: 'green',
          color: 'white',
          textAlign: 'center',
          padding: 15,
        }}>
        This is FlatList Component
      </Text>
      <FlatList
        data={menuItemsToDisplay}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={separator}
      />
    </View>
  );
};

export default FlatListData;
