import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Pokemon from '../pages/Pokemon';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    initialRouteName="Dashboard"
    screenOptions={{
      headerShown: false,
    }}>
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="Pokemon" component={Pokemon} />
  </App.Navigator>
);

export default AppRoutes;
