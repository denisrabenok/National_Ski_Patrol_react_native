import React, { Component } from "react";
import { Alert, Image, StatusBar, Text, Dimensions, TouchableOpacity, AsyncStorage, TextInput } from "react-native";
import { Button, Container, Content, Spinner, View } from "native-base";
import { Dropdown } from 'react-native-material-dropdown';
import DateTimePicker from 'react-native-modal-datetime-picker';
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
import Header from "./SimpleHeader";
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
export class EditEvent extends Component {

    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.state = {
            startDate: '',
            endDate: '',
            isStartDate: false,
            isDateTimePickerVisible: false
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
        Alert.alert('test');
    }
    onPressBack = () => {
        this.props.navigation.pop();
    }
    selectStartDate = () => {
        this.setState({ isStartDate: true, isDateTimePickerVisible: true });
    }
    selectEndDate = () => {
        this.setState({ isStartDate: false, isDateTimePickerVisible: true });
    }
    handleDatePicked = (date) => {
        let year = ("0000" + date.getFullYear()).slice(-4);
        let month = ("00" + (date.getMonth() + 1)).slice(-2);
        let d = ("00" + date.getDate()).slice(-2);
        let myDate = year + '-' + month + '-' + d;
        if (this.state.isStartDate) {
            if (this.state.endDate != '') {
                let startDate = new Date(myDate);
                let endDate = new Date(this.state.endDate);
                if (endDate - startDate < 0) {
                    Alert.alert('Error', 'Wrong Start Date!');
                    this.setState({ isDateTimePickerVisible: false });
                }
                else
                    this.setState({ isDateTimePickerVisible: false, startDate: myDate });
            }
            else
                this.setState({ isDateTimePickerVisible: false, startDate: myDate });
        }
        else {
            if (this.state.startDate != '') {
                let startDate = new Date(this.state.startDate);
                let endDate = new Date(myDate);
                if (endDate - startDate < 0) {
                    Alert.alert('Error', 'Wrong End Date!');
                    this.setState({ isDateTimePickerVisible: false });
                }
                else
                    this.setState({ isDateTimePickerVisible: false, endDate: myDate });
            }
            else
                this.setState({ isDateTimePickerVisible: false, endDate: myDate });
        }
    }
    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    }
    onPressSave = () => {
        Alert.alert('Info', 'Successfully modified')
    }
    render() {
        return (
            <Container style={Styles.containerStyle}>
                <StatusBar style={Styles.statusBarStyle} hidden={true} />
                <Image source={background}
                    style={Styles.imageStyle} />
                <Header
                    onPressBack={this.onPressBack}
                    navigation={this.props.navigation} />
                <Content contentContainerStyle={Styles.contentStyle}>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder={"Event Name"}
                        placeholderTextColor={colors.backColor}
                        style={Styles.itemContent} />
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder={"Purpose of Event"}
                        placeholderTextColor={colors.backColor}
                        style={Styles.itemContent} />
                    <View style={Styles.dateRow}>
                        <TouchableOpacity
                            onPress={() => this.selectStartDate()}
                            style={Styles.dateItem}>
                            <Text style={[Styles.dateText, this.state.startDate == '' ? { color: colors.backColor } : null]}>{this.state.startDate == '' ? 'Start Date' : this.state.startDate}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.selectEndDate()}
                            style={Styles.dateItem}>
                            <Text style={[Styles.dateText, this.state.startDate == '' ? { color: colors.backColor } : null]}>{this.state.endDate == '' ? 'End Date' : this.state.endDate}</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder={"Event Leader"}
                        placeholderTextColor={colors.backColor}
                        style={Styles.itemContent} />
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder={"Event Accom Location"}
                        placeholderTextColor={colors.backColor}
                        style={Styles.itemContent} />
                    <Dropdown
                        label='Skills needed'
                        textColor={'white'}
                        baseColor={colors.backColor}
                        data={[{ value: 'skill1' }, { value: 'skill2' }, { value: 'skill3' }]}
                        containerStyle={Styles.pickerStyle}
                        lineWidth={0}
                        itemColor={colors.firstColor}
                        selectedItemColor={colors.secondColor}
                        inputContainerPadding={0}
                        fontSize={dimens.item} />
                    <Dropdown
                        label='More Blurb'
                        data={[{ value: 'Blurb1' }, { value: 'Blurb2' }, { value: 'Blurb3' }]}
                        containerStyle={Styles.pickerStyle}
                        textColor={'white'}
                        baseColor={colors.backColor}
                        itemColor={colors.firstColor}
                        selectedItemColor={colors.secondColor}
                        lineWidth={0}
                        inputContainerPadding={0}
                        fontSize={dimens.item} />
                    <TouchableOpacity
                        onPress={() => this.onPressSave()}
                        style={Styles.btn}>
                        <Text style={Styles.btnText}>Modify</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={() => this.hideDateTimePicker()}
                    />
                </Content>
            </Container>
        );
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
    contentStyle: {
        padding: width / 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemContent: {
        color: 'white',
        textAlign: 'center',
        width: width / 10 * 9,
        borderBottomWidth: 1,
        borderColor: 'white',
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: height / 40
    },
    dateRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width / 10 * 9,
        paddingLeft: width / 40,
        paddingRight: width / 40,
        marginTop: height / 20
    },
    dateItem: {
        width: width / 5 * 2,
        borderBottomWidth: 1,
        borderColor: 'white'
    },
    dateText: {
        textAlign: 'center',
        color: 'white'
    },
    pickerStyle: {
        width: width / 10 * 9,
        paddingLeft: 5,
        borderBottomWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        paddingTop: 0,
        paddingBottom: 0,
    },
    btn: {
        marginTop: height / 20,
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
    Dashboard: state.get('dashboard'),
    root: state.get('root'),
});

export default connect(mapStateToProps)(EditEvent)