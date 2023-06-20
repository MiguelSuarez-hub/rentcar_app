import { Navbar, Footer } from '@/components';
import './globals.css'

export const metadata = {
  title: 'RentCar App',
  description: 'Discover and rent the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body >
        <Navbar />
        {children}
        <Footer />  
      </body>
      
    </html>
  )
}
