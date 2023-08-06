import { ImageSourcePropType } from "react-native"

type BankOption = {
    iconPath: ImageSourcePropType,
    text: string
}

export const bankOptions: BankOption[] = [
    {
        iconPath: require('./assets/pix.png'),
        text: 'Área Pix'
    },
    {
        iconPath: require('./assets/bars.png'),
        text: 'Pagar'
    },
    {
        iconPath: require('./assets/borrowed.png'),
        text: 'Pegar Emprestado'
    },
    {
        iconPath: require('./assets/transfer.png'),
        text: 'Transferir'
    },
    {
        iconPath: require('./assets/deposit.png'),
        text: 'Depositar'
    },
    {
        iconPath: require('./assets/transfer.png'),
        text: 'Cobrar'
    },
    {
        iconPath: require('./assets/heart.png'),
        text: 'Doação'
    },
]
