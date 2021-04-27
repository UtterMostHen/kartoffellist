import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, SafeAreaView, StyleSheet, StatusBar, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'

const App = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.userReducer)
  const user = state.user

  const [ data, setData ] = useState({ name: '', email: '' })
  const [ loading, setLoading ] = useState(false)

  const { inputStyle, btnStl } = styles

  return (
    <SafeAreaView style={{ flex: 1}}>

      <StatusBar barStyle='dark-content' backgroundColor='black' />

      <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>

        <View style={{ flex: .4, backgroundColor: 'ivory' }}>

          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>User details:</Text>

          <View style={{ padding: 4 }}>
            <Text style={{ marginVertical: 5 }}>Name: {user.name}</Text>
            <Text style={{ marginVertical: 5 }}>email: {user.email}</Text>
          </View>
          
        </View>

        <View style={{ flex: 1, justifyContent: 'center' }}>

          <View style={{ flex: 1 }}>

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

            <View style={{ flex: 1, alignItems: 'center', marginVertical: 20 }}>
              <TouchableOpacity style={btnStl} onPress={() => submitForm() }>
                <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>SALVAR</Text>
              </TouchableOpacity>
            </View>

            { loading &&
              <View style={{ position: 'absolute', top: 20, alignSelf: 'center' }}>
                <ActivityIndicator size='large' color='blue' />
              </View>
            }
          </View>
        
        </View>

        <View style={{ flex: .4, backgroundColor: 'ivory'}}>
         
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
 btnStl: { width: 300, height: 56, backgroundColor: 'blue', borderRadius: 10, justifyContent: 'center'}
})

export default App
