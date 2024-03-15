import { ReactNode } from 'react'
import * as header from '../components/header'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header.Header />
      {children}
    </div>
  )
}
