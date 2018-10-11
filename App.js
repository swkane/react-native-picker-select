import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

import PickerSelect from "react-native-picker-select";
import { Formik } from "formik";

export default class App extends React.Component {
  state = {
    course: ""
  };
  render() {
    const { container, welcome, label, input } = styles;
    return (
      <View style={container}>
        <Formik
          initialValues={{ name: "", email: "" }}
          onSubmit={(values, { setSubmitting }) => {
            Alert.alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ values, handleSubmit, handleChange, setFieldValue }) => (
            <React.Fragment>
              <Text style={welcome}>Signup</Text>
              <Text style={label}>Name</Text>
              <TextInput
                style={input}
                value={values.name}
                onChangeText={handleChange("name")}
              />
              <Text style={label}>Email</Text>
              <TextInput
                style={input}
                value={values.email}
                onChangeText={handleChange("email")}
              />
              <PickerSelect
                items={[
                  { label: "Digital Marketing", value: 1 },
                  { label: "Software Engineering", value: 2 },
                  { label: "UX Engineering", value: 3 }
                ]}
                onValueChange={value => setFieldValue("course", value)}
                style={{ ...pickerSelectStyles }}
              />
              <Button title="Submit" onPress={handleSubmit} />
            </React.Fragment>
          )}
        </Formik>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  label: {
    color: "#aaa"
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#bbb",
    marginBottom: 20
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: "#bbb",
    marginBottom: 20,
    color: "black"
  }
});
