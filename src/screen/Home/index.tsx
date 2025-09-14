import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { FormInput } from "../../components/FormInput";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import { ItemList } from "../../components/ItemList";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.box}>
        <FormInput
          placeHolder="Adicione um novo produto"
        />
        <View style={styles.textBoxFlatList}>

          <View style={styles.containerTextBox}>
            <View style={styles.textBox}>
              <Text style={styles.textProducts}>Produtos</Text>
              <Text style={styles.textCount}>0</Text>
            </View>

            <View style={styles.textBox}>
              <Text style={styles.textFinalizados}>Finalizados</Text>
              <Text style={styles.textCount}>0</Text>
            </View>
          </View>

          <View style={styles.containerFlatList}>
            <FlatList
              contentContainerStyle={styles.list}
              data={[]}
              keyExtractor={(item) => item}
              renderItem={({ item }) => <Text id={item}>Teste</Text>}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() =>
                <View style={styles.textList}>
                  <Image source={require("../../../assets/shopping_list.png")} />
                  <Text style={styles.textFlatListPrimary}>Você ainda não tem produtos na lista de compra</Text>
                  <Text style={styles.textFlatListSecundary}>Adicione produtos e organize sua lista de compras</Text>
                </View>
              }
              centerContent
            />
          </View>
          <ItemList />
          {/* <View style={styles.testeView}>
            <TouchableOpacity style={styles.testeOpacity}>
              <Image
                source={require('../../../assets/Layer.png')}
              />
              <Text>Teste</Text>
              <Image
                source={require('../../../assets/lixo.png')}
              />
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </View>
  )
}