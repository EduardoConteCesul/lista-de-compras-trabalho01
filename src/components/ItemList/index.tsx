import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function ItemList() {
  return (
    <View style={styles.testeView}>
      <TouchableOpacity style={styles.testeOpacity}>
        <Image
        style={styles.imagePrimary}
          source={require('../../../assets/Layer.png')}
        />
        <Text style={styles.textTest}>Teste</Text>
        <Image
          source={require('../../../assets/lixo.png')}
        />
      </TouchableOpacity>
    </View>
  )
}