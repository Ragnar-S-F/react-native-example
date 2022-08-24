import { StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
      flexContainer: {
        backgroundColor: '#FFFFFF',
        padding: 20,
      },
  });

const SignIn = () => {
  return (
    <View style={styles.flexContainer}>
        <Text>The sign in view</Text>
    </View>
  );
};

export default SignIn;