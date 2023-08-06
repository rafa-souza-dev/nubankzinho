import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, ScrollView } from 'react-native';
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

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: 'row' }}
        >
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
    </>
  );
}
