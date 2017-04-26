import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	ScrollView
} from 'react-native';

import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';
import Home from './Home';


export default class Register extends Component {

	constructor() {
		super()
		
	}

	press() {}

	render() {
		return (
			
			<ScrollView style={styles.scroll}>

				<Button
					onPress={() => {this.props.navigator.pop()}} 
					styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
					label="Back"
					/>

				<Container>
					<Label text="Username or Email" />
					<TextInput style={styles.textInput} />
				</Container>
				<Container>
					<Label text="Password" />
					<TextInput
						secureTextEntry={true}
						style={styles.textInput}
					/>
				</Container>
				<View style={styles.footer}>
					<Container>
						<Button
							label="Register"
							styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
							onPress={this.press.bind(this)} />
					</Container>
				</View>
			</ScrollView>

		);
	}
}

const styles = StyleSheet.create({
	scroll: {
	    backgroundColor: '#E1D7D8',
	    padding: 30,
	    flexDirection: 'column'
	},
	label: {
		color: '#0d8898',
		fontSize: 20
	},
	alignRight: {
		alignSelf: 'flex-end'
	},
	textInput: {
		height: 80,
		fontSize: 30,
		backgroundColor: '#FFF'
	},
	buttonWhiteText: {
		fontSize: 20,
		color: '#FFF'
	},
	buttonBlackText: {
		fontSize: 20,
		color: '#595856'
	},
	primaryButton: {
		backgroundColor: '#34A853'
	},
	footer: {
		marginTop: 100
	}
});