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
import Officer from '../screens/margee/IT/Officer';
import Afrahim from '../screens/margee/IT/Officers/Afrahim';
import Finance from '../screens/margee/Finance/Finance';
import Expectations from '../screens/feedback/Expectations';

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

        <Stack.Screen 
          name="Officers" 
          component={Officer} 
          options={{headerShown:false}}
        />

        <Stack.Screen 
          name="Afrahim" 
          component={Afrahim} 
          options={{headerShown:false}}
        />

        <Stack.Screen 
          name="Finance" 
          component={Finance} 
          options={{headerShown:false}}
        />

        <Stack.Screen 
          name="Expectations" 
          component={Expectations} 
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    
  );
};

export default AppNavigator;
