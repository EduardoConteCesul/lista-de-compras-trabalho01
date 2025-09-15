import { useState } from "react";
import { Alert, FlatList, Image, Text, View } from "react-native";
import { FormInput } from "../../components/FormInput";
import { Header } from "../../components/Header";
import { ItemList } from "../../components/ItemList";
import { styles } from "./styles";
import { EmptyList } from "../../components/EmptyList";
import { CounterItemList } from "../../components/CounterItemList";

export function Home() {

  const [product, setProduct] = useState("")
  const [products, setProducts] = useState<string[]>([])

  function handleAddProduct() {
    if (products.includes(product)) {
      Alert.alert("Produto já cadastrado!")
      return
    }
    setProducts([...products, product]);
    setProduct("")
  }

  function handleRomoveProduct(name: string) {
    setProducts(products.filter(product => product != name))
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.box}>
        <FormInput
          placeHolder="Adicione um novo produto"
          onChangeText={(text) => setProduct(text)}
          onPress={handleAddProduct}
          value={product}
        />
        <View style={styles.textBoxFlatList}>

          <View style={styles.containerTextBox}>
            <CounterItemList
              name="Produtos"
              counter={products.length}
              textColor="primary"
            />
            <CounterItemList
              name="Produtos"
              counter={products.length}
              textColor="secundary"
            />
          </View>

          <View style={styles.containerFlatList}>
            <FlatList
              contentContainerStyle={styles.list}
              data={products}
              keyExtractor={(item) => item}
              renderItem={({ item }) =>
                <ItemList
                  name={item}
                  onRemove={() => handleRomoveProduct(item)}
                />}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => <EmptyList />}
              centerContent
            />
          </View>
        </View>
      </View>
    </View>
  )
}