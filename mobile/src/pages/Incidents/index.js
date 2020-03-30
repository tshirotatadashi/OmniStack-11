import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import api from "../../services/api";
import logoImg from "../../assets/logo.png";
import styles from "./style";

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const navigation = useNavigation();

  function navigateToDetail(incident) {
    navigation.navigate("Detail", { incident });
  }

  async function loadIncidents() {
    const { data, headers } = await api.get("incidents");
    setIncidents(data);
    setTotal(headers["x-total-count"]);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <FlatList
        data={incidents}
        style={styles.incidentsList}
        keyExtractor={({ id }) => String(id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentPropert}>ONG</Text>
            <Text style={styles.incidentValue}>{item.name}</Text>

            <Text style={styles.incidentPropert}>Caso</Text>
            <Text style={styles.incidentValue}>{item.title}</Text>

            <Text style={styles.incidentPropert}>Valor</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(item.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(item)}
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
