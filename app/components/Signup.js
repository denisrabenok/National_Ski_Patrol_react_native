import React, { Component } from "react";
import { Alert, Image, StatusBar, Text, Dimensions, TouchableOpacity, AsyncStorage } from "react-native";
import { Button, Container, Content, Spinner, View } from "native-base";
import colors from "../resources/colors";
import { connect } from "react-redux";
import consts from "../const";
import dimens from "../resources/dimens";
import strings from "../resources/strings";
import * as loginActions from "../actions/login-actions";
import * as rootActions from "../actions/root-actions";
import background from '../assets/background.png'
import logo from '../assets/logo.png'
import Orientation from 'react-native-orientation';
import CustomTextInput from "./CustomTextInput";
const { width, height } = Dimensions.get('window');
// const window = Dimensions.get('window')
// console.ignoredYellowBox = true;
console.ignoredYellowBox = ['Warning:'];
export class Signup extends Component {

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
                <Image style={Styles.logo} source={logo} />
                <CustomTextInput
                    label="name"
                    onChangeText={(text) => this.setEmail(text)}
                    placeholder={strings.fullname}
                    secureTextEntry={false} />
                <CustomTextInput
                    label="name"
                    onChangeText={(text) => this.setEmail(text)}
                    placeholder={strings.nspId}
                    secureTextEntry={false} />
                <CustomTextInput
                    label="email"
                    onChangeText={(text) => this.setEmail(text)}
                    placeholder={strings.email}
                    secureTextEntry={false} />
                <CustomTextInput
                    label="password"
                    onChangeText={(text) => this.setEmail(text)}
                    placeholder={strings.password}
                    secureTextEntry={true} />
                <TouchableOpacity
                    style={Styles.btn}
                    onPress={this.onPressLogin}>
                    <Text style={Styles.btnText}>{strings.signup}</Text>
                </TouchableOpacity>
                <View style={Styles.desc}>
                    <Text style={Styles.descText}>{strings.already_have_an_account}</Text>
                    <TouchableOpacity style={Styles.descBtn} onPress={this.onPressSignin}>
                        <Text style={Styles.descBtnText}>{strings.signin}</Text>
                    </TouchableOpacity>
                </View>
            </Content>
        );
    }

    renderProgress() {
        if (this.props.root.get('progress')) {
            return this.spinner()
        } else {
            return null;
        }
    }

    spinner() {
        return (
            <Spinner
                color={colors.secondColor}
                animating={true}
                size={'large'}
                style={loginStyles.progressStyle} />
        )
    }

    validateEmail = (text: string): boolean => consts.EMAIL_REGEX.test(text);

    validatePassword = (text: string): boolean => text.length >= consts.MIN_PASSWORD_LENGTH;

    onLoginPress = () => {
        // this.setState({ isGoneAlready: false });
        // this.props.dispatch(loginActions.login(this.state.email, this.state.password));
        this.props.navigation.navigate(consts.SETUP_SCREEN);
    }
    onPressSignin = () => {
        // this.props.navigation.navigate(consts.LOGIN_SCREEN);
        this.props.setStack(3);
    }
}


const Styles = {
    containerStyle: {

        backgroundColor: '#ffffff'
    },
    contentStyle: {
        flex: 0,
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        // alignSelf: 'center',
        // marginHorizontal: dimens.margin_large
    },
    statusBarStyle: {
        // backgroundColor: colors.primaryColor
    },
    progressStyle: {
        position: 'absolute',
        top: height / 3,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    imageStyle: {
        position: 'absolute',
        top: 0,
        width: width,
        height: height,
        resizeMode: 'stretch',
    },
    logo: {
        width: width / 4 * 3,
        height: height / 5,
        marginTop: height / 18,
        marginBottom: height / 20,
        resizeMode: 'contain'
    },
    btn: {
        // marginTop: height / 40,
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
    desc: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: height / 40
    },
    descText: {
        fontSize: dimens.btn,
        color: 'white'
    },
    descBtn: {
        marginLeft: 10,
    },
    descBtnText: {
        color: colors.secondColor,
        fontSize: dimens.btn
    }
};

const mapStateToProps = (state) => ({
    Signup: state.get('signup'),
    root: state.get('root'),
});

export default connect(mapStateToProps)(Signup)