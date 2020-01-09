const path = require('path')
const webpack = require('webpack')

const config = (env, options) => {
    return {
        context: __dirname,
        entry: path.resolve(__dirname, 'index.ts'),
        output: {
            filename: `bundle.js`,
            path: path.resolve(__dirname, 'build'),
        },
        stats: {
            colors: true,
            modules: true,
            reasons: true,
            errorDetails: true,
        },
        module: {
            rules: [
                {
                    test: /\.(t|j)sx?$/,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true // disable type checker
                        }
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json']
        }
    }
}
module.exports = config
