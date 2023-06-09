import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <header className='header'>header</header>
          {children}
          <footer className='footer'>footer</footer>
        </div>
      </body>
    </html>
  )
}
