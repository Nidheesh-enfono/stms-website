import Image from 'next/image'
import stmsLogo from '../images/logos/stmsLogo.png'

export function Logo() {
  return <Image src={stmsLogo} alt="logo" width={130} height={100} />
}
