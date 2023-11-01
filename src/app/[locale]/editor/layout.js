export const metadata = {
    title: 'Editor - DevTalent Hub',
    description: 'Create and edit the content',
    robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
}

export default function EditorLayout({ children }) {
    return (
        <section>
            {children}
        </section>
    )
}