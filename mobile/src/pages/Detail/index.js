import React from "react";
import { Feather } from "@expo/vector-icons";

import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView
} from "react-native";
import * as MailComposer from "expo-mail-composer";

import { format } from "../../utils/format";

import logoImg from "../../assets-app-mobile/logo.png";
import heroesSmallImag from "../../assets-app-mobile/heroesSmall.png";

import styles from "./styles";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá, ${
    incident.ong.name
  }!Estou entrando em contato pois gostaria de ajudar no caso:${
    incident.title
  } com o valor de ${format(incident.value)}.`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso:${incident.title}`,
      recipients: [incident.ong.email],
      body: message
    });
  }

  function sendWhatsApp() {
    Linking.openURL(
      `https://api.whatsapp.com/send?phone=${incident.ong.whatsapp}&text=${message}`
    );
  }

  return (
    <ScrollView style={styles.body}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg} />

          <TouchableOpacity onPress={navigateBack}>
            <Feather name="arrow-left" size={28} color="#E82041" />
          </TouchableOpacity>
        </View>
        <View style={styles.incident}>
          <Text style={[styles.incidentPropertyTitle, { marginTop: 0 }]}>
            ONG:
          </Text>
          <Text style={styles.incidentValue}>
            {incident.ong.name} - {incident.ong.city}/{incident.ong.uf}
          </Text>

          <Text style={styles.incidentPropertyTitle}>Caso:</Text>
          <Text style={styles.incidentValue}>{incident.title}</Text>

          <Text style={styles.incidentPropertyTitle}>Valor:</Text>
          <Text style={styles.incidentValue}>{format(incident.value)}</Text>
        </View>

        <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia!</Text>
          <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

          <Text style={styles.heroDescription}>Entre em contato:</Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
              <Text style={styles.actionText}>WhatsApp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.action} onPress={sendMail}>
              <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <Image source={heroesSmallImag} style={styles.imgHeroes} />
        </View>
      </View>
    </ScrollView>
  );
}
