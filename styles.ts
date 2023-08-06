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
});
