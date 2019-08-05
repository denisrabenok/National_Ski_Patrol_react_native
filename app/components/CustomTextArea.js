import React, { Component } from "react";
import { Content, Input, Item, Label, Text, Left, View, Textarea } from "native-base";
import { Alert, Image, Dimensions, TextInput } from "react-native";
import strings from "../resources/strings";
import PropTypes from "prop-types";
import * as Immutable from "../../node_modules/immutable/dist/immutable";
import ImmutableComponent from "./ImmutableComponent";
import unread_email_icon from '../assets/icons/unread_email_icon.png'
import man_icon from '../assets/icons/man_icon.png'
import password_icon from '../assets/icons/password_icon.png'


const { width, height } = Dimensions.get('window');


export default class CustomTextArea extends ImmutableComponent {

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

                <Image source={unread_email_icon}
                    style={styles.iconstyle} />
                <Textarea
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
        alignItems: 'flex-start',
        alignSelf: 'center',
        marginBottom: height / 40,
        paddingTop: width / 40,
        paddingBottom: width / 40,
        paddingLeft: 0,
        paddingRight: 0,
    },
    inputStyle: {
        marginLeft: width / 20,
        color: 'black',
        height: height / 5,
        width: width / 5 * 3,
        paddingBottom: 0,
        paddingTop: 0,
    },
    iconstyle: {
        width: width / 15,
        height: width / 15,
        marginLeft: width / 20,
        resizeMode: 'contain'
    }
};

CustomTextArea.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    defaultValue: PropTypes.string
};