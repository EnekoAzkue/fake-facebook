import 'react-native-gesture-handler'


import Home from './screens/Home'
import Notifications from './screens/Notifications'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'




const Tab = createMaterialTopTabNavigator()

const App = () => {
  return (
    <>
    <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
    />
    <ScrollView>
        <Header />
    </ScrollView>
    <NavigationContainer>
        <Tab.Navigator
            swipeEnabled='true'
            tabBarOptions={{
                showIcon: true,
                showLabel: false,
                activeTintColor: '#3a86e9',
                inactiveTintColor: '#9F9F9F',
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') iconName = 'home'
                    else if(route.name === 'Friends') iconName = 'account-multiple-outline'
                    else if(route.name === 'Groups') iconName = 'account-group'
                    else if(route.name === 'Profile') iconName = 'account-circle-outline'
                    else if(route.name === 'Notifications') iconName = 'bell-outline'
                    else if(route.name === 'Menu') iconName = 'menu'
                    return <MaterialCommunityIcons name={iconName} size={26} color= {color} />;
                },   
            })}
        >
        <Tab.Screen name="Home" component={Home} />    
        <Tab.Screen name="Friends" component={Friends} />    
        <Tab.Screen name="Groups" component={Groups} />    
        <Tab.Screen name="Profile" component={Profile} />    
        <Tab.Screen name="Notifications" component={Notifications} />    
        <Tab.Screen name="Menu" component={Menu} />    
        </Tab.Navigator>
    </NavigationContainer>
    </>
    
  )
}




export default App