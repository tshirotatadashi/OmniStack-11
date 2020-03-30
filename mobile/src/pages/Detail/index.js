import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import * as MailComposer from "expo-mail-composer";

import logoImg from "../../assets/logo.png";
import styles from "./style";

export default function Detail() {
  const navigation = useNavigation();
  const incident = {
    title: "Gatinho perdido",
    value: 120.5
  };
  const message = `Olá, estou entrando em contato, pois gostaria de ajudar no caso: "${incident.title}" com o valor de R$: ${incident.value}`;
  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: ["mail@gmail.com"],
      body: message
    });
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=5567999998888&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentPropert, { marginTop: 0 }]}>ONG: </Text>
        <Text style={styles.incidentValue}>APAE</Text>

        <Text style={styles.incidentPropert}>Caso: </Text>
        <Text style={styles.incidentValue}>Caso Teste</Text>

        <Text style={styles.incidentPropert}>Valor: </Text>
        <Text style={styles.incidentValue}>R$: 50,00</Text>
      </View>
      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>e-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
