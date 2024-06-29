import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'

import { signIn } from '../../lib/appwrite'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", 'Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    try {
      await signIn(form.email, form.password);
      
      // Set it to global state
      // Example: globalState.setUser(result);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] justify-center px-4 my-6">
          
          <Image
            source={images.logo}
            className="h-[35px] w-[115px]"
            resizeMode='contain'
          />

          <Text className="text-white text-2xl mt-10 font-psemibold">Log in to Aora</Text>

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({...form, password: e})}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Log In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <Text className="text-[#cddce0] mt-7 text-center text-lg">Don't have an account?<Link 
            className="text-secondary"
            href="/sign-up"
          > Sign Up</Link></Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn