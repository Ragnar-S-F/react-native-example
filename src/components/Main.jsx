import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  backColor: {
    backgroundColor: '#b3b2b1',
  },
});

const Main = () => {
  return (
    <View style={styles.backColor}>
    <AppBar/>
        <RepositoryList/>
    </View>
  );
};

export default Main;