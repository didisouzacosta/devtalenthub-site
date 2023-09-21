import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export const alt = 'About DevTalentHub'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default function Image({ params: { slug } }) {
    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '16px',
                    backgroundImage: 'linear-gradient(to bottom, #ffffff, #fbfbfb, #f7f7f7, #f4f4f4, #f0f0f0)',
                    width: '100%',
                    height: '100%'
                }}
            >
                <img
                    style={{
                        borderRadius: '4px',
                        backgroundColor: 'white'
                    }}
                    src="https://www.devtalenthub.com/_next/image?url=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FC560BAQHuoq0NSYVt-g%2Fcompany-logo_100_100%2F0%2F1658520019041%3Fe%3D1702512000%26v%3Dbeta%26t%3DhQfB67deKTbPdKiKREtMGbBNxvkQ0ph1_qmZftgd6U8&w=64&q=75"
                    alt="Durable"
                    height="30%"
                />
                <h1>
                    Desenvolvedor iOS Sênior/Pleno (Remoto)
                </h1>
                <p>
                    Swift • Sênior / Pleno
                </p>
                <h3
                    style={{
                        marginTop: 'auto'
                    }}
                >
                    Picpay
                </h3>
            </div>
        ),
        {
            ...size
        }
    )
}