import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import Ionicons from '@expo/vector-icons/Ionicons';

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
				name='explore'
				options={{
					title: 'Explore',
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name='settings-outline'
							size={28}
							{...getIconColor(focused)}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name='test1'
				options={{
					title: 'test1',
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name='people-circle-outline'
							size={28}
							{...getIconColor(focused)}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='test2'
				options={{
					title: 'test2',
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name='people-outline'
							size={28}
							{...getIconColor(focused)}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='test3'
				options={{
					title: 'test3',
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name='person-outline'
							size={28}
							{...getIconColor(focused)}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					tabBarIcon: ({ focused }) => (
						<Ionicons name='home' size={28} {...getIconColor(focused)} />
					),
				}}
			/>
		</Tabs>
	);
}
