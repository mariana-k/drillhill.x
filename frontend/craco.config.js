// craco.config.js
module.exports = {
    style: {
        postcss: {
            plugins: [
                /* eslint-disable global-require */
                require('tailwindcss'),
                require('autoprefixer'),
                /* eslint-enable global-require */
            ],
        },
    },
};
