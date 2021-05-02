import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, SafeAreaView, StyleSheet, StatusBar, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'

const App = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.userReducer)
  const user = state.user

  const [ data, setData ] = useState({ name: '', email: '' })
  const [ loading, setLoading ] = useState(false)

  const { inputStyle, btnStl,footerStyle,loadingStyle,textHeaderStyle,textStyle,backgroundHeaderStyle,headerStyle,buttonViewStyle,buttonTextStyle,bodyStyle,safeAreaStyle } = styles

  return (
    <SafeAreaView style={safeAreaStyle}>

      <StatusBar barStyle='dark-content' backgroundColor='black' />

      <View style={safeAreaStyle}>

        <View style={backgroundHeaderStyle}>

          <Text style={textHeaderStyle}>User details:</Text>

          <View style={headerStyle}>
            <Text style={textStyle}>Name: {user.name}</Text>
            <Text style={textStyle}>email: {user.email}</Text>
          </View>
          
        </View>

        <View style={bodyStyle}>

          <View style={bodyStyle}>

            <TextInput
              style={inputStyle}
              value={data.name}
              placeholder='Insira seu nome'
              autoCapitalize='words'
              autoCompleteType='name'
              autoCorrect={false}
              placeholderTextColor='#9EA1B1'
              onChangeText={text => setData({ ...data, name: text })}
            />

            <TextInput
              style={inputStyle}
              value={data.email}
              placeholder='Insira seu email'
              autoCapitalize='none'
              autoCompleteType='name'
              autoCorrect={false}
              placeholderTextColor='#9EA1B1'
              onChangeText={text => setData({ ...data, email: text })}
            />

            <View style={buttonViewStyle}>
              <TouchableOpacity style={btnStl} onPress={() => submitForm() }>
                <Text style={buttonTextStyle}>SALVAR</Text>
              </TouchableOpacity>
            </View>

            { loading &&
              <View style={loadingStyle}>
                <ActivityIndicator size='large' color='blue' />
              </View>
            }
          </View>
        
        </View>

        <View style={footerStyle}>
         
        </View>
        
      </View>

    </SafeAreaView>
  )

  function submitForm() {
    setLoading(true)
    dispatch({ type: 'SET_USER', payload: data })
    
    setTimeout(() => {
      setData({ name: '', email: ''})
      setLoading(false)
    }, 1000)
  }
}

const styles = StyleSheet.create({
 inputStyle: {
   height: 40,
   fontSize: 16,
   borderBottomWidth: 1,
   borderColor: '#9EA1B2',
   marginVertical: 5
 },
 safeAreaStyle:{
   flex: 1,
   justifyContent: 'center',
   padding: 10
 },
 backgroundHeaderStyle: {
   flex: .4,
   backgroundColor: 'ivory',
 },
 headerStyle: {
   padding: 4,
 },
 textHeaderStyle: {
   fontSize: 20,
   fontWeight: 'bold',
  },
  textStyle: {
  marginVertical: 5,
  },
  bodyStyle:{
    flex: 1,
    justifyContent: 'center',
  },
  buttonViewStyle: {
    flex: 1, 
    alignItems: 'center', 
    marginVertical: 20,
  },
 btnStl: { 
   width: 300,
   height: 56,
   backgroundColor: 'blue',
   borderRadius: 10,
   justifyContent: 'center'
  },
  buttonTextStyle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
 footerStyle: {
   flex: .4,
   backgroundColor: 'ivory',
 },
 loadingStyle: {
   position: 'absolute',
   top: 20,
   alignSelf: 'center',
 },
})

export default App
