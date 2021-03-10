import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { Text, TouchableOpacity } from 'react-native';

import anim from '@assets/anim.json';
import { styles } from './welcome.style';

export const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LottieView source={anim} autoPlay loop style={styles.anim} />
      <Text style={styles.text}>A conta digital gratuita dos brasileiros</Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Vamos lá!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
