// @refresh reset

import React, { useState, useEffect, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, TextInput, View, YellowBox, Button } from 'react-native'
import * as firebase from 'firebase'
import 'firebase/firestore'

// this obviously shouldn't be committed for security reasons...
// It's better to store as a json file and reference throughout yout app, but this is just a prototype anyway...
const firebaseConfig = {
    //Your firebase config here
  apiKey: 'AIzaSyBndP6dXRd5ULzNj9QEXp0QAzOyIhSFUas',
  authDomain: 'chat-demo-fa459.firebaseapp.com',
  databaseURL: 'https://chatter-b85d7.firebaseio.com',
  projectId: 'chat-demo-fa459',
  storageBucket: 'chat-demo-fa459.appspot.com',
  messagingSenderId: '967563723964'
}

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

// YellowBox.ignoreWarnings(['Setting a timer for a long period of time'])

const db = firebase.firestore()
const chatsRef = db.collection('chats')

export default function Chat() {
    const [user, setUser] = useState(null)
    const [name, setName] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        readUser()
        const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
            const messagesFirestore = querySnapshot
                .docChanges()
                .filter(({ type }) => type === 'added')
                .map(({ doc }) => {
                    const message = doc.data()
                    //createdAt is firebase.firestore.Timestamp instance
                    //https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
                    return { ...message, createdAt: message.createdAt.toDate() }
                })
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            appendMessages(messagesFirestore)
        })
        return () => unsubscribe()
    }, [])

    /* Utility Functions */
        const appendMessages = useCallback(
            (messages) => {
                setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
            },
            [messages]
        )

        async function readUser() {
            const user = await AsyncStorage.getItem('user')
            if (user) {
                setUser(JSON.parse(user))
            }
        }
        async function handlePress() {
            const _id = Math.random().toString(36).substring(7)
            const user = { _id, name }
            // 
            await AsyncStorage.setItem('user', JSON.stringify(user))
            setUser(user)
        }
        async function handleSend(messages) {
            const writes = messages.map((m) => chatsRef.add(m))
            await Promise.all(writes)
        }
    // Initial View
    // if a username has not been set with setName
    //  
    if (!user) {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName} />
                <Button onPress={handlePress} title="Enter the chat" />
            </View>
        )
    }
    // else render GiftedChat
    return <GiftedChat messages={messages} user={user} onSend={handleSend} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderColor: 'gray',
    },
})
