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
        <ScrollView>
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
            <Text style={styles.boldWhiteText}>
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
                  <View key={bankOption.text} style={styles.optionBox}>
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
            style={{ height: 74, marginTop: 24, marginBottom: 24 }}
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

          <View style={styles.mainOptions}>
            <View style={styles.mainOptionCard}>
              <View style={styles.mainOptionCardTextBox}>
                <Text style={{ fontWeight: 'bold' }}>Empréstimo</Text>
                <Text>Valor disponível de até R$ 25.000,00</Text>
              </View>
              <Image
                source={require('./assets/right-arrow.png')}
              />
            </View>

            <View style={styles.mainOptionCard}>
              <View style={styles.mainOptionCardTextBox}>
                <Text style={{ fontWeight: 'bold' }}>Investimento</Text>
                <Text>
                  O jeito Nu de investir: sem asteriscos.
                </Text>
              </View>
              <Image
                source={require('./assets/right-arrow.png')}
              />
            </View>

            <View style={styles.insuranceBox}>
              <Text style={styles.boldBlackText}>Seguros</Text>
              <Text style={{ marginBottom: 16 }}>Proteção para você cuidar do que importa</Text>
              <TouchableOpacity style={styles.insuranceButton}>
                <View style={{ 
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 14
                }}>
                  <Image
                   source={require('./assets/heart.png')}
                  />

                  <Text style={styles.boldBlackText}>Seguro Vida</Text>
                </View>
                <Text style={styles.boldPurpleText}>Conhecer</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.insuranceButton}>
                <View style={{ 
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 14
                }}>
                  <Image
                   source={require('./assets/heart.png')}
                  />

                  <Text style={styles.boldBlackText}>Seguro Celular</Text>
                </View>
                <Text style={styles.boldPurpleText}>Conhecer</Text>
              </TouchableOpacity>

              <Text style={styles.boldBlackText}>
                Descubra mais
              </Text>

              <View style={{
                height: 230,
              }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View 
                  style={{
                    flexDirection: 'row',
                    gap: 14
                  }}
                  >
                                      <View style={styles.card}>
                    <Image
                      source={require('./assets/card-1.png')}
                    />
                    <View
                      style={{ 
                        paddingVertical: 10,
                        paddingLeft: 10
                      }}
                    >
                      <Text style={styles.boldBlackText}>Parcele compras no app</Text>
                      <Text style={{ marginVertical: 10 }}>Descontos em compras à vista no crédito, controle total sobr...</Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: '#830BCC',
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingHorizontal: 4,
                          paddingVertical: 6,
                          borderRadius: 10,
                          width: 80
                        }}
                      >
                        <Text style={styles.boldWhiteText}>Conhecer</Text>
                      </TouchableOpacity>
      
                    </View>
                  </View>

                  <View style={styles.card}>
                    <Image
                      source={require('./assets/card-1.png')}
                    />
                    <View
                      style={{ 
                        paddingVertical: 10,
                        paddingLeft: 10
                      }}
                    >
                      <Text style={styles.boldBlackText}>Parcele compras no app</Text>
                      <Text style={{ marginVertical: 10 }}>Descontos em compras à vista no crédito, controle total sobr...</Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: '#830BCC',
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingHorizontal: 4,
                          paddingVertical: 6,
                          borderRadius: 10,
                          width: 80
                        }}
                      >
                        <Text style={styles.boldWhiteText}>Conhecer</Text>
                      </TouchableOpacity>
      
                    </View>
                  </View>
                  </View>                  
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
