import { Formik } from 'formik';
import { TextInput as NativeTextInput, StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      loginText:{
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    },
      loginScreenButton:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#2252d6',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        textAlign: "center"
      },
});

const TextInput = ({ ...props }) => {
  return (
    <>
    <Formik
     initialValues={{ username: "", password: "" }}
     onSubmit={values => console.log(values)}
   >
    {({ handleChange, handleSubmit, values }) => (
        <View>
            <NativeTextInput style={styles.input} {...props} placeholder="Username" value={values.username} onChangeText={handleChange('username')}/>
            <NativeTextInput style={styles.input} {...props} secureTextEntry placeholder="Password" value={values.password} onChangeText={handleChange('password')}/>
            <TouchableOpacity
                style={styles.loginScreenButton}
                onPress={handleSubmit}
                underlayColor='#fff'>
                    <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
  )}
  </Formik>
  </>
  );
};

export default TextInput;