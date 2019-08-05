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
import product from '../assets/product.png'
import product1 from '../assets/machine.png'
import logo from '../assets/logo.png'
import Orientation from 'react-native-orientation';
import CustomTextInput from "./CustomTextInput";
import Header from "./DashboardHeader";
import Profile from "./Profile";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Faq from "./Faq";
import Events from "./Events";
import MyCalendar from "./MyCalendar";
import LeftSideMenu from "./LeftSideMenu";
const { width, height } = Dimensions.get('window');
// const window = Dimensions.get('window')
// console.ignoredYellowBox = true;
console.ignoredYellowBox = ['Warning:'];
export class Dashboard extends Component {

    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            isGoneAlready: false,
            onLeftSideMenu: false,
            dummy: false,
            currentIndex: 3
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

    addNewEvent = () => {
        this.props.navigation.navigate(consts.ADDEVENT_SCREEN);
    }
    editEvent = () => {
        Alert.alert('test')
        this.props.navigation.navigate(consts.EDITEVENT_SCREEN);
    }
    render() {
        return (
            <Container style={Styles.containerStyle}>
                <StatusBar style={Styles.statusBarStyle} hidden={true} />
                <Image source={background}
                    style={Styles.imageStyle} />
                <Header
                    onPressOpt={this.onPressOpt}
                    navigation={this.props.navigation} />
                {this.state.currentIndex == 0 ? <Profile /> : null}
                {this.state.currentIndex == 1 ? <AboutUs /> : null}
                {this.state.currentIndex == 2 ? <Faq /> : null}
                {this.state.currentIndex == 3 ?
                    <Events
                        editEvent={this.editEvent}
                        addNewEvent={this.addNewEvent} />
                    : null}
                {this.state.currentIndex == 4 ? <MyCalendar /> : null}
                {this.state.currentIndex == 5 ? <ContactUs /> : null}
                {this.state.onLeftSideMenu ?
                    <LeftSideMenu
                        setStack={this.setStack}
                        hideLeftMenu={this.hideLeftMenu}
                        refresh={this.refresh} />
                    : null}
            </Container>
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

    onPressItem = () => {
        this.props.navigation.navigate(consts.INNERPRODUCT_SCREEN);
    }
    onPressSignup = () => {
        this.props.navigation.navigate(consts.SIGNUP_SCREEN);
    }
    onPressOpt = () => {
        this.setState({ onLeftSideMenu: true })
    }
    hideLeftMenu = () => {
        this.setState({ onLeftSideMenu: false });
    }
    setStack = (index) => {
        if (index == 6) {
            this.setState({ currentIndex: 2 });
            this.props.navigation.navigate(consts.PUBLICAREA_SCREEN)
        }
        else {
            this.setState({ currentIndex: index });
        }
    }
}


const Styles = {
    containerStyle: {
        backgroundColor: colors.backColor
    },
    statusBarStyle: {
        // backgroundColor: colors.primaryColor
    },
    imageStyle: {
        position: 'absolute',
        top: 0,
        width: width,
        height: height,
        resizeMode: 'cover',
    },
};

const mapStateToProps = (state) => ({
    Dashboard: state.get('dashboard'),
    root: state.get('root'),
});

export default connect(mapStateToProps)(Dashboard)