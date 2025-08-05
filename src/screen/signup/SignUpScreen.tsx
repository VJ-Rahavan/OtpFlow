import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';

import { styles } from './styles';

import imgTop from '../../assets/images/background.png';
import imgLight from '../../assets/images/light.png';
import { useNavigation } from '@react-navigation/native';
import { NavigationConstants } from '../../types/navigation';

export const SingupScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Image source={imgTop} style={styles.imageBG} />
            <View style={styles.contentTop}>
                {/* <Animated.Image
                    entering={FadeInUp.delay(200).duration(1000).springify().damping(5)}
                    source={imgLight}
                    style={styles.imgLight1}
                />
                <Animated.Image
                    entering={FadeInUp.delay(400).duration(1000).springify().damping(5)}
                    source={imgLight}
                    style={styles.imgLight2}
                /> */}


                 <Image
                    source={imgLight}
                    style={styles.imgLight1}
                />
                <Image
                    source={imgLight}
                    style={styles.imgLight2}
                />
            </View>

            {/* Titulo e Formulário */}
            <View style={styles.main}>

                {/* Login */}
                <View style={styles.login}>
                    <Text
                        style={styles.loginText}>Lets get started
                    </Text>

                    {/* <Animated.Text
                        entering={FadeInUp.duration(1000).springify()}
                        style={styles.loginText}>Cadastro
                    </Animated.Text> */}
                </View>

                {/* Formulario */}
                <View style={styles.form}>

                    <View
                        style={styles.formInputArea}>
                        <TextInput placeholder='Your Name' placeholderTextColor={'gray'} />
                    </View>

                    <View
                        style={styles.formInputArea}>
                        <TextInput placeholder='Your Phone number' placeholderTextColor={'gray'} />
                    </View>

                    <View
                        style={styles.formInputArea}>
                        <TextInput placeholder='Give strong Password' placeholderTextColor={'gray'} />
                    </View>

                    <View
                        style={styles.formButtonArea}>
                        <TouchableOpacity style={styles.formButton} onPress={() => navigation.navigate(NavigationConstants.HOME)}>
                            <Text style={styles.formButtonText}>Lets start the journey</Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={styles.formFooter}>
                        <Text>ah already onboarded?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate(NavigationConstants.LOGIN)}>
                            <Text style={styles.formFooterSingup} >Login</Text>
                        </TouchableOpacity>
                    </View>



                    {/* <Animated.View
                        entering={FadeInDown.duration(1000).springify()}
                        style={styles.formInputArea}>
                        <TextInput placeholder='Username' placeholderTextColor={'gray'} />
                    </Animated.View>

                    <Animated.View
                        entering={FadeInDown.delay(200).duration(1000).springify()}
                        style={styles.formInputArea}>
                        <TextInput placeholder='E-mail' placeholderTextColor={'gray'} />
                    </Animated.View>

                    <Animated.View
                        entering={FadeInDown.delay(400).duration(1000).springify()}
                        style={styles.formInputArea}>
                        <TextInput placeholder='senha' placeholderTextColor={'gray'} secureTextEntry />
                    </Animated.View>

                    <Animated.View
                        entering={FadeInDown.delay(600).duration(1000).springify()}
                        style={styles.formButtonArea}>
                        <TouchableOpacity style={styles.formButton}>
                            <Text style={styles.formButtonText}>Cadastrar</Text>
                        </TouchableOpacity>
                    </Animated.View>

                    <Animated.View
                        entering={FadeInDown.delay(800).duration(1000).springify()}
                        style={styles.formFooter}>
                        <Text>Já possui uma conta?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.formFooterSingup} >Login</Text>
                        </TouchableOpacity>
                    </Animated.View> */}


                </View>
            </View>
        </View >
    );
}