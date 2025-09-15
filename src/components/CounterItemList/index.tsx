import { Text, View } from "react-native";
import { styles } from "./styles";

interface PropsCounterItemList {
  name: string,
  counter: number
  textColor: "primary" | "secundary"
}

export function CounterItemList({ counter, name, textColor }: PropsCounterItemList) {
  return (
    <View style={styles.container}>
      <Text style={textColor == "primary" ? styles.textPrimary : styles.textSecundary}>{name}</Text>
      <Text style={styles.textCount}>{counter}</Text>
    </View>
  )
}