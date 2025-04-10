import React from 'react';
import { FaCopy } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  const networks = [
    {
      name: 'BSC',
      tokenName: 'Blitz Network',
      symbol: 'BLITZ',
      decimals: 4,
      contract: '0x58bf553c0cF81Ae0c33E0A6A13EA00Cdf510B9D0'
    },
    {
      name: 'Polygon',
      tokenName: 'Blitz Network',
      symbol: 'BLITZ',
      decimals: 4,
      contract: '0x58bf553c0cF81Ae0c33E0A6A13EA00Cdf510B9D0'
    }
  ];

  const steps = [
    {
      text: t('steps.1'),
      image: 'https://i.ibb.co/dsp2cTmC/IMG-20250411-014622.jpg'
    },
    {
      text: t('steps.2'),
      image: 'https://i.ibb.co/tT3CzSXd/IMG-20250411-014638.jpg'
    },
    {
      text: t('steps.3'),
      image: 'https://i.ibb.co/rG49WRtL/IMG-20250411-014652.jpg'
    },
    {
      text: t('steps.4'),
      image: 'https://i.ibb.co/zhF1J8Rv/IMG-20250411-014705.jpg'
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(t('copied'));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          {t('title')}
        </h1>

        <div className="space-y-8">
          {networks.map((network) => (
            <div key={network.name} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t('networkTitle', { network: network.name })}
              </h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">{t('tokenName')}</p>
                  <p className="mt-1 text-lg">{network.tokenName}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">{t('symbol')}</p>
                  <p className="mt-1 text-lg">{network.symbol}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">{t('decimals')}</p>
                  <p className="mt-1 text-lg">{network.decimals}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">{t('contractAddress')}</p>
                  <div className="mt-1 flex items-center space-x-2">
                    <code className="text-sm bg-gray-100 p-2 rounded flex-1 break-all">
                      {network.contract}
                    </code>
                    <button
                      onClick={() => copyToClipboard(network.contract)}
                      className="p-2 text-gray-600 hover:text-gray-900"
                    >
                      <FaCopy />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-medium text-gray-900">{t('stepByStep')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {steps.map((step, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <img 
                        src={step.image} 
                        alt={`Step ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg mb-3"
                      />
                      <p className="text-gray-700">
                        <span className="font-semibold">{index + 1}.</span> {step.text}
                      </p>
                    </div>
                  ))}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <span className="font-semibold">5.</span> {t('steps.5', { network: network.name })}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <span className="font-semibold">6.</span> {t('steps.6')}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <span className="font-semibold">7.</span> {t('steps.7')}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700">
                      <span className="font-semibold">8.</span> {t('steps.8')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
