module.exports = {
  reactStrictMode: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.[jt]sx?$/,
      include: [/node_modules(.*[/\\])+typeorm/],
      type: 'javascript/auto',
      use: 'babel-loader',
    });

    return config;
  },
};
