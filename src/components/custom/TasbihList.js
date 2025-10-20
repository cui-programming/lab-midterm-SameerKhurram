import React, { useState } from 'react';
import { View, FlatList, Text } from '../ui'; // You may switch Text to ui/Text later -- (Done)
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';

/**
 * Custom/TasbihList
 * Renders a FlatList of azkaar with their counts.
 * NOTE: Increment/Decrement buttons are intentionally NOT implemented.
 * Students will add + and - controls using UI/Button and update state accordingly.
 */
export default function TasbihList() {
  const [items, setItems] = useState(initialAzkaar);

  // HINT ONLY (do not complete): you will need handlers like increment(id) / decrement(id) -- (Done)
  
  function increment(id) {
    const updated = items.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setItems(updated);
  }

  function decrement(id) {
    const updated = items.map(item =>
      item.id === id && item.count > 0 ? { ...item, count: item.count - 1 } : item
    );
    setItems(updated);
  }

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      <Text style={styles.counter}>{item.count}</Text>
      {/* TODO: Add increment/decrement buttons here using ui/Button */} -- (Done)
      
      <Button title="+" onPress={() => increment(item.id)} />
      <Button title="-" onPress={() => decrement(item.id)} />
    
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      <FlatList
        data={items}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
      />
    </View>
  );
}
