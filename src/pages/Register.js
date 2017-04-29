import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	ScrollView,
  Picker
} from 'react-native';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';
import Home from './Home';

var radio_props = [
  {label: 'English', value: 1 },
  {label: 'Russian', value: 2 },
  {label: 'Armenian', value: 3 }
];
export default class Register extends Component {

	constructor(props) {
		super(props)
		this.state = {
      name: '',
      surname: '',
      ProfilePicURL: '',
      email: '',
      phone: '',
      genderID: 1,
      username: '',
      password: '',
      password_confirm: '',
      languageID: 1,
      errors: ''

      // mode: Picker.MODE_DIALOG
    }

	}

  onValueChange(key, value) {
    const newState = {}; 
    newState[key] = value;
    this.setState(newState);
  }

	async onRegisterPressed() {

    try {
  
      let response = await fetch('http://192.168.137.1/gym/request/Auth.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            method: 'registration',
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            phoneNumber: this.state.phone,
            genderID: this.state.genderID,
            username: this.state.username,
            passcode: this.state.password,
            password_confirm: this.state.password_confirm,
            languageID: this.state.languageID
                    
        })
      });

      let res = await response.text();

      if (res.result === 1) {
        console.log('res success is: ' + res.message)
      } else {

        let formErrors = JSON.parse(res)
        
        this.setState({errors: formErrors.message})

      }
    } catch(errors) {
      console.log('catch errors: ' + errors)
      
    }
  }

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
            onPress={(val) => {this.setState({languageID: val})}}
          />
        </Container>
        <Container>
          <Label text="Name" />
          <TextInput
            onChangeText={(val) => this.setState({name: val})}
            style={styles.textInput}
            placeholder="Name"
          />
          <Label text="Surname" />
          <TextInput
            onChangeText={(val) => this.setState({surname: val})}
            style={styles.textInput}
            placeholder="Surname"
          />
        </Container>

        <Container>
          <Picker 
            selectedValue={this.state.genderID}
            onValueChange={(lang) => this.setState({genderID: lang})}
            mode="dropdown"
          > 
              <Picker.Item label="Male" value="1" />
              <Picker.Item label="Female" value="2" /> 
          </Picker>
        </Container>

        <Container>
          <Label text="Phone" />
          <TextInput
            onChangeText={(val) => this.setState({phone: val})}
            style={styles.textInput}
            placeholder="+374"
          />
        </Container>
        <Container>
          <Label text="Email address" />
          <TextInput
            onChangeText={(val) => this.setState({email: val})}
            style={styles.textInput}
            placeholder="name@domain.com"
          />
        </Container>
        <Container>
          <Label text="Username" />
          <TextInput
            onChangeText={(val) => this.setState({username: val})}
            style={styles.textInput}
            placeholder="username"
          />
        </Container>
        <Container>
          <Label text="Password" />
          <TextInput
            onChangeText={(val) => this.setState({password: val})}
            secureTextEntry={true}
            style={styles.textInput}
          />
           <TextInput
            onChangeText={(val) => this.setState({password_confirm: val})}
            secureTextEntry={true}
            style={styles.textInput}
          />

        </Container>
        <Container>
          <Button
            label="Register"
            styles={{label: styles.buttonBlackText}}
            onPress={this.onRegisterPressed.bind(this)} />
        </Container>
        <Container>
          <Errors errors={this.state.errors} />
        </Container>
        
			</ScrollView>


		);
	}
}


const Errors = (props) => {
  return (
    <View>
      <Text style={styles.error}>{props.errors}</Text>
    </View>
  ) 
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
	},
  
  error: {
    color: '#FFF',
    backgroundColor: 'red',
    marginTop: 100
  }
});