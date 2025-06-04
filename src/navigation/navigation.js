import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screen
import Home from '../screens/home/Home';
import Dashboard from '../screens/Dashboard';
import Marqee from '../screens/margee/Marqee';
import InformationTech from '../screens/margee/IT/InformationTech';
import Feedback from '../screens/feedback/Feedback';
import PostAnalysis from '../screens/feedback/postAnalysis/PostAnalysis';
import Events from '../screens/feedback/postAnalysis/Events';
import Professional from '../screens/margee/IT/Professional';
import Social from '../screens/margee/Social/Social';
import Personalities from '../screens/margee/Social/Personalities';
import AddPerson from '../screens/margee/Social/AddPersons';
import PersonDetails from '../screens/margee/Social/PersonDetails';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
        options={{headerShown:false}}
          
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Home Page' }} 
        />

        <Stack.Screen 
          name="Marqee" 
          component={Marqee} 
          options={{headerShown:false}}
        />

        <Stack.Screen 
          name="Information" 
          component={InformationTech} 
          options={{headerShown:true}}
        />

        <Stack.Screen 
          name="Feedback" 
          component={Feedback} 
          options={{headerShown:true}}
        />
        <Stack.Screen 
          name="Postanalysis" 
          component={PostAnalysis} 
          options={{headerShown:false}}
        />

        <Stack.Screen 
          name="Events" 
          component={Events} 
          options={{headerShown:false}}
        />

        <Stack.Screen 
          name="Professional" 
          component={Professional} 
          options={{headerShown:false}}
        />

        <Stack.Screen 
          name="Social" 
          component={Social} 
          options={{headerShown:false}}
        />

        <Stack.Screen 
          name="Persons" 
          component={Personalities} 
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="AddPerson" 
          component={AddPerson} 
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="PersonDetail" 
          component={PersonDetails} 
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    
  );
};

export default AppNavigator;
