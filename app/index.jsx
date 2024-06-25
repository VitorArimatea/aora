import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';


export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="h-full w-full items-center px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px] mt-[60px]"
            resizeMode='contain'
          /> 
          <Image
            source={images.cards}
            className="max-w-[375px] w-full h-[298px]"
            resizeMode='contain'
          />
          <View className="relative mt-5 items-center">
            <Text className="text-white text-3xl font-bold">Discover Endless Possibilities with <Text className="text-secondary-200">Aora</Text></Text>
            <Image
              source={images.path}
              className="absolute bottom-12 -right-4 w-[100px] h-[15px]"
              resizeMode='contain'
            />

            <Text className="text-[#CDCDE0] mt-4 text-center">Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>
          </View>
          
          <CustomButton
            title="Continue With Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-9"
          />
        </View>
      </ScrollView>
      <StatusBar
        backgroundColor='#161622'
        style='light'
      ></StatusBar>
    </SafeAreaView>
  );
}
