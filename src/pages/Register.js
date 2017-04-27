import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	ScrollView
} from 'react-native';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';
import Home from './Home';

var radio_props = [
  {label: 'English', value: 1 },
  {label: 'Russian', value: 0 },
  {label: 'Armenian', value: 0 }
];
export default class Register extends Component {

	constructor() {
		super()
		this.state = {value: 0}
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
          <Label text="Choose your language" />
          <RadioForm
            radio_props={radio_props}
            initial={0}
            onPress={(value) => {this.setState({value:value})}}
          />
        </Container>
        <Container>
          <Label text="Name" />
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholder="Name"
          />
          <Label text="Surname" />
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholder="Surname"
          />
        </Container>
          
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