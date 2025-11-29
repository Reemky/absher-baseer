import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
	function getIconColor(focused: boolean) {
		return { color: focused ? '#01664F' : '#A8A8A8' };
	}

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#0E0E0E',
				tabBarInactiveTintColor: '#A8A8A8',
				headerShown: false,
				tabBarButton: HapticTab,
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: 'الرئيسية',
					tabBarIcon: ({ focused }) => (
						<MaterialCommunityIcons
							name='home'
							size={28}
							{...getIconColor(focused)}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='my-services'
				options={{
					title: 'خدماتي',
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name='person-outline'
							size={22}
							{...getIconColor(focused)}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='other-services'
				options={{
					title: 'خدمات أخرى',
					tabBarIcon: ({ focused }) => (
						<Ionicons name='list' size={28} {...getIconColor(focused)} />
					),
				}}
			/>
		</Tabs>
	);
}
