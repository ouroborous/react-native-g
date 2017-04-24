import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	ScrollView,
	BackAndroid,
	Navigator
} from 'react-native';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';

export default class Login extends Component {

	constructor(props) {
		super(props)
		this.navigator = null;
		
	}
	
	handleBack() {
		if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
		    this.navigator.pop()
		    return true // do not exit app
		} 
		return false // exit app
	}

	componentDidMount(){
		BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
	
	}
	

	press() {}

	render() {
		return (
			
			<ScrollView style={styles.scroll}>
			<Navigator ref={navigator => {this.navigator = navigator}} />
				<Container>
					<Button 
						label="Forgot Login/Pass"
						styles={{button: styles.alignRight, label: styles.label}}
						onPress={this.press.bind(this)} />
				</Container>
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
							label="Sign In"
							styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
							onPress={this.press.bind(this)} />
					</Container>
					<Container>
						<Button
							label="CANCEL"
							styles={{label: styles.buttonBlackText}}
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