import React, { Component } from "react";
import { Content, Input, Item, Label, Text, Left, View } from "native-base";
import { Alert, Image, Dimensions, TextInput } from "react-native";
import strings from "../resources/strings";
import PropTypes from "prop-types";
import * as Immutable from "../../node_modules/immutable/dist/immutable";
import ImmutableComponent from "./ImmutableComponent";
import email_icon from '../assets/icons/email_icon.png'
import man_icon from '../assets/icons/man_icon.png'
import password_icon from '../assets/icons/password_icon.png'
import colors from "../resources/colors";


const { width, height } = Dimensions.get('window');


export default class CustomTextInput extends ImmutableComponent {

    constructor(props: {}) {
        super(props);
        this.state = {
            data: Immutable.Map({
                error: "",
                showDefaultValue: true,
            })
        };
    }
    getIcon() {
        switch (this.props.label) {
            case 'email':
                return email_icon;
                break;
            case 'password':
                return password_icon;
                break;
            case 'name':
                return man_icon;
                break;
            default:
                return man_icon;
                break;
        }
    }
    render() {
        return (
            <View
                shouldRasterizeIOS
                renderToHardwareTextureAndroid
                style={styles.containerStyle}>

                <Image source={this.getIcon()}
                    style={styles.iconstyle} />
                <Input
                    style={styles.inputStyle}
                    onChangeText={this.handleTextChange}
                    secureTextEntry={this.props.secureTextEntry}
                    placeholder={this.props.placeholder}
                    placeholderTextColor='#aaaaaa'
                />
            </View>
        );
    }
    alertShow(text) {
        // Alert.alert(text);
    }
    handleTextChange = (text: string) => {
        if (this.props.onChangeText) {
            this.props.onChangeText(text);
        }
    };
}

const styles = {
    containerStyle: {
        // flex: 1,
        flexDirection: 'row',
        borderColor: '#888888',
        borderRadius: 15,
        borderWidth: 2,
        width: width * 17 / 20,
        // height: height * 3 / 40,
        // justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: height / 40,
        paddingLeft: 0,
        paddingRight: 0,
    },
    inputStyle: {
        marginLeft: width / 20,
        height: height / 40 * 3,
        color: 'white',
        paddingBottom: 0,
        paddingTop: 0,
    },
    iconstyle: {
        width: width / 20,
        height: width / 20,
        marginLeft: width / 20,
        resizeMode: 'contain',
        tintColor: colors.backColor
    }
};

CustomTextInput.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    defaultValue: PropTypes.string
};