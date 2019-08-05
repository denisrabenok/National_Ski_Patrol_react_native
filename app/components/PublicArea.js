import React, { Component } from "react";
import { Alert, Image, StatusBar, Text, Dimensions, TouchableOpacity, AsyncStorage, TouchableHighlight } from "react-native";
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
import AboutUs from "./AboutUs";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import Login from "./Login";
import Signup from "./Signup";
import RightTopDropdownMenu from "./RightTopDropdownMenu";
import option_icon from '../assets/icons/option_icon.png'
const { width, height } = Dimensions.get('window');
// const window = Dimensions.get('window')
// console.ignoredYellowBox = true;
console.ignoredYellowBox = ['Warning:'];
export class PublicArea extends Component {

    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            isGoneAlready: false,
            dummy: false,
            onRightSideMenu: false,
            currentIndex: 0
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
    onPressOpt = () => {
        this.setState({ onRightSideMenu: true })
    }
    hideRightMenu = () => {
        this.setState({ onRightSideMenu: false });
        // Alert.alert('tstese')
    }
    onPass = ()=>{
        this.props.navigation.navigate(consts.DASHBOARD_SCREEN);
    }
    render() {
        return (

            <Container style={Styles.containerStyle}>
                <Image source={background}
                    style={Styles.imageStyle} />
                <StatusBar style={Styles.statusBarStyle} hidden={true} />
                <TouchableOpacity style={Styles.sandwichMenu} onPress={() => this.onPressOpt()}>
                    <Image style={Styles.topIconImg} source={option_icon} />
                </TouchableOpacity>
                {this.state.currentIndex == 0 ? <AboutUs /> : null}
                {this.state.currentIndex == 1 ? <Faq /> : null}
                {this.state.currentIndex == 2 ? <ContactUs /> : null}
                {this.state.currentIndex == 3 ? <Login setStack={this.setStack} onPass={this.onPass}/> : null}
                {this.state.currentIndex == 4 ? <Signup setStack={this.setStack} /> : null}
                {this.state.onRightSideMenu ?
                    <RightTopDropdownMenu
                        setStack={this.setStack}
                        hideRightMenu={this.hideRightMenu}
                        refresh={this.refresh} />
                    : null}
            </Container>
        );
    }
    setStack = (index) => {
        this.setState({ currentIndex: index });
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
    sandwichMenu: {
        position: 'absolute',
        right: width / 20,
        top: width / 20,
        width: width / 15,
        height: width / 15,
        zIndex: 10000,
    },
    topIconImg: {
        height: width / 15,
        width: width / 15,
        resizeMode: 'contain'
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

export default connect(mapStateToProps)(PublicArea)