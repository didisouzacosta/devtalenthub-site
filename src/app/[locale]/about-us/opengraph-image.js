import { ImageResponse } from 'next/server'
 
export const runtime = 'edge'
 
export const alt = 'About DevTalentHub'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        About DevTalentHub
      </div>
    ),
    {
      ...size
    }
  )
}