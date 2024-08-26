import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NativeRouter } from 'react-router-native';
import StackNavigator_js from './client/stacknavigtor';






export default function App()   {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <NativeRouter>
        
      <BottomSheetModalProvider>
        <StackNavigator_js/>
        </BottomSheetModalProvider>
      </NativeRouter>
      


    </GestureHandlerRootView>
    
  );
}

