import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { bankOptions } from './bank-options';

export default function App() {
  return (
    <>
      <StatusBar 
        style="dark"
        translucent
        backgroundColor='transparent'
      />

      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerIconBox}>
            <Image
              source={require('./assets/profile-circle.png')}
            />

            <View style={styles.headerRightIconBox}>
              <Image
                source={require('./assets/view.png')}
              />

              <Image
                source={require('./assets/help.png')}
              />

              <Image
                source={require('./assets/invite.png')}
              />
            </View>
          </View>
          <Text style={styles.boldText}>
            Olá, Amigo
          </Text>
        </View>

        <View style={styles.accountContainer}>
          <View style={styles.accountSummary}>
            <Text style={styles.accountSummaryText}>
              Conta
            </Text>
            <Text style={styles.accountSummaryValueText}>
              R$ 3.259,75
            </Text>
          </View>

          <Image 
            source={require('./assets/right-arrow.png')}
          />
        </View>

          <View
            style={{ height: 120 }}
          >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.bankOptions}>
                {bankOptions.map(bankOption => (
                  <View style={styles.optionBox}>
                    <View style={styles.circleBox}>
                      <Image 
                        source={bankOption.iconPath}
                      />
                    </View>
                    <Text style={styles.optionText}>{bankOption.text}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>

        <TouchableOpacity style={styles.cardsButton}>
          <Image
            source={require('./assets/card.png')}
          />

          <Text style={styles.cardsButtonText}>
            Meus Cartões
          </Text>
        </TouchableOpacity>

        <View
            style={{ height: 74, marginTop: 24 }}
          >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.infoBox}>
                <TouchableOpacity style={styles.infoCardButton}>
                  <Text>
                    Você tem até <Text style={styles.infoPurpleCardText}>R$ 12.500,00</Text> disponíveis para empréstimo.
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.infoCardButton}>
                  <Text>
                    Você tem até <Text style={styles.infoPurpleCardText}>R$ 12.500,00</Text> disponíveis para empréstimo.
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
    </>
  );
}
