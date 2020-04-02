import React, { useState, useEffect } from "react";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import { format } from "../../utils/format";
import api from "../../services/api";

import logoImg from "../../assets-app-mobile/logo.png";
import heroesSmallImag from "../../assets-app-mobile/heroesSmall.png";

import styles from "./styles";

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDetail(incident) {
    navigation.navigate("Detail", { incident });
  }

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get("incidents", {
      params: { page }
    });

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers["x-total-count"]);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg} />
          <Text style={styles.headersText}>
            Total de <Text style={styles.headersTextBold}>{total} casos</Text>
          </Text>
        </View>

        <View style={styles.neck}>
          <Text style={styles.title}>Bem-Vindo!</Text>

          <View style={styles.neckHeroes}>
            <Image source={heroesSmallImag} style={styles.imgHeroes} />
          </View>
        </View>

        <Text style={styles.description}>
          Escolha um dos casos abaixo e salve o dia:
        </Text>

        <FlatList
          data={incidents}
          style={styles.incidentList}
          keyExtractor={incident => String(incident.id)}
          showsVerticalScrollIndicator={false}
          onEndReached={loadIncidents}
          onEndReachedThreshold={0.2}
          renderItem={({ item: incident }) => (
            <View style={styles.incident}>
              <Text style={styles.incidentPropertyTitle}>ONG:</Text>
              <Text style={styles.incidentValue}>{incident.ong.name}</Text>

              <Text style={styles.incidentPropertyTitle}>Caso:</Text>
              <Text style={styles.incidentValue}>{incident.title}</Text>

              <Text style={styles.incidentPropertyTitle}>Valor:</Text>
              <Text style={styles.incidentValue}>{format(incident.value)}</Text>

              <TouchableOpacity
                style={styles.detailButton}
                onPress={() => navigateToDetail(incident)}
              >
                <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                <Feather name="arrow-right" size={16} color="#E02041" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}
