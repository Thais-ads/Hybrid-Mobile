import React, { Component } from 'react';

import {
  Plataform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  Switch
} from 'react-native';

const img =
  'https://th.bing.com/th/id/R.b8dfcb80a97d8327cacd1148c9bc5ab7?rik=QfKjZpz6Yem%2bIQ&pid=ImgRaw&r=0';




export default class App extends React.Component {


  state={isEnabled:false}
  render() {
    return (
      <View>
        <Text style={{ textSize: 50 }}>Login</Text>
        <TextInput
          placeholder=" Seu Login"
          style={{
            borderColor: '#000',
            borderWidth: 1,
            paddingHorizontal: 16,
          }}
        />

        <TextInput
          KeyboardType="numeric"
          placeholder=" Senha"
          style={{
            borderColor: '#000',
            borderWidth: 1,
            paddingHorizontal: 16,
          }}
        />

        <Button
          title="Logar"
          onPress={(_) => alert('Voce clicou')}
          color="#000"
        />

        <Image
          source={{
            uri: img,
          }}
          style={{ width: 200, height: 200, alignSelf: 'center' }}
        />
         <Switch
      value={this.state.isEnabled}
      onValueChange={_=>this.setState({isEnabled: !this.state.isEnabled})}/>



      </View>

     
      
    );
  }
}
