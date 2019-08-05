import React, { Component } from "react";
import { Alert, Image, TouchableOpacity, Text, Dimensions, AsyncStorage, TextInput } from "react-native";
import { Button, Container, Content, Spinner, View } from "native-base";
import colors from "../resources/colors";
import { connect } from "react-redux";
import consts from "../const";
import dimens from "../resources/dimens";
import strings from "../resources/strings";
import * as loginActions from "../actions/login-actions";
import * as rootActions from "../actions/root-actions";
import background from '../assets/background.png'
import full_star_icon from '../assets/icons/full_star_icon.png'
import empty_star_icon from '../assets/icons/empty_star_icon.png'
import go_icon from '../assets/icons/go_icon.png'
import photo from '../assets/profile_photo.jpg'
import logo from '../assets/logo.png'
import Orientation from 'react-native-orientation';
import CustomTextInput from "./CustomTextInput";
import Header from "./SimpleHeader";
import LeftSideMenu from "./LeftSideMenu";
const { width, height } = Dimensions.get('window');
// const window = Dimensions.get('window')
// console.ignoredYellowBox = true;
console.ignoredYellowBox = ['Warning:'];
export class Profile extends Component {

    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            isGoneAlready: false,
            dummy: false
        }
        this.getKey();
    }

    componentDidMount() {
        Orientation.lockToPortrait();
        this.props.dispatch(rootActions.controlProgress(false))
    }

    componentWillMount() {
    }
    componentDidUpdate() {
        this.proceed()
    }
    async getKey() {
    }
    proceed() {
    }

    isObject(obj) {
        return typeof obj === 'object';
    }

    // noinspection JSMethodCanBeStatic
    setEmail(text) {
        this.setState({ email: text });
    }
    setPassword(text) {
        this.setState({ password: text });
    }
    validateEmail = (text: string): boolean => consts.EMAIL_REGEX.test(text);

    validatePassword = (text: string): boolean => text.length >= consts.MIN_PASSWORD_LENGTH;

    render() {
        return (
            <Content contentContainerStyle={Styles.contentStyle}>
                <Image style={Styles.photo}
                    source={photo} />
                <View style={Styles.itemRow}>
                    <Text style={Styles.itemName}>First Name: </Text>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder={"John"}
                        style={Styles.itemContent} />
                </View>
                <View style={Styles.itemRow}>
                    <Text style={Styles.itemName}>Last Name: </Text>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder={"Doe"}
                        style={Styles.itemContent} />
                </View>
                <View style={Styles.itemRow}>
                    <Text style={Styles.itemName}>Email: </Text>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder={"example@mail.com"}
                        style={Styles.itemContent} />
                </View>
                <View style={Styles.itemRow}>
                    <Text style={Styles.itemName}>NSP ID: </Text>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder={"123456"}
                        style={Styles.itemContent} />
                </View>
                <View style={Styles.itemRow}>
                    <Text style={Styles.itemName}>Patrol: </Text>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder={"Zurich"}
                        style={Styles.itemContent} />
                </View>
                <TouchableOpacity
                    style={Styles.btn}>
                    <Text style={Styles.btnText}>Save</Text>
                </TouchableOpacity>
            </Content>
        );
    }

    onPressSignup = () => {
        this.props.navigation.navigate(consts.SIGNUP_SCREEN);
    }
    onPressback = () => {
        // this.setState({ onLeftSideMenu: true })
        this.props.navigation.pop();
    }
    hideLeftMenu = () => {
        this.setState({ onLeftSideMenu: false });
    }
}


const Styles = {
    contentStyle: {
        padding: width / 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    photo: {
        width: width / 2.5,
        height: width / 2.5,
        borderRadius: width / 5,
        resizeMode: 'cover',
        alignSelf: 'center'
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: width / 5 * 4,
        marginTop: height / 40
    },
    itemName: {
        color: 'white'
    },
    itemContent: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        paddingTop: 0,
        paddingBottom: 0,
        width: width / 2,
        color: 'white',
        textAlign: 'center'
    },
    btn: {
        marginTop: height / 10,
        width: width / 20 * 17,
        borderRadius: 15,
        height: height / 40 * 3,
        backgroundColor: colors.firstColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: dimens.btn
    },
};

const mapStateToProps = (state) => ({
    Portfolio: state.get('portfolio'),
    root: state.get('root'),
});

export default connect(mapStateToProps)(Profile)