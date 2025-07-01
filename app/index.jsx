import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={[styles.container , {backgroundColor: "skyblue"}]}>
      <Image source={require("../assets/mypicture.jpg")} 
      style={styles.profile}
      resizeMode="contain"
      />
      <View style={styles.view}>
        <Text style={styles.title}>Panuwat Thammabut</Text>
        <Text style={styles.title}>653450099-8</Text>
        <Text style={styles.subtitle}>Branch : Computer Science</Text>
        <Text style={styles.subtitle}>Course : Computer and Information Science</Text>
        <Text style={styles.text}>Khon Kaen University</Text>
        <Text style={styles.text}>Skill : </Text>
        <Text style={styles.text}>Python Java C# JavaScript TypeScript</Text>
      </View>
    </View>
  );
};

export default Home; 

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: "blue",  
    alignItems: "center",  
    justifyContent: "center",  
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 15,
    borderWidth: 2,
    padding: 3,
    margin: 1
  },
  view: {
    margin: 3,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "blue",
    backgroundColor: "white"
  }
});