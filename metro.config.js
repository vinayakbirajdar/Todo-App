// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('@react-native/metro-config').MetroConfig}
//  */
// const config = {};

// // metro.config.js
// const {
//     wrapWithReanimatedMetroConfig,
//   } = require('react-native-reanimated/metro-config');

//   module.exports = wrapWithReanimatedMetroConfig(config);

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);


const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

// Get the default Metro configuration
const defaultConfig = getDefaultConfig(__dirname);

// Custom Metro configuration
const customConfig = {};

// Wrap with Reanimated Metro Config
const reanimatedConfig = wrapWithReanimatedMetroConfig(customConfig);

// Merge with the default Metro configuration
module.exports = mergeConfig(defaultConfig, reanimatedConfig);