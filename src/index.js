const plugin = require('tailwindcss/plugin');

const styles = {
    button: require('./styles/button')
};

module.exports = plugin.withOptions(
    ({ components = ['button'] } = {}) => {
        return function (context) {

            components.forEach(component => {
                styles[component](context);
            });
        };
    }
);
