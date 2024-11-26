import React, {useState} from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';
import {datasource} from './Data.js';

const Edit = ({navigation, route}) => {
    const [name, setName] = useState(route.params.key);
    const [number, setNumber] = useState(route.params.id.toString());

    return(
        <View style={{marginTop: 50, padding: 10}}>
            {/*Guideline for users*/}
            <View style={{backgroundColor: 'gray', padding: 10}}>
                <Text>Tip: use  <Text style={{textDecorationLine: 'underline', color: 'blue'}}>https://tcg.pokemon.com/en-us/galleries/151/</Text> to find Pokemon IDs through their cards. e.g. Mankey is 56.</Text>
            </View>

            <View style={{padding: 10}}>
                <Text>Name of Pokemon:</Text>
                <TextInput style={{borderWidth: 1}} value={name} onChangeText={(text) => setName(text)} />
            </View>

            <View style={{padding: 10}}>
                <Text>ID Number of Pokemon:</Text>
                <TextInput style={{borderWidth: 1}} value={number} onChangeText={(text) => setNumber(text)} keyboardType="numeric" />
                <Text style={{color:'gray'}}>Disclaimer: An invalid ID will result in no images rendered.</Text>
            </View>


            <View style={{flexDirection: 'row', padding: 10, justifyContent: 'space-around', gap: 10}}>
                <View style={{flex: 1}}>
                    <Button title="Save"
                            onPress={() => {
                                let indexnum = 1
                                if (route.params.type === "FIGHTING") {
                                    indexnum = 0;
                                }
                                datasource[indexnum].data[route.params.index].name = name;
                                datasource[indexnum].data[route.params.index].number = number;
                                navigation.navigate("Home");
                            }
                            }
                    />
                </View>

                <View style={{flex: 1}}>
                    <Button title="Delete"
                            onPress={() => {
                                let indexnum = 1
                                if (route.params.type === "FIGHTING") {
                                    indexnum = 0;
                                }
                                Alert.alert("Are you sure?", '',
                                    [{text: 'Yes', onPress: () => {
                                            datasource[indexnum].data.splice(route.params.index, 1);
                                            navigation.navigate("Home");
                                        }},
                                        {text: 'No'}])
                            }
                            }
                    />
                </View>

            </View>
        </View>
    );
};

export default Edit;
