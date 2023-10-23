import Image from 'next/image'
import AddUsers from './components/AddUsers'
import DisplayUsers from './components/DisplayUsers'

export default function Home() {
  return (
    <main>
      <AddUsers></AddUsers>
      <DisplayUsers></DisplayUsers>
    </main>
  )
}
