import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [data, setData] = useState([
    {
      id: '1',
      nama: 'Baut M10',
      status: 'lolos',
      image: 'https://kpssteel.com/storage/2022/10/perbedaan-baut-dan-sekrup-KPS-Steel-distributor-besi-jakarta.jpg'
    },
    {
      id: '2',
      nama: 'Oli Mesin',
      status: 'lolos',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiDaVMdlARI8XivDNXGPQBiEkhqWqKuBvTXw&s'
    },
    {
      id: '3',
      nama: 'Gearbox',
      status: 'lolos',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZE7xueCbSs4nhXjsA6gbp1j9nWTpeYZcCw&s'
    },
    {
      id: '4',
      nama: 'Mur Ring',
      status: 'lolos',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsP14C4XpkhgVdFou-u8eP8qYkiapuh2AKw&s'
    },
  ]);

  const updateStatus = (id, newStatus) => {
    const updated = data.map(item =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setData(updated);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen {...props} data={data} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Detail">
          {(props) => (
            <DetailScreen {...props} updateStatus={updateStatus} />
          )}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}