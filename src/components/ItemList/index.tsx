import { useState } from "react";
import { GestureResponderEvent, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ItemListProps {
  name: string
  onRemove: (event: GestureResponderEvent) => void
}

export function ItemList({ name, onRemove }: ItemListProps) {

  const [selected, setSelected] = useState(false)

  return (
    <View style={styles.testeView}>
      <TouchableOpacity style={styles.testeOpacityItem} onPress={() => setSelected(!selected)}>
        {selected ?

          <Image
            source={require('../../../assets/checked.png')}
          />
          :
          <Image
            source={require('../../../assets/Layer.png')}
          />
        }
        <Text style={selected ? styles.textSeleted : styles.text} >{name}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.testeOpacityRemoveItem} onPress={onRemove}>
        <Image
          source={require('../../../assets/lixo.png')}
        />
      </TouchableOpacity>
    </View>
  )
}