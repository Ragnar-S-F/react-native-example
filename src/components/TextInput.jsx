import { Formik } from 'formik';
import { TextInput as NativeTextInput, StyleSheet, View, Button } from 'react-native';
import Text from './Text';
import * as yup from 'yup';

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8
      },
      error: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        borderColor:"#d73a4a"
      },
      loginScreenButton:{
        marginTop:40,
        marginRight:30,
        marginLeft:30,
        backgroundColor:'#2252d6',
        borderRadius:8,
      },
});

const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required'),
  });

const TextInput = () => {
  return (
    <>
    <Formik
     initialValues={{ username: "", password: "" }}
     onSubmit={values => console.log(values)}
     validationSchema={validationSchema}
   >
    {({ handleChange, handleSubmit, values, isValid, errors, touched }) => (
        <View>
            <NativeTextInput style={!errors.username ? styles.input : styles.error} placeholder="Username" value={values.username} onChangeText={handleChange('username')}/>
            {errors.username && touched.username ? (
             <View paddingLeft={20}><Text style={{color:"#d73a4a"}} >{errors.username}</Text></View>
           ) : null}
            <NativeTextInput style={!errors.password ? styles.input : styles.error} secureTextEntry placeholder="Password" value={values.password} onChangeText={handleChange('password')}/>
            {errors.password && touched.password ? (
             <View paddingLeft={20}><Text style={{color:"#d73a4a"}}>{errors.password}</Text></View>
           ) : null}
           <View style={styles.loginScreenButton}>
            <Button
                onPress={handleSubmit}
                disabled={!isValid}
                title='Login'
                color={"white"}
                />
                </View>
        </View>
  )}
  </Formik>
  </>
  );
};

export default TextInput;