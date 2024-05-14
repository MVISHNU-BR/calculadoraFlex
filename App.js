import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import UserPovider from './src/contexts/UserContexts';
import Route from './src/Navigaions/Route';

const App = () => {

  return (
    <UserPovider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </UserPovider>
  )

}
export default App;
