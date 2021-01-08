import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createSwitchNavigator } from '@react-navigation/compat'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Feed from './screens/Feed'
import Login from './screens/Login'
import MyBooks from './screens/MyBooks'
import Register from './screens/Register'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()



function authRouter() {
	return (
		<Stack.Navigator
			initialRouteName="Login"
			screenOptions={{ gestureEnabled: false }}
		>
			<Stack.Screen
				name="Login"
				component={Login}
				//options={{ title: 'Login' }}
			/>
			<Stack.Screen
				name="Register"
				component={Register}
				initialParams={{ user: 'Register' }}
			/>
		</Stack.Navigator>
	);
}

const loginOrProfileRouter = createSwitchNavigator({
	Profile: Profile,
	Auth: authRouter
}, {
	initialRouteName: 'Auth'
})

function Tabs() {

	return (

		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					switch (route.name) {
						case 'Feed':
							iconName = focused
								? 'home'
								: 'home-outline';
							break;
						case 'AddPhoto':
							iconName = focused
								? 'book'
								: 'book-outline';
							break;
						case 'Add':
							iconName = focused
								? 'person-add'
								: 'person-add-outline';
							break;
						case 'Profile':
							iconName = focused
								? 'person-add'
								: 'person-add-outline';
							break;
					}
					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
			}}
		>
			<Tab.Screen name='Feed' component={Feed} />
			<Tab.Screen name='AddPhoto' component={AddPhoto} />
			<Tab.Screen name='Profile' component={loginOrProfileRouter} />

		</Tab.Navigator>

	)
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="SolidaLivro"
					component={Tabs}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
