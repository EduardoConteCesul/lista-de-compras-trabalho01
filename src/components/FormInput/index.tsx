import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface PropsFormInput {
  placeHolder: string,
  value: string
  onChangeText: (text: string) => void,
  onPress: () => void,
}

export function FormInput({ placeHolder, onChangeText, onPress, value }: PropsFormInput) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeHolder}
        onChangeText={onChangeText}
        value={value}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image source={require('../../../assets/plus.png')} />
      </TouchableOpacity>
    </View>
  )
}