require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remind honey guess clog bubble gaze'; 
let testAccounts = [
"0x3267537267494130be3270e006738fb047db02c5a03fd1fa5cff2a6a7f547718",
"0x8fafd1e06c16fbf8d510149a4f0c20c813fa649931de5183a9c3ed8d2be51813",
"0xea5e3a7f1f756e194254c07a9e2b55a8681c913bf27eff3ee49aacde22e3eed2",
"0x07eb36320a559d1c91df15c165d0d13dc35a6df40a3e49c76b9b0081a352de0e",
"0x230d4d7ad3194c9908b4bf78bea585633ebf58b70f682d36db02dae7ae9f3391",
"0xda0bf319664c118c08e2211a287d53cf1fdcf656bd2d1887b39d5d6994c6e0fb",
"0x2ae6ccec469a8ce0f4482b5bd02eb1c182aed95851ffb660139e56857f5f7f52",
"0x78834167a74c7006d44b24446e3dcb55746e845ae082e8365eee9a450482a13a",
"0x6bef01b6237705f62a3f6c3b7b7a8362c85d132fa8ed3b8067ea2f3ea73a9d7a",
"0xaf7dbf79ada9ceea06e8d222588eb0cd3b3e8dc3cb26088f87c080ba12feef3f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


