import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const ArrowIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M8.58984 16.58L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.58Z" fill="white" />
    </Svg>
  );
};


export const MusicSvg = () => {
    return (
      <View >
        <Svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
          <Path d="M27 2.25C15.75 2.25 6.75 11.25 6.75 22.5V38.25C6.75 40.0402 7.46116 41.7571 8.72703 43.023C9.9929 44.2888 11.7098 45 13.5 45H20.25V27H11.25V22.5C11.25 18.3228 12.9094 14.3168 15.8631 11.3631C18.8168 8.40937 22.8228 6.75 27 6.75C31.1772 6.75 35.1832 8.40937 38.1369 11.3631C41.0906 14.3168 42.75 18.3228 42.75 22.5V27H33.75V45H40.5C42.2902 45 44.0071 44.2888 45.273 43.023C46.5388 41.7571 47.25 40.0402 47.25 38.25V22.5C47.25 11.25 38.1825 2.25 27 2.25Z" fill="#822700"/>
        </Svg>
      </View>
    );
  };

export const HomeIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="#A33100" />
    </Svg>
  );

export const SearchIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M9.5 3C11.2239 3 12.8772 3.68482 14.0962 4.90381C15.3152 6.12279 16 7.77609 16 9.5C16 11.11 15.41 12.59 14.44 13.73L14.71 14H15.5L20.5 19L19 20.5L14 15.5V14.71L13.73 14.44C12.59 15.41 11.11 16 9.5 16C7.77609 16 6.12279 15.3152 4.90381 14.0962C3.68482 12.8772 3 11.2239 3 9.5C3 7.77609 3.68482 6.12279 4.90381 4.90381C6.12279 3.68482 7.77609 3 9.5 3ZM9.5 5C7 5 5 7 5 9.5C5 12 7 14 9.5 14C12 14 14 12 14 9.5C14 7 12 5 9.5 5Z" fill="#0E0E0E" />
    </Svg>
  );

export const FavouritesIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55ZM16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" fill="#0E0E0E" />
    </Svg>
  );
  

export const ArrowRight = () => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path d="M8.59009 16.58L13.1701 12L8.59009 7.41L10.0001 6L16.0001 12L10.0001 18L8.59009 16.58Z" fill="#0E0E0E"/>
        </Svg>
    );
  }; 
export const NotificationIcon = () => (
    <Svg width="18" height="21" viewBox="0 0 18 21" fill="none">
      <Path d="M16 15V9.8C15.5 9.9 15 10 14.5 10H14V16H4V9C4 6.2 6.2 4 9 4C9.1 2.7 9.7 1.6 10.5 0.7C10.2 0.3 9.6 0 9 0C7.9 0 7 0.9 7 2V2.3C4 3.2 2 5.9 2 9V15L0 17V18H18V17L16 15ZM7 19C7 20.1 7.9 21 9 21C10.1 21 11 20.1 11 19H7ZM18 4.5C18 6.4 16.4 8 14.5 8C12.6 8 11 6.4 11 4.5C11 2.6 12.6 1 14.5 1C16.4 1 18 2.6 18 4.5Z" fill="#A33100" />
    </Svg>
  );

export const RewardsIcon = () => (
    <Svg width="12" height="13" viewBox="0 0 12 13" fill="none">
      <Path d="M6 2.25V7.525C5.705 7.355 5.365 7.25 5 7.25C3.895 7.25 3 8.145 3 9.25C3 10.355 3.895 11.25 5 11.25C6.105 11.25 7 10.355 7 9.25V4.25H9V2.25H6Z" fill="#0E0E0E" />
    </Svg>
  );
  
  
export const LikeIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
  <Path d="M6.05 9.775L6 9.825L5.945 9.775C3.57 7.62 2 6.195 2 4.75C2 3.75 2.75 3 3.75 3C4.52 3 5.27 3.5 5.535 4.18H6.465C6.73 3.5 7.48 3 8.25 3C9.25 3 10 3.75 10 4.75C10 6.195 8.43 7.62 6.05 9.775ZM8.25 2C7.38 2 6.545 2.405 6 3.04C5.455 2.405 4.62 2 3.75 2C2.21 2 1 3.205 1 4.75C1 6.635 2.7 8.18 5.275 10.515L6 11.175L6.725 10.515C9.3 8.18 11 6.635 11 4.75C11 3.205 9.79 2 8.25 2Z" fill="#0E0E0E"/>
</Svg>
)

  


export const CustomButton = ({ text, route }) => {

    const navigation = useNavigation();

    const handlePress = () => {
        // Navigate to the specified route when the button is pressed
        navigation.navigate(route);
    };

    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
        <Text style={styles.buttonText}>{text}</Text>
        <ArrowIcon />
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      fontSize:20,
      padding: 12,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 48,
      backgroundColor: '#A33100',
      gap: 8,
      alignSelf:"flex-end",
    },
    buttonText: {
      color: 'white',
      fontFamily: "Georama_500Medium"
    },
  });