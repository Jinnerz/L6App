import React, {useState} from 'react';
import {datasource} from "./Data";
import {TextInput, View, Text, Button} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Add = ({navigation}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [type, setType] = useState('FIGHTING');

    return(
        <View style={{padding:10, marginTop: 50}}>
            {/*Guideline for users*/}
            <View style={{backgroundColor: 'gray', padding: 10}}>
                <Text>Tip: use  <Text style={{textDecorationLine: 'underline', color: 'blue'}}>https://tcg.pokemon.com/en-us/galleries/151/</Text> to find Pokemon IDs through their cards. e.g. Mankey is 56.</Text>
            </View>

            <View style={{padding:10}}>
                <Text style={{fontWeight: 'bold'}}>Name of Pokemon:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText={(text) => setName(text)}/>
            </View>

            <View style={{padding:10}}>
                <Text style={{fontWeight: 'bold'}}>ID Number of Pokemon:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText={(text) => setNumber(text)}/>
                <Text style={{color:'gray'}}>Disclaimer: An invalid ID will result in no images rendered.</Text>
            </View>

            <View style={{padding:10}}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        {label:"FIGHTING", value: 'FIGHTING'},
                        {label:"WATER", value: 'WATER'},
                    ]}
                />
            </View>

            <Button title="SUBMIT"
                    onPress={() => {
                        let newPokemon = {
                            name: name,
                            number: Number(number)
                        };

                        let indexnum = 1;
                        if (type === "FIGHTING") {
                            indexnum = 0;
                        }
                        datasource[indexnum].data.push(newPokemon);
                        navigation.navigate("Home");
                    }
            }
            />
        </View>
    );
};

export default Add;
