/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, _) => {
        config.module.rules.push({
            test: /\.(frag|vert|glsl)$/,
            exclude: /node_modules/,
            use: [
                'raw-loader',
                'glslify-loader'
            ]
        })

        return config
    }
}

module.exports = nextConfig
