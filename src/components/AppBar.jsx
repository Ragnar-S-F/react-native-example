import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 120,
    backgroundColor: '#24292e',
  },
  text: {
    color: "#FFFFFF",
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.title,
    padding: 20,
  },
});

const AppBar = () => {
  return <View style={styles.container}><Text style={styles.text}>Repositories</Text></View>;
};

export default AppBar;