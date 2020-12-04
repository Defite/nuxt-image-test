module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                light: {
                    background: '#d5d6db'
                },
                dark: {
                    background: '#18181b'
                }
            },
            fontFamily: {
                'headings': ['Source Sans Pro', 'sans-serif'],
                'body': ['Open Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI',
                'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        h1: {
                            color: theme("colors.gray.700"),
                            fontFamily: theme("fontFamily.headings").join(", ")
                        },

                        h2: {
                            color: theme("colors.gray.700"),
                            fontFamily: theme("fontFamily.headings").join(", ")
                        }
                    }
                }
            })
        },
        container: (theme) => ({
            minHeight: '100%'
        })
    },
    variants: {
        typography: ["dark"],
    },
    plugins: [
        require('@tailwindcss/typography'),
    ]
}