import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary-200 p-4 rounded-lg ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
      disable={isLoading}  
    >
      <Text className={`font-psemibold text-lg text-center ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton