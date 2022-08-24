import { View, StyleSheet } from 'react-native';

import Text from './Text';

import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10
      },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Repositories</Text>
        </Link>
        <Link
          to="/signin"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>Sign In</Text>
        </Link>
      </View>
    </View>;
};

export default AppBar;