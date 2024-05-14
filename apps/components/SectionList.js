import React from 'react';
import {ScrollView, SectionList, Text, View} from 'react-native';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      {name: 'Hummus', price: '$5.00'},
      {name: 'Moutabal', price: '$5.00'},
      {name: 'Falafel', price: '$7.50'},
      {name: 'Marinated Olives', price: '$5.00'},
      {name: 'Kofta', price: '$5.00'},
      {name: 'Eggplant Salad', price: '$8.50'},
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      {name: 'Lentil Burger', price: '$10.00'},
      {name: 'Smoked Salmon', price: '$14.00'},
      {name: 'Kofta Burger', price: '$11.00'},
      {name: 'Turkish Kebab', price: '$15.50'},
    ],
  },
  {
    title: 'Sides',
    data: [
      {name: 'Fries', price: '$3.00', id: '11K'},
      {name: 'Buttered Rice', price: '$3.00'},
      {name: 'Bread Sticks', price: '$3.00'},
      {name: 'Pita Pocket', price: '$3.00'},
      {name: 'Lentil Soup', price: '$3.75'},
      {name: 'Greek Salad', price: '$6.00'},
      {name: 'Rice Pilaf', price: '$4.00'},
    ],
  },
  {
    title: 'Desserts',
    data: [
      {name: 'Baklava', price: '$3.00'},
      {name: 'Tartufo', price: '$3.00'},
      {name: 'Tiramisu', price: '$5.00'},
      {name: 'Panna Cotta', price: '$5.00'},
    ],
  },
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

const SectionListData = () => {
  const renderItem = ({item}) => <Item name={item.name} price={item.price} />;

  const headerData = ({section: {title}}) => {
    return (
      <View style={{backgroundColor: 'green', padding: 10}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>
          {title}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <Text
        style={{
          backgroundColor: 'blue',
          color: 'white',
          textAlign: 'center',
          padding: 15,
        }}>
        This is SectionList Component
      </Text>
      <SectionList
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        // keyExtractor={item => item.id}
        ItemSeparatorComponent={separator}
        renderSectionHeader={headerData}
      />
    </ScrollView>
  );
};

export default SectionListData;
