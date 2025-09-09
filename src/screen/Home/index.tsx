import { Image, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { FormInput } from "../../components/FormInput";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.box}>
        <FormInput
          placeHolder="Adicione um novo produto"
        />
        <View style={styles.textBoxFlatList}>

          <View style={styles.textBox}>
            <Text style={styles.textProducts}>Produtos</Text>
            <Text style={styles.textCount}>0</Text>
          </View>

          <View style={styles.textBox}>
            <Text style={styles.textFinalizados}>Finalizados</Text>
            <Text style={styles.textCount}>0</Text>
          </View>
        </View>
      </View>
    </View>
  )
}