import React from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import { height, width } from '../utils/pokemon.utils';

export default function Header({ isEnabled, toggleSwitch }) {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Text style={styles.text}>Comfortable</Text>
				<Switch
					style={styles.switch}
					trackColor={{ false: '#BBC7DA', true: '#BBC7DA' }}
					thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
					ios_backgroundColor="#3e3e3e"
					value={isEnabled}
					onValueChange={() => {
						toggleSwitch();
					}}
				/>
				<Text style={styles.text}>Compact</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: height * 0.2,
		backgroundColor: '#d3d3d3',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		width: width
	},
	text: {
		fontSize: height * 0.12 / 5
	},
	switch: {
		transform: [ { scaleX: 1.3 }, { scaleY: 1.3 } ]
	}
});
