/*
 * DECODE App – A mobile app to control your personal data
 *
 * Copyright (C) 2019 – DRIBIA Data Research S.L.
 *
 * DECODE App is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * DECODE App is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * email: info@dribia.com
 */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';
import Carousel from 'lib/Components/Carousel';
import MenuIcon from 'lib/Components/MenuIcon';
import Warning from 'lib/Components/Warning';
import { Icon } from 'lib/styles';
import commonTheme from 'lib/theme';
import Dummy from 'screens/Dummy';
import DummyNext from 'screens/DummyNext';
import AtlasList from 'screens/AttributeList/AtlasList';
import AttributeList from 'screens/AttributeList';
import EditAttribute from 'screens/AttributeList/EditAttribute';
import ApplicationList from 'screens/ApplicationList';
import ApplicationDetails from 'screens/ApplicationList/ApplicationDetails';
import ActivityHistory from 'screens/ApplicationList/ApplicationDetails/ActivityHistory';
import Settings from 'screens/Settings';
import About from 'screens/About';
import Scanner from 'screens/Scanner';
import DDDC from 'screens/applications/DDDC';
import BCNNow from 'screens/applications/BCNNow';

const defaultNavigationOptions = ({ screenProps: { theme } }) => ({
  headerBackTitle: null,
  headerTintColor: theme.headerPrimary,
  headerStyle: {
    backgroundColor: theme.headerSecondary,
  },
});

const AttributeStack = createStackNavigator({
  AttributeList: {
    screen: AttributeList,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <MenuIcon onPress={() => navigation.toggleDrawer()} />,
    }),
  },
  AtlasList,
  EditAttribute,
}, {
  initialRouteName: 'AttributeList',
  defaultNavigationOptions,
});

const ApplicationStack = createStackNavigator({
  ApplicationList: {
    screen: ApplicationList,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <MenuIcon onPress={() => navigation.toggleDrawer()} />,
    }),
  },
  ApplicationDetails,
  ActivityHistory,
  Scanner,
  dddc: {
    screen: DDDC,
  },
  bcnnow: {
    screen: BCNNow,
  },
  AttributeList,
  AtlasList,
  EditAttribute,
}, {
  initialRouteName: 'ApplicationList',
  defaultNavigationOptions,
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <MenuIcon onPress={() => navigation.toggleDrawer()} />,
    }),
  },
}, {
  defaultNavigationOptions,
});

const ScannerStack = createStackNavigator({
  Scanner: {
    screen: Scanner,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <MenuIcon onPress={() => navigation.toggleDrawer()} />,
    }),
  },
  dddc: {
    screen: DDDC,
  },
  bcnnow: {
    screen: BCNNow,
  },
}, {
  defaultNavigationOptions,
});

const AboutStack = createStackNavigator({
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <MenuIcon onPress={() => navigation.toggleDrawer()} />,
    }),
  },
}, {
  defaultNavigationOptions,
});

const DummyStack = createStackNavigator({
  Dummy: {
    screen: Dummy,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <MenuIcon onPress={() => navigation.toggleDrawer()} />,
    }),
  },
  DummyNext,
}, {
  defaultNavigationOptions,
});

const DDDCTestStack = createStackNavigator({
  dddc: {
    screen: DDDC,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <MenuIcon onPress={() => navigation.toggleDrawer()} />,
    }),
  },
  AttributeList,
  AtlasList,
  EditAttribute,
}, {
  defaultNavigationOptions,
});

const DrawerNavigator = createDrawerNavigator({
  AttributeStack: {
    screen: AttributeStack,
    navigationOptions: ({ screenProps: { t } }) => ({
      drawerLabel: t('attributes:my'),
      drawerIcon: <Icon name="user" />,
    }),
  },
  ApplicationStack: {
    screen: ApplicationStack,
    navigationOptions: ({ screenProps: { t } }) => ({
      drawerLabel: t('applications:available'),
      drawerIcon: <Icon name="th-large" />,
    }),
  },
  SettingsStack: {
    screen: SettingsStack,
    navigationOptions: ({ screenProps: { t } }) => ({
      drawerLabel: t('settings:title'),
      drawerIcon: <Icon name="cog" />,
    }),
  },
  AboutStack: {
    screen: AboutStack,
    navigationOptions: ({ screenProps: { t } }) => ({
      drawerLabel: t('about:title'),
      drawerIcon: <Icon name="info" />,
    }),
  },
  ScannerStack: {
    screen: ScannerStack,
    navigationOptions: ({ screenProps: { t } }) => ({
      drawerLabel: t('scanner:title'),
      drawerIcon: <Icon name="qrcode" />,
    }),
  },
  DummyStack: {
    screen: DummyStack,
    navigationOptions: () => ({
      drawerLabel: 'Test Dummy Screen',
    }),
  },
  DDDCStack: {
    screen: DDDCTestStack,
    navigationOptions: () => ({
      drawerLabel: 'Test DDDC',
    }),
  },
},
{
  defaultNavigationOptions: () => ({
    drawerLockMode: 'locked-closed',
  }),
  initialRouteName: 'ApplicationStack',
  hideStatusBar: true,
  drawerBackgroundColor: commonTheme.headerPrimary,
  contentOptions: {
    activeTintColor: commonTheme.headerSecondary,
    inactiveTintColor: commonTheme.headerSecondary,
    itemStyle: {
      borderBottomWidth: 1,
      borderBottomColor: commonTheme.headerSecondary,
    },
    labelStyle: {
      fontFamily: commonTheme.fontFamily,
    },
  },
});

const RootNavigation = createStackNavigator({
  Main: {
    screen: DrawerNavigator,
  },
  Warning: {
    screen: Warning,
  },
},
{
  initialRouteName: 'Main',
  mode: 'modal',
  headerMode: 'none',
});

const AppContainer = createAppContainer(RootNavigation);

const RootScreen = ({ firstRun, firstRunDone }) => {
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);
  return (
    firstRun
      ? <Carousel onDone={() => firstRunDone()} />
      : <AppContainer screenProps={{ t, theme }} />
  );
};

RootScreen.propTypes = {
  firstRun: PropTypes.bool.isRequired,
  firstRunDone: PropTypes.func.isRequired,
};

export default RootScreen;
