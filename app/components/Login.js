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
import option_icon from '../assets/icons/option_icon.png'
const { width, height } = Dimensions.get('window');
// const window = Dimensions.get('window')
// console.ignoredYellowBox = true;
console.ignoredYellowBox = ['Warning:'];
export class Login extends Component {

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
                <Image source={logo} style={Styles.logo} />
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
                    <Text style={Styles.btnText}>{strings.login}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.forgotBtn} onPress={this.onPressforgotPassword}>
                    <Text style={Styles.forgotBtnText}>{strings.forgotPassword}</Text>
                </TouchableOpacity>
                <View style={Styles.desc}>
                    <Text style={Styles.descText}>{strings.dont_have_an_account}</Text>
                    <TouchableOpacity style={Styles.descBtn} onPress={this.onPressSignup}>
                        <Text style={Styles.descBtnText}>{strings.signup}</Text>
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

    onPressLogin = () => {
        // this.setState({ isGoneAlready: false });
        // this.props.dispatch(loginActions.login(this.state.email, this.state.password));
        this.props.onPass();
    }
    onPressSignup = () => {
        // this.props.navigation.navigate(consts.SIGNUP_SCREEN);
        this.props.setStack(4)
    }
    onPressforgotPassword = () => {
        Alert.alert('Information', 'Please check your email');
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
        resizeMode: 'cover',
    },
    logo: {
        width: width / 4 * 3,
        height: height / 5,
        marginTop: height / 8,
        marginBottom: height / 20,
        resizeMode: 'contain'
    },
    btn: {
        marginTop: height / 40,
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
        marginTop: height / 30
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
    },
    forgotBtn: {
        width: width / 20 * 17,
        marginTop: height / 50,
    },
    forgotBtnText: {
        fontSize: dimens.btn,
        color: colors.warnColor,
        textAlign: 'right'
    }
};

const mapStateToProps = (state) => ({
    Login: state.get('login'),
    root: state.get('root'),
});

export default connect(mapStateToProps)(Login)