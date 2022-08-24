import { StyleSheet, View } from 'react-native';
import TextInput from './TextInput';

const styles = StyleSheet.create({
      flexContainer: {
        backgroundColor: '#FFFFFF',
        padding: 20,
      },
  });

const SignIn = () => {
  return (
    <View style={styles.flexContainer}>
        <TextInput/>
    </View>
  );
};

export default SignIn;