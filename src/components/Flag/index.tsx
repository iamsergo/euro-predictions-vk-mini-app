import React from 'react'

import { Avatar } from '@vkontakte/vkui'

import ITA from '../../assets/flags/ITA.webp'
import TUR from '../../assets/flags/TUR.png'
import SUI from '../../assets/flags/SUI.png'
import WAL from '../../assets/flags/WAL.png'
import RUS from '../../assets/flags/RUS.webp'
import BEL from '../../assets/flags/BEL.png'
import DEN from '../../assets/flags/DEN.png'
import FIN from '../../assets/flags/FIN.png'
import NED from '../../assets/flags/NED.png'
import UKR from '../../assets/flags/UKR.png'
import AUS from '../../assets/flags/AUS.png'
import MAC from '../../assets/flags/MAC.png'
import ENG from '../../assets/flags/ENG.png'
import CRO from '../../assets/flags/CRO.png'
import CZE from '../../assets/flags/CZE.png'
import SCO from '../../assets/flags/SCO.png'
import SPA from '../../assets/flags/SPA.png'
import POL from '../../assets/flags/POL.png'
import SWE from '../../assets/flags/SWE.png'
import SLO from '../../assets/flags/SLO.png'
import GER from '../../assets/flags/GER.png'
import FRA from '../../assets/flags/FRA.webp'
import POR from '../../assets/flags/POR.png'
import HUN from '../../assets/flags/HUN.png'

interface FlagProps
{
  country: string
  winner?: boolean
  className?: string
}

const Flag: React.FC<FlagProps> = ({
  country,
  winner,
  className,
}) => {
  let src = ''

  switch(country.slice(0,3))
  {
    case 'ITA':
      src = ITA
      break
    
    case 'TUR':
      src = TUR
      break
    
    case 'SUI':
      src = SUI
      break
    
    case 'WAL':
      src = WAL
      break
    
    case 'RUS':
      src = RUS
      break
    
    case 'BEL':
      src = BEL
      break
    
    case 'DEN':
      src = DEN
      break
    
    case 'FIN':
      src = FIN
      break
    
    case 'NED':
      src = NED
      break
    
    case 'UKR':
      src = UKR
      break
    
    case 'AUS':
      src = AUS
      break
    
    case 'MAC':
      src = MAC
      break
    
    case 'ENG':
      src = ENG
      break
    
    case 'CRO':
      src = CRO
      break
    
    case 'CZE':
      src = CZE
      break
    
    case 'SCO':
      src = SCO
      break
    
    case 'SPA':
      src = SPA
      break
    
    case 'POL':
      src = POL
      break
    
    case 'SWE':
      src = SWE
      break
    
    case 'SLO':
      src = SLO
      break
    
    case 'GER':
      src = GER
      break
    
    case 'FRA':
      src = FRA
      break
    
    case 'POR':
      src = POR
      break
    
    case 'HUN':
      src = HUN
      break
  }

  return (
    <Avatar className={className} size={winner ? 96 : 24} src={src}/>
  )
}

export default Flag