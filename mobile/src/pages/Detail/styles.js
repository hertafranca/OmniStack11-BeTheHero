import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  body: {
    backgroundColor: "#62d9fb",
    flex: 1
    // paddingHorizontal: 24,
    // paddingTop: Constants.statusBarHeight + 5
  },

  container: {
    backgroundColor: "#FDCBBD",
    elevation: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: Constants.statusBarHeight + 20,
    paddingVertical: Constants.statusBarHeight + 5,
    marginVertical: Constants.statusBarHeight + 10,
    marginHorizontal: 22
  },

  header: {
    padding: (8, 0, 9, 0),
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    marginTop: 5,
    marginBottom: 20,
    marginHorizontal: 25
  },

  incident: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "rgb(255,235,230)",
    marginBottom: 10,
    marginHorizontal: 22,
    alignSelf: "stretch",
    elevation: 10
  },

  incidentPropertyTitle: {
    fontSize: 18,
    color: "#725CC2",
    fontWeight: "bold",
    padding: 5
  },

  incidentProperty: {
    fontSize: 16,
    color: "#725CC2",
    fontWeight: "500",
    padding: 5
  },

  incidentValue: {
    marginTop: 5,
    fontSize: 15,
    color: "#725CC2"
  },

  contactBox: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "rgb(255,235,230)",
    marginBottom: 10,
    marginHorizontal: 22,
    alignSelf: "stretch",
    elevation: 10
  },

  heroTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#DE2041",
    lineHeight: 30
  },

  heroDescription: {
    fontSize: 15,
    color: "#DE2041",
    marginTop: 10
  },

  actions: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  action: {
    backgroundColor: "#725CC2",
    borderRadius: 10,
    height: 35,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5
  },

  actionText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold"
  },

  footer: {
    width: 150,
    height: 150,
    backgroundColor: "#62d9fb",
    borderRadius: (75, 75),
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10
  },

  imgHeroes: {
    width: 100,
    height: 100
  }
});
