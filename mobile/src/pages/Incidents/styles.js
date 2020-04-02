import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  body: {
    backgroundColor: "#62d9fb",
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  container: {
    backgroundColor: "#FDCBBD",
    elevation: 15,
    borderRadius: 15,
    paddingVertical: Constants.statusBarHeight + 5,
    marginBottom: 15,
    flex: 1
  },

  header: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 22
  },

  headersText: {
    color: "#E02041",
    fontSize: 15
  },

  headersTextBold: {
    fontWeight: "bold",
    color: "#725CC2"
  },

  neck: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
    marginBottom: 15,
    marginTop: 10
  },

  title: {
    fontSize: 30,
    color: "#E02041",
    fontWeight: "bold"
  },

  neckHeroes: {
    width: 113,
    height: 113,
    backgroundColor: "#62d9fb",
    borderRadius: (75, 75),
    elevation: 10
  },

  imgHeroes: {
    width: 90,
    height: 90,
    marginLeft: 14,
    marginTop: 10
  },

  description: {
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 24,
    color: "#725CC2",
    paddingHorizontal: 22
  },

  incidentLists: {
    marginTop: 32
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "rgb(255,235,230)",
    marginBottom: 16,
    marginHorizontal: 22,
    elevation: 10
  },

  incidentPropertyTitle: {
    fontSize: 16,
    color: "#725CC2",
    fontWeight: "bold",
    padding: 5
  },

  incidentProperty: {
    fontSize: 14,
    color: "#725CC2",
    fontWeight: "500",
    padding: 5
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#725CC2"
  },

  detailButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  detailButtonText: {
    color: "#E02041",
    fontSize: 15,
    fontWeight: "bold"
  }
});
