require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'good entire sugar tooth film ring remain snow grace casino tail trumpet'; 
let testAccounts = [
"0x5fa863457516e5acd04ac6dd090a4bf01a1cbb6db3f8184476717450b1994957",
"0xb05547e370f425b62be892d639761486f965c2342308017faae6fb7187b85550",
"0x31b5d020d90294a089b4dd78ae0f4ed775997aafb6a4dfbf6c9a87883b6eaee5",
"0x4a46d71c7a4146265c7e235425f16085b80409fd350fc09f55b1d40cce839381",
"0x634cc4d67ef627925788f6c06662ba774b3addafb20ca9ed683d8363a9d4c60e",
"0x9d21cce0d1bdc44e1bfb39ed91c13c7f3e6740bde4ab50b388854672f6253a65",
"0x4385049da45ca060dfef9aa36b5e59aa32722e090b93dc7a8b973fc97be9e934",
"0x87de8736617c8924a2069dc576c1a16e33096124d9683c2a4ccba1475c4fb778",
"0x682f1261a2d1f51712db6ea787f2aff29a05e50c0a4eaa8bde2701915bb2e29a",
"0xc665932d68a5a47cb46fd393b518c1bc82c8c7db9ed47c43521fff2cb423a58e"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

