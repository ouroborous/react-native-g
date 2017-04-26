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
import Login from './Login';

export default class Home extends Component {
	
	constructor(props) {
		super(props);
		
		this.navigate = this.navigate.bind(this)
	}

	navigate(name) {
		this.props.navigator.push({name})
	}
	
	render () {
		
		return (
			<View style={styles.content}>
					<Container>
						<Button
							label="LOG IN"
							styles={{button: styles.whiteBorder, label: styles.buttonWhiteText}}
							onPress={() => {this.navigate('loginPage')}} />
					</Container>
					<Container>
						<Button
							label="REGISTER"
							styles={{button: styles.whiteBorder, label: styles.buttonWhiteText}}
							onPress={() => {this.navigate('registerPage')}} />
					</Container>
					<Container>
						<Button
							label="CONTACT US"
							styles={{button: styles.whiteBorder, label: styles.buttonWhiteText}}
							onPress={() => {this.navigate('contactPage')}} />
					</Container>
					<Container>
						<Button
							label="ABOUT COACH!ME"
							styles={{button: styles.whiteBorder, label: styles.buttonWhiteText}}
							onPress={() => {this.navigate('aboutPage')}} />
					</Container>
				</View>	
		);
		
	}
}	

const styles = StyleSheet.create({
	content: {
		marginTop: 50
	},
	buttonWhiteText: {
		fontSize: 20,
		color: '#CCC'
	},
	whiteBorder: {
		borderColor : '#CCC',
		borderWidth: 1,
		borderStyle: 'solid'
	}
});