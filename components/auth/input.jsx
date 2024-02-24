

import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Input = ({ type, label, login }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#888"
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        secureTextEntry={type === 'password'}
      />
      {login && type === 'password' && (
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  label: {
    color: '#0E0E0E',
    textAlign: 'center',
    fontFamily: 'Georama',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: -0.176,
    alignSelf:"flex-start",
    marginBottom:10
  },
  input: {
    display: 'flex',
    height: 54,
    padding: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 8,
    alignSelf: 'stretch',
    borderRadius: 48,
    backgroundColor: '#F6EAE6',
  },
  forgotPassword: {
    marginLeft: 10,
    marginTop:9,
    alignSelf: "flex-end"
  },
  forgotPasswordText: {
    color: '#A33100',
    textAlign: 'center',
    fontFamily: 'Georama',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 15,
    letterSpacing: -0.11,
  },
});

export default Input;