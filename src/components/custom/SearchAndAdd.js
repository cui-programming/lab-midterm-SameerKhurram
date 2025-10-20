import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from '../ui'; // ✅ use only UI components
import { styles } from '../../styles/styles';

/**
 * Custom/SearchAndAdd
 * Students implement:
 *  - a text box to add a new zikr (phrase only, count starts at 0)
 *  - a search box to filter existing azkaar by phrase
 *  - use only components from 'ui' for inputs and buttons
 *  - lifting state up if needed
 */

// Task 1: a text box to add a new zikr (phrase only, count starts at 0)
export default function SearchAndAdd() {
  const [searchText, setSearchText] = useState('');
  const [newPhrase, setNewPhrase] = useState('');
  const [azkaar, setAzkaar] = useState([
    { id: '1', phrase: 'SubhanAllah', count: 0 },
    { id: '2', phrase: 'Alhamdulillah', count: 0 },
    { id: '3', phrase: 'Allahu Akbar', count: 0 },
  ]);
}

// Task 2: a search box to filter existing azkaar by phrase
  const filteredAzkaar = azkaar.filter((item) =>
    item.phrase.toLowerCase().includes(searchText.toLowerCase())
  );
  
// Task 3: Add new zikr
  const handleAdd = () => {
    if (newPhrase.trim() === '') return;
    const exists = azkaar.some(
      (item) => item.phrase.toLowerCase() === newPhrase.toLowerCase()
    );
    if (!exists) {
      const newItem = {
        id: Date.now().toString(),
        phrase: newPhrase,
        count: 0,
      };
      setAzkaar([...azkaar, newItem]);
      setNewPhrase('');
    }
  };


export default function SearchAndAdd() {
  return (
    <View style={styles.section}>
      {/* TODO: Implement search and add UI here using ui/TextInput and ui/Button */}
      <Text style={styles.sectionTitle}>Search & Add Zikr</Text>

      {/* Search Box */}
      <TextInput
        placeholder="Search Zikr..."
        value={searchText}
        onChangeText={setSearchText}
        style={styles.input}
      />

      {/* Add Box */}
      <TextInput
        placeholder="Add New Zikr..."
        value={newPhrase}
        onChangeText={setNewPhrase}
        style={styles.input}
      />

      <Button title="Add" onPress={handleAdd} />

      {/* Filtered Results */}
      <View style={{ marginTop: 10 }}>
        {filteredAzkaar.map((item) => (
          <Text key={item.id} style={styles.itemName}>
            {item.phrase} ({item.count})
          </Text>
        ))}
      </View>
    </View>
  );
}
