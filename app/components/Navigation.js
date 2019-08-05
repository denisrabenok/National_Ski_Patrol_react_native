import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import configureStore from "../store/configureStore.js";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import Dashboard from "./Dashboard";
import AddEvent from "./AddEvent";
import EditEvent from "./EditEvent"; 
import PublicArea from "./PublicArea"; 


const store = configureStore();
const Routes = {
  PublicArea: { screen: PublicArea },
  Dashboard: { screen: Dashboard },
  AddEvent: { screen: AddEvent },
  EditEvent: { screen: EditEvent }, 
};
const Navigator = StackNavigator(Routes, {
  headerMode: 'screen'
});

export class Navigation extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

function mapStateToProps(state) {
  return {
    dashboard: state.dashboard,
    login: state.login,
    signup: state.signup,
    innerProduct: state.innerProduct,
    description: state.description,
    review: state.review,
    shipping_Returns: state.shipping_Returns,
    services: state.services,
    portfolio: state.portfolio,
    aboutUs: state.aboutUs,
    products: state.products,
    cart: state.cart,
    chat: state.chat,
  }
}
export default connect(mapStateToProps)(Navigation);
