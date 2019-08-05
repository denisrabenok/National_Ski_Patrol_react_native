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
import remove_icon from '../assets/icons/cross_icon.png'
import edit_icon from '../assets/icons/edit_icon.png'
import add_icon from '../assets/icons/add_icon.png'
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
export class Events extends Component {

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
    }
    componentDidMount() {
        Orientation.lockToPortrait();
    }

    componentWillMount() {
    }
    componentDidUpdate() {
    }
    onPressEditItem = (index) => {
        Alert.alert(
            'Warning',
            'Do you want to edit this event?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => this.props.editEvent() },
            ],
            { cancelable: false }
        )
    }
    onPressRemoveItem = (index) => {
        Alert.alert(
            'Warning',
            'Do you want to remove this event?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => Alert.alert('Info', 'Successfully Removed') },
            ],
            { cancelable: false }
        )
    }
    onPressAddItem = () => {
        Alert.alert(
            'Info',
            'Do you want to add a new event?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => this.props.addNewEvent() },
            ],
            { cancelable: false }
        )
    }
    render() {
        return (
            <Content contentContainerStyle={Styles.contentStyle}>
                <Text style={Styles.title}>Events I am attending</Text>
                <View style={[Styles.tableRow, { marginTop: height / 30 }]}>
                    <Text style={Styles.tableHdrItemText}>Name</Text>
                    <Text style={Styles.tableHdrItemText}>Start</Text>
                    <Text style={Styles.tableHdrItemText}>End</Text>
                    <Text style={Styles.tableHdrItemText}>Location</Text>
                    <View style={[Styles.iconBtnRow, { justifyContent: 'flex-end' }]}>
                        <TouchableOpacity
                            onPress={() => this.onPressAddItem()}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: 'white' }]} source={add_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.tableRow}>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>Hintertux</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>2018-11-18</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>2018-11-21</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>Zurich</Text>
                    <View style={Styles.iconBtnRow}>
                        <TouchableOpacity
                            onPress={() => this.onPressEditItem(0)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: 'green' }]} source={edit_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onPressRemoveItem(0)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: colors.warnColor }]} source={remove_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.tableRow}>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>Hintertux</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>2018-11-18</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>2018-11-21</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>Zurich</Text>
                    <View style={Styles.iconBtnRow}>
                        <TouchableOpacity
                            onPress={() => this.onPressEditItem(1)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: 'green' }]} source={edit_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onPressRemoveItem(1)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: colors.warnColor }]} source={remove_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.tableRow}>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>Hintertux</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>2018-11-18</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>2018-11-21</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>Zurich</Text>
                    <View style={Styles.iconBtnRow}>
                        <TouchableOpacity
                            onPress={() => this.onPressEditItem(2)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: 'green' }]} source={edit_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onPressRemoveItem(2)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: colors.warnColor }]} source={remove_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.tableRow}>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>Hintertux</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>2018-11-18</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>2018-11-21</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>Zurich</Text>
                    <View style={Styles.iconBtnRow}>
                        <TouchableOpacity
                            onPress={() => this.onPressEditItem(3)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: 'green' }]} source={edit_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onPressRemoveItem(3)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: colors.warnColor }]} source={remove_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.tableRow}>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>Hintertux</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>2018-11-18</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>2018-11-21</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>Zurich</Text>
                    <View style={Styles.iconBtnRow}>
                        <TouchableOpacity
                            onPress={() => this.onPressEditItem(2)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: 'green' }]} source={edit_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onPressRemoveItem(2)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: colors.warnColor }]} source={remove_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.tableRow}>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>Hintertux</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>2018-11-18</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>2018-11-21</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>Zurich</Text>
                    <View style={Styles.iconBtnRow}>
                        <TouchableOpacity
                            onPress={() => this.onPressEditItem(3)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: 'green' }]} source={edit_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onPressRemoveItem(3)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: colors.warnColor }]} source={remove_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.tableRow}>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>Hintertux</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>2018-11-18</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>2018-11-21</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>Zurich</Text>
                    <View style={Styles.iconBtnRow}>
                        <TouchableOpacity
                            onPress={() => this.onPressEditItem(2)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: 'green' }]} source={edit_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onPressRemoveItem(2)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: colors.warnColor }]} source={remove_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.tableRow}>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>Hintertux</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>2018-11-18</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>2018-11-21</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>Zurich</Text>
                    <View style={Styles.iconBtnRow}>
                        <TouchableOpacity
                            onPress={() => this.onPressEditItem(3)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: 'green' }]} source={edit_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onPressRemoveItem(3)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: colors.warnColor }]} source={remove_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.tableRow}>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>Hintertux</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>2018-11-18</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>2018-11-21</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>Zurich</Text>
                    <View style={Styles.iconBtnRow}>
                        <TouchableOpacity
                            onPress={() => this.onPressEditItem(2)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: 'green' }]} source={edit_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onPressRemoveItem(2)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: colors.warnColor }]} source={remove_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.tableRow}>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>Hintertux</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>2018-11-18</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>2018-11-21</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>Zurich</Text>
                    <View style={Styles.iconBtnRow}>
                        <TouchableOpacity
                            onPress={() => this.onPressEditItem(3)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: 'green' }]} source={edit_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onPressRemoveItem(3)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: colors.warnColor }]} source={remove_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.tableRow}>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>Hintertux</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>2018-11-18</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>2018-11-21</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>Zurich</Text>
                    <View style={Styles.iconBtnRow}>
                        <TouchableOpacity
                            onPress={() => this.onPressEditItem(2)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: 'green' }]} source={edit_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onPressRemoveItem(2)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: colors.warnColor }]} source={remove_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.tableRow}>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>Hintertux</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>2018-11-18</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>2018-11-21</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>Zurich</Text>
                    <View style={Styles.iconBtnRow}>
                        <TouchableOpacity
                            onPress={() => this.onPressEditItem(3)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: 'green' }]} source={edit_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onPressRemoveItem(3)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: colors.warnColor }]} source={remove_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.tableRow}>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>Hintertux</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>2018-11-18</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>2018-11-21</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>Zurich</Text>
                    <View style={Styles.iconBtnRow}>
                        <TouchableOpacity
                            onPress={() => this.onPressEditItem(2)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: 'green' }]} source={edit_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onPressRemoveItem(2)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: colors.warnColor }]} source={remove_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.tableRow}>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>Hintertux</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>2018-11-18</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>2018-11-21</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>Zurich</Text>
                    <View style={Styles.iconBtnRow}>
                        <TouchableOpacity
                            onPress={() => this.onPressEditItem(3)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: 'green' }]} source={edit_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onPressRemoveItem(3)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: colors.warnColor }]} source={remove_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.tableRow}>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>Hintertux</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>2018-11-18</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>2018-11-21</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>Zurich</Text>
                    <View style={Styles.iconBtnRow}>
                        <TouchableOpacity
                            onPress={() => this.onPressEditItem(2)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: 'green' }]} source={edit_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onPressRemoveItem(2)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: colors.warnColor }]} source={remove_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.tableRow}>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>Hintertux</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>2018-11-18</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>2018-11-21</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>Zurich</Text>
                    <View style={Styles.iconBtnRow}>
                        <TouchableOpacity
                            onPress={() => this.onPressEditItem(3)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: 'green' }]} source={edit_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onPressRemoveItem(3)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: colors.warnColor }]} source={remove_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.tableRow}>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>Hintertux</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>2018-11-18</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>2018-11-21</Text>
                    <Text style={[Styles.tableItemText, { color: colors.firstColor }]}>Zurich</Text>
                    <View style={Styles.iconBtnRow}>
                        <TouchableOpacity
                            onPress={() => this.onPressEditItem(2)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: 'green' }]} source={edit_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onPressRemoveItem(2)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: colors.warnColor }]} source={remove_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.tableRow}>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>Hintertux</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>2018-11-18</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>2018-11-21</Text>
                    <Text style={[Styles.tableItemText, { color: colors.secondColor }]}>Zurich</Text>
                    <View style={Styles.iconBtnRow}>
                        <TouchableOpacity
                            onPress={() => this.onPressEditItem(3)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: 'green' }]} source={edit_icon} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.onPressRemoveItem(3)}
                            style={Styles.tableItemBtn}>
                            <Image style={[Styles.btnIcon, { tintColor: colors.warnColor }]} source={remove_icon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Content>
        );
    }
}

const Styles = {
    contentStyle: {
        padding: width / 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: dimens.title,
        marginTop: height / 20,
    },
    tableRow: {
        flexDirection: 'row',
        width: width / 10 * 9,
        alignItems: 'center',
        marginTop: height / 30
    },
    tableItemText: {
        color: 'white',
        fontSize: dimens.small,
        textAlign: 'center',
        width: width / 50 * 9
    },
    tableHdrItemText: {
        color: 'white',
        fontSize: dimens.small + 2,
        textAlign: 'center',
        width: width / 50 * 9
    },
    iconBtnRow: {
        width: width / 50 * 9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: width / 100
    },
    tableItemBtn: {
        width: width / 100 * 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnIcon: {
        width: width / 100 * 5,
        height: width / 100 * 5,
        resizeMode: 'contain'
    }
};

const mapStateToProps = (state) => ({
    Portfolio: state.get('portfolio'),
    root: state.get('root'),
});

export default connect(mapStateToProps)(Events)