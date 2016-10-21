const HtmlWebpackPlugin = require('html-webpack-plugin');

const page = (name) => new HtmlWebpackPlugin({
    inject: false,
    template: `src/templates/${name}.hbs`,
    filename: `../${name}.html`
});

module.exports = {
    plugins: [
        page('index'),
        page('api'),
        page('examples'),
        page('rules'),
        page('localization')
    ]
};
