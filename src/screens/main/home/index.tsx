import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { ScreenWrapper } from '../../../components'

export default function Home() {
  return (
    <ScreenWrapper>
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
    </ScreenWrapper>
  )
}