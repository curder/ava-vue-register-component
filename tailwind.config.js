module.exports = {
    purge: {
        enabled: true,
        content: ['./src/**/*.vue'],
    },
    theme: {
        extend: {}
    },
    variants: {},
    plugins: [
        require('@tailwindcss/custom-forms'),
    ]
}
