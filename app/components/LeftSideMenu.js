import React, { Component } from "react";
import { Content, Input, Item, Label, Text, Left, View, } from "native-base";
import { Alert, Image, Dimensions, TextInput, ScrollView, TouchableHighlight, TouchableOpacity } from "react-native";
import strings from "../resources/strings";
import PropTypes from "prop-types";
import * as Immutable from "../../node_modules/immutable/dist/immutable";
import ImmutableComponent from "./ImmutableComponent";
import photo from '../assets/profile_photo.jpg'
import colors from "../resources/colors";
import dimens from "../resources/dimens";
import LinearGradient from 'react-native-linear-gradient';
import { controlProgress } from "../actions/root-actions";
import consts from "../const";
import aboutus_icon from '../assets/icons/aboutus_icon.png'
import public_faq_icon from '../assets/icons/public_faq_icon.png'
import profile_icon from '../assets/icons/profile_icon.png'
import contactus_icon from '../assets/icons/contactus_icon.png'
import calendar_icon from '../assets/icons/calendar_icon.png'
import events_list_icon from '../assets/icons/events_list_icon.png'
import signout_icon from '../assets/icons/signout_icon.png'
import findus_icon from '../assets/icons/findus_icon.png'
const { width, height } = Dimensions.get('window');


export default class LeftSideMenu extends ImmutableComponent {

    constructor(props: {}) {
        super(props);

        this.state = {
            data: Immutable.Map({
                error: "",
                showDefaultValue: true,
            }),
            indeterminate: false,
            width: width,
            dummy: true
        };
        // Alert.alert(width + ', ' + height);
    }
    componentDidMount() {
        this.animate();
    }

    animate() {
        let progress = width;
        this.setState({ width: progress });
        setTimeout(() => {
            this.setState({ indeterminate: false });
            let intervalId = setInterval(() => {
                progress = progress - 100;
                // Alert.alert('test')
                if (progress < width / 5) {
                    progress = width / 5
                    this.setState({ indeterminate: true })
                    this.setState({ width: progress });
                    clearInterval(intervalId);
                    return;
                }
                this.setState({ width: progress });
                // this.forceUpdate();
            }, 50);
        }, 10);
        // this.setState({ width: width / 2 })
    }
    onPressBack = () => {
        if (this.state.indeterminate) {
            this.setState({ indeterminate: false })
            let progress = width / 5;
            this.setState({ width: progress });
            setTimeout(() => {
                let intervalId = setInterval(() => {
                    progress = progress + 100;
                    // Alert.alert('test')
                    if (progress > width) {
                        progress = width
                        this.setState({ width: progress });
                        clearInterval(intervalId);
                        this.props.hideLeftMenu();
                        // this.props.parent.setState({ onLeftSideMenu: false });
                        return
                    }
                    this.setState({ width: progress });
                    // this.forceUpdate();
                }, 50);
            }, 10);
        }
    }
    onPressProfile = () => {
        this.props.hideLeftMenu();
        this.props.setStack(0);
        // this.props.navigation.navigate(consts.PRODUCTS_SCREEN)
    }
    onPressAboutUs = () => {
        this.props.hideLeftMenu();
        this.props.setStack(1);
        // this.props.navigation.navigate(consts.ABOUTUS_SCREEN)
    }
    onPressFaq = () => {
        this.props.hideLeftMenu();
        this.props.setStack(2);
        // this.props.navigation.navigate(consts.FINDUS_SCREEN)
    }
    onPressEvents = () => {
        this.props.hideLeftMenu();
        this.props.setStack(3);
        // this.props.navigation.navigate(consts.PORTFOLIO_SCREEN)
    }
    onPressCalendar = () => {
        // Alert.alert('test')
        this.props.hideLeftMenu();
        this.props.setStack(4);
        // this.props.navigation.navigate(consts.SERVICES_SCREEN)
    }
    onPressContactUs = () => {
        this.props.hideLeftMenu();
        this.props.setStack(5);
        // this.props.navigation.navigate(consts.LOGIN_SCREEN)
    }
    onPressSignout = () => {
        this.props.hideLeftMenu();
        this.props.setStack(6);
        // this.props.navigation.navigate(consts.LOGIN_SCREEN)
    }
    render() {
        return (
            <View style={Styles.containerStyle}>
                <View
                    style={Styles.contentStyle}>
                    <View style={Styles.topRow}>
                        <LinearGradient
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                            colors={['#81d7af', '#8091da']}
                            style={Styles.outter}>
                            <View style={Styles.inner}>
                                <Image style={Styles.profileImg} source={photo} />
                            </View>
                        </LinearGradient>
                        <Text style={Styles.name}>John Doe</Text>
                    </View>
                    <TouchableOpacity
                        onPress={this.onPressProfile}
                        underlayColor='transparent'
                        style={Styles.itemRow}>
                        <Image style={Styles.itemImg} source={profile_icon} />
                        <Text style={Styles.itemText}>{strings.profile}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onPressAboutUs}
                        underlayColor='transparent'
                        style={Styles.itemRow}>
                        <Image style={Styles.itemImg} source={aboutus_icon} />
                        <Text style={Styles.itemText}>{strings.aboutus}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onPressFaq}
                        underlayColor='transparent'
                        style={Styles.itemRow}>
                        <Image style={Styles.itemImg} source={public_faq_icon} />
                        <Text style={Styles.itemText}>{strings.public_faq}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onPressEvents}
                        underlayColor='transparent'
                        style={Styles.itemRow}>
                        <Image style={Styles.itemImg} source={events_list_icon} />
                        <Text style={Styles.itemText}>{strings.events_list}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onPressCalendar}
                        underlayColor='transparent'
                        style={Styles.itemRow}>
                        <Image style={Styles.itemImg} source={calendar_icon} />
                        <Text style={Styles.itemText}>{strings.calendar}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.onPressContactUs}
                        underlayColor='transparent'
                        style={Styles.itemRow}>
                        <Image style={Styles.itemImg} source={contactus_icon} />
                        <Text style={Styles.itemText}>{strings.contactus}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        underlayColor='transparent'
                        onPress={this.onPressSignout}
                        style={Styles.itemRow}>
                        <Image style={Styles.itemImg} source={signout_icon} />
                        <Text style={Styles.itemText}>{strings.signout}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableHighlight
                    style={[Styles.backStyle, { width: this.state.width }]}
                    underlayColor='#00000020'
                    onPress={this.onPressBack}>
                    <View style={Styles.backStyle} />
                </TouchableHighlight>
            </View>
        );
    }
}

const Styles = {
    containerStyle: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        width: width,
        height: height,
        backgroundColor: '#00000020',
        justifyContent: 'flex-end',
        zIndex: 100000
    },
    contentStyle: {
        width: width / 5 * 4,
        height: height,
        paddingTop: width / 10,
        backgroundColor: colors.header,
        borderRightWidth: 1,
        borderRightColor: '#aaaaaa',
    },
    backStyle: {
        backgroundColor: '#00000020',
        // width: width / 3,
        height: height
    },
    topRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#aaaaaa',
        alignItems: 'center',
        // justifyContent: 'space-between',
        paddingRight: width / 20,
        paddingLeft: width / 20,
        paddingBottom: width / 10,
    },
    outter: {
        width: width / 6,
        height: width / 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width / 8,
    },
    inner: {
        width: width / 6 - 4,
        height: width / 6 - 4,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: width / 8 - 2
    },
    profileImg: {
        width: width / 6 - 4,
        height: width / 6 - 4,
        alignItems: 'center',
        borderRadius: width / 12 - 2
    },
    name: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: dimens.btn + 2,
        paddingLeft: width / 30,
        width: width / 2,
        textAlign: 'center'
    },
    itemRow: {
        flexDirection: 'row',
        paddingLeft: width / 20,
        paddingRight: width / 20,
        borderBottomWidth: 1,
        borderColor: '#aaaaaa',
        paddingTop: height / 40,
        paddingBottom: height / 50,
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    itemImg: {
        width: height / 25,
        height: height / 25,
        marginRight: width / 20,
        resizeMode: 'contain'
    },
    itemText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: dimens.btn,
    }
};

LeftSideMenu.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    defaultValue: PropTypes.string
};