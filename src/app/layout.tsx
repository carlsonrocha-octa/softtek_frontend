import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portal de Pedidos de Insumos',
  description: 'Portal para criação de pedidos de insumos para rede de farmácias',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
