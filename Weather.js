import React from "react";
import propTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#00416A", "#E4E5E6"],
    title: "Thunder Storm ⚡️",
    subtitle: "다예야 우산챙겨!!!"
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#00416A", "#E4E5E6"],
    title: "Drizzle 🌧",
    subtitle: "다예야 우산챙겨!!!"
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#373B44", "#4286f4"],
    title: "Rain 🌧",
    subtitle: "다예야 우산챙겨!!!"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#2980B9", "#6DD5FA"],
    title: "Snow 😻",
    subtitle: "다예야 우산챙겨!!!"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#7F7FD5", "#86A8E7", "#91EAE4"],
    title: "Cloudy 😿",
    subtitle: "다예야 앞에보고 다녀!!"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#74ebd5", "#ACB6E5"],
    title: "Clear 🤗",
    subtitle: "다예야 앞에보고 다녀!!"
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Mist 😳",
    subtitle: ""
  },
  Smoke: {
    iconName: "weather-partlycloudy",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Smoke 😷",
    subtitle: "다예야 마스크 챙겨!!!"
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Haze 😷",
    subtitle: ""
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Dust 😷",
    subtitle: "다예야 마스크 챙겨!!!"
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Fog 😳",
    subtitle: "다예야 안개꼈다 앞에봐!!"
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Sand 😷",
    subtitle: "다예야 마스크 챙겨!!!"
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Ash 😷",
    subtitle: "다예야 마스크 챙겨!!!"
  },
  Squall: {
    iconName: "weather-hail",
    gradient: ["#373B44", "#4286f4"],
    title: "Squall 😷",
    subtitle: "다예야 우산챙겨!!"
  },
  Tornado: {
    iconName: "weather-hurricane",
    gradient: ["#0F2027", "#203A43", "#f64f59"],
    title: "Tornado 😱",
    subtitle: "다예야 집밖에 나가지마!!"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons
            size={86}
            name={weatherOptions[condition].iconName}
            color="white"
          />
          <Text style={styles.temp}>{Math.floor(temp)}°</Text>
        </View>
        <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subTitle}>
            {weatherOptions[condition].subtitle}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clouds",
    "Clear",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 32,
    color: "white"
  },
  title: {
    color: "white",
    fontSize: 55,
    fontWeight: "500",
    marginBottom: 10
  },
  subTitle: {
    color: "white",
    fontSize: 22
  },
  textContainer: {
    flex: 1,
    alignItems: "flex-start"
  }
});
