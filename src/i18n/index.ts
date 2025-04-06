import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: 'Guide to Adding Blitz Token to Trust Wallet',
      networkTitle: 'Adding Blitz Token for {{network}} Network',
      tokenName: 'Token Name',
      symbol: 'Symbol',
      decimals: 'Decimals',
      contractAddress: 'Contract Address',
      copied: 'Address copied!',
      stepByStep: 'Step by Step Guide:',
      steps: {
        1: 'Open your Trust Wallet app',
        2: 'Click on the settings icon in the top right corner',
        3: 'Click on "Tokens"',
        4: 'Click on the "+" icon in the top right corner',
        5: 'Select {{network}} as the network',
        6: 'Paste the contract address',
        7: 'Token name, symbol and decimals will be filled automatically',
        8: 'Click "Save" to complete the process'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;