import React from 'react';
import {
    View,
    SectionList,
    Button,
    Image,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome6";
import {datasource} from "./Data";

const styles = StyleSheet.create({
    pokemonContainer: {
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,

    },
    categoryContainer: {
        flexDirection:'row',
        borderWidth: 1,
        justifyContent: 'center',
        padding: 10,
    }
});


const Home = ({navigation}) => {
    const renderItem = ({item, index, section}) => {
        let imageLink = "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_" + item.number + "-2x.png"
        return (
            <TouchableOpacity
                onPress={() => {
                    // to successfully pass in all details to use in Edit.js, index of the item, section e.g. "FIGHTING", name, number
                    navigation.navigate("Edit", {index:index, type:section.title, key:item.name, id:item.number });}
                }
            >
                <View style={[styles.pokemonContainer, {backgroundColor: "lightblue"}]}>
                    <View style={{padding: 50}}>
                        <Text style={{fontWeight: "bold"}}>{item.name}</Text>
                    </View>
                    <View style={{paddingLeft: 50, paddingRight: 50}}>
                        <Image source={{uri: imageLink}} style={{width: 150, height: 210}} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <View style={{marginBottom: 50}}>
            <StatusBar hidden={true} />
            <View style={{padding: 10, borderBottomWidth: 1}}>
                <Button title="Add Pokemon" onPress={() => {navigation.navigate("Add")}} />
            </View>

            {/*iconname, fontcolor, bgcolor, title were specified in the datasource to allow for more versatility and dynamic*/}
            <SectionList style={{padding: 10, marginBottom: 50}} sections={datasource} renderItem={renderItem} renderSectionHeader={ ({section: {title, bgColor, iconName, fontColor}}) => (
                <View style={[styles.categoryContainer, {backgroundColor: bgColor}]}>
                    <Icon name={iconName} size={15} color='gray' style={{paddingRight: 5, marginTop: 2}} />
                    <Text style={{color: fontColor}}>{title}</Text>
                </View>
            )}/>

        </View>
    );
};

export default Home;
