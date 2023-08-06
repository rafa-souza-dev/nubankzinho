import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF'
    },
    headerContainer: {
      backgroundColor: '#830AD1',
      paddingHorizontal: 16,
      paddingTop: 40,
      height: 130,
      gap: 15
    },
    headerIconBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerRightIconBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 20,
    },
    boldText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#FFF'
    },
    accountContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      paddingTop: 16,
      paddingLeft: 16,
      paddingRight: 24
    },
    accountSummary: {
      gap: 4
    },
    accountSummaryText: {
      fontSize: 16,
      fontWeight: '500',
    },
    accountSummaryValueText: {
      fontSize: 16,
      fontWeight: '600',
    },
    bankOptions: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      paddingTop: 24,
      gap: 16,
      alignItems: 'center'
    },
    optionBox: {
      alignItems: 'center',
      width: 75,
      height: 100,
      gap: 6
    },
    optionText: {
      fontSize: 14,
      textAlign: 'center',
      fontWeight: '500',
      flexShrink: 0
    },
    circleBox: {
      backgroundColor: "#F0F1F5",
      alignItems: 'center',
      justifyContent: 'center',
      width: 56,
      height: 56,
      borderRadius: 50,
      padding: 16
    },
});
