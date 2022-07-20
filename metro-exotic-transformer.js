const { createExoticTransformer } = require('@expo/metro-config/transformer');

module.exports = createExoticTransformer({
  transpileModules: ['@stripe/stripe-react-native'],
  // You can uncomment the following lines to add any extra node_modules paths in a monorepo:
  //   nodeModulesPaths: [
  //     'node_modules',
  //     // Generally you'll add this when your config is in `apps/my-app/metro.config.js`
  //     '../../node_modules',
  //     // If you have custom packages in a `packages/` folder
  //     '../../packages',
  //   ],
});