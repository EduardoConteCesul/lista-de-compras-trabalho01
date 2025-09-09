import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
// import imageTrash from "../../../assets/trash.png"

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
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  )
}