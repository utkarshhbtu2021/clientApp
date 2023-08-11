import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

const Registration = props => {
  const [mobile, setMobile] = useState('');

  const onConfirm = () => {
    props.setRegistred(true);
  };
  const onCancel = () => {
    props.close();
  };

  return (
    <View style={styles.container}>
      <View style={styles.fieldView}>
        <Text style={styles.labelText}>Full Name </Text>
        <TextInput style={styles.textInputField} />
      </View>
      <View>
        <Text style={styles.labelText}>Mobile No</Text>
        <TextInput style={styles.textInputField} />
      </View>
      <View>
        <Text style={styles.labelText}>OTP</Text>
        <TextInput style={styles.textInputField} />
        <View style={{display: 'flex', flexDirection: 'row-reverse'}}>
          <Text style={styles.resend}> Resend </Text>
        </View>
      </View>
      <View>
        <Text style={styles.labelText}>Address</Text>
        <TextInput style={styles.textInputField} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 40,
        }}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => {
            onCancel();
          }}>
          <Text style={styles.cancelButtonText}> Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => {
            onConfirm();
          }}>
          <Text style={styles.confirmButtonText}>Conifrm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  textInputField: {
    marginTop: 8,
    borderWidth: 2,
    borderColor: '#efd8ce',
    height: 34,
    borderRadius: 4,
  },

  labelText: {
    color: '#2d3925',
    fontSize: 14,
    fontWeight: '500',
    paddingTop: 12,
  },

  fieldView: {
    marginTop: 8,
  },
  cancelButton: {
    height: 38,
    width: '45%',
    background: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#2d3925',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  cancelButtonText: {
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3925',
  },
  confirmButton: {
    height: 38,
    width: '45%',
    backgroundColor: '#2d3925',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  confirmButtonText: {
    fontFamily: 'Lato',
    fontSize: 16,
    fontWeight: '600',
    color: '#FAFAFA',
  },
  resend: {
    color: '#5894F7',
    fontFamily: 'Lato',
    fontWeight: '500',
    marginTop: 2,
  },
});
