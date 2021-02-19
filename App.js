import React from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import {  View, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux'
import Login from './screens/login'
import Username from './screens/username';
import Talkie from './screens/talkie';
import Footer from './components/footer'
import store from './components/store'
import Connection from './screens/connection';
import rooms from './screens/rooms';
import Header from './components/header'
import messages from './screens/messages';
import activities from './screens/activities';
import account from './screens/account';

const Drawer = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Coolvetica: require("./components/assets/fonts/coolvetica_condensed_rg.ttf"),
      CoolveticaCm: require("./components/assets/fonts/coolvetica_compressed_rg.ttf"),
      CoolveticaCr: require("./components/assets/fonts/coolvetica_crammed_rg.ttf"),
      CoolveticaRg: require("./components/assets/fonts/coolvetica_rg.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <View style={{ backgroundColor:"#00070F", display:"grid", placeItems:"center"}}><ActivityIndicator size="large" /></View>;
    }

    return (
        <Provider store={store}>
          <NavigationContainer>
            <Header />
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={Login} />
              <Drawer.Screen name="Username" component={Username} />
              <Drawer.Screen name="Talkie" component={Talkie} />
              <Drawer.Screen name="Connection" component={Connection} />
              <Drawer.Screen name="Rooms" component={rooms} />
              <Drawer.Screen name="Messages" component={messages} />
              <Drawer.Screen name="Activity" component={activities} />
              <Drawer.Screen name="Account" component={account} />
            </Drawer.Navigator>
            <Footer />
          </NavigationContainer>
        </Provider>
    );
  }
}

