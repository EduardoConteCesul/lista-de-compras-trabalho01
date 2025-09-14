import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface PropsFormInput {
  placeHolder: string,
}

export function FormInput(props: PropsFormInput) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeHolder}
      />
      <TouchableOpacity style={styles.button}>
        <Image source={require('../../../assets/trash.png')} />
      </TouchableOpacity>
    </View>
  )
}