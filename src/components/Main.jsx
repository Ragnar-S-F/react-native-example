import { ScrollView, StyleSheet, View } from 'react-native';
import { Route, Routes } from 'react-router-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#b3b2b1',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
        <ScrollView horizontal>
    <AppBar/>
    </ScrollView>
    <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </View>
  );
};

export default Main;