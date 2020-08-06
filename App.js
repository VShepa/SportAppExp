import { StatusBar } from 'expo-status-bar';
import React from 'react';
import NavigationScreen from './src/NavigationScreen';

export default function App() {
  return (
    <>
      <NavigationScreen />
      <StatusBar style="auto" />
    </>
  );
}