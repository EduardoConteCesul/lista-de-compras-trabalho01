import { TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <TouchableOpacity style={styles.button} onPress={() => console.log("Clicado")}>
        
      </TouchableOpacity>

    </View>
  )
}