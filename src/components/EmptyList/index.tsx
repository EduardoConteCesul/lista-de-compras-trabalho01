import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/shopping_list.png")} />
      <Text style={styles.textFlatListPrimary}>Você ainda não tem produtos na lista de compra</Text>
      <Text style={styles.textFlatListSecundary}>Adicione produtos e organize sua lista de compras</Text>
    </View>
  )
}