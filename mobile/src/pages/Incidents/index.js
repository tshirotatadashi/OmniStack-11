import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import logoImg from "../../assets/logo.png";
import styles from "./style";

export default function Incidents() {
  const navigation = useNavigation();
  function navigateToDetail() {
    navigation.navigate("Detail");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <FlatList
        data={[1, 2, 3, 4, 5]}
        style={styles.incidentsList}
        keyExtractor={id => String(id)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentPropert}>ONG</Text>
            <Text style={styles.incidentValue}>APAE</Text>

            <Text style={styles.incidentPropert}>Caso</Text>
            <Text style={styles.incidentValue}>Caso Teste</Text>

            <Text style={styles.incidentPropert}>Valor</Text>
            <Text style={styles.incidentValue}>R$: 50,00</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
