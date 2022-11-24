import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import Slider from '@react-native-community/slider';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Switch,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      limite: 0,
      genero: 'masculino',
      estudante: false,
    }
  }
  // Submit
  submit(nome, idade, limite, genero, estudante) {
    if (nome == null || nome == '') {
      alert('Não pode deixar campos em branco!');
    }
    if (this.state.estudante == true || this.state.estudante === true ){
      this.state.estudante='sim';
    }
    if (this.state.estudante == false || this.state.estudante === false ){
      this.state.estudante='não';
    }
    else {
      alert(`
      Olá ${nome}, 
      Sua Idade é: ${idade} Anos. 
      Você tem R$ ${limite}, 
      Seu Genero: ${genero}, 
      Você é estudante? ${estudante}`)
    }
  }

  render() {
    return (
      <ScrollView style={{ marginTop: 40 }}>
        <View style={styles.container}>
          <Text style={styles.bank}>BANK REACT NATIVE</Text>
          {/* TextInput */}
          <View>
            <Text style={{ fontSize: 20, padding: 5 }}>Digite seu nome:</Text>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
              <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Digite seu nome"
                autoCapitalize="none"
                onChangeText={(nome) => this.setState({ nome: nome })} />
            </KeyboardAvoidingView>

            <Text style={{ fontSize: 20, padding: 5 }}>Digite sua idade: </Text>
            <KeyboardAvoidingView behavior="padding">
              <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Digite sua idade"
                autoCapitalize="none"
                onChangeText={(idade) => this.setState({ idade: idade })} />
            </KeyboardAvoidingView>
          </View>
          {/* TextInput */}

          {/* Slider */}
          <View>
            <Slider
              style={{ width: 250, height: 50, }}
              minimumTrackTintColor='#7a42f4'
              minimumValue={0}
              maximumValue={1000}
              step={1}
              value={this.state.limite}
              onValueChange={value => this.setState({ limite: value })}
            />
            <Text style={{ fontSize: 20, padding: 5 }}>Limite: {this.state.limite.toFixed(2)}</Text>
          </View>
          {/* Slider */}

          {/* Picker */}
          <View>
            <Text style={{ fontSize: 20, padding: 5, marginBottom: 20 }}>Selecione seu genero:</Text>
            <Picker
              style={{ width: 250, height: 50, marginTop: -40, marginBottom: 160, padding: 10 }}
              selectedValue={this.state.genero}
              onValueChange={(value) => this.setState({ genero : value })}>
              <Picker.Item label="masculino" value="masculino" />
              <Picker.Item label="Feminino" value="Feminino" />
              <Picker.Item label="Prefiro não responder" value="Prefiro não responder" />
            </Picker>
          </View>
          {/* Picker */}

          {/* Switch */}
          <View style={{ alignItems: 'center', flexDirection: 'row', padding: 10, margin: 5}}>
            <Text style={{ fontSize: 20, padding: 5, }}>Você é estudante?</Text>
            <Switch
              value={this.state.estudante}
              onValueChange={estudante => this.setState({ estudante })}
              trackColor={{ false: "#767577", true: "#7a42f4" }}
              thumbColor={false ? "#7a42f4" : "#FFF"}
            />
            <Text> {(this.state.estudante) ? 'sim' : 'não'} </Text>
          </View>
          {/* Switch */}

          <TouchableOpacity style={styles.btnSubmit} onPress={() => this.submit(this.state.nome, this.state.idade, this.state.limite.toFixed(2), this.state.genero, this.state.estudante)}>
            <Text style={{ color: '#FFF', fontSize: 20 }}>Enviar</Text>
          </TouchableOpacity>

          {/* card view debbug */}
          {/* <Text> {this.state.nome} </Text>
          <Text> {this.state.idade} </Text> */}
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bank: {
    fontSize: 35,
    fontWeight: "bold",
    color: '#7a42f4',
    padding: 5,
  },
  input: {
    margin: 5,
    width: 250,
    padding: 5,
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#7a42f4',
    fontSize: 20
  },
  btnSubmit: {
    backgroundColor: '#7a42f4',
    padding: 5,
    margin: 15,
    width: 250,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
