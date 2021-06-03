import React from 'react'
import './Winner.sass'

import bg from '../../assets/confeti.png'
import cup from '../../assets/cup.png'

import { Header } from '@vkontakte/vkui';

import Flag from '../Flag';

import { Team } from '../../types/Team';

interface WinnerProps
{
  team: Team
}

const Winner: React.FC<WinnerProps> = ({
  team,
}) => {
  const [confetiShowed, setConfetiShowed] = React.useState(false)
  React.useEffect(() => {
    const tid = window.setTimeout(() => {
      setConfetiShowed(true)
    }, 750)

    return () => {
      window.clearTimeout(tid)
    }
  },[])

  return(
    <div className="winner">
      <div className="winner__in">
        {confetiShowed && <img className="winner__bg" src={bg} alt="oops..." />}
        <Flag className="winner__team" country={team.logo} winner/>
        <img className="winner__cup" src={cup} alt="oops..." />
      </div>
      <Header>{team.name}</Header>
      <div className="winner__title">Победитель ЕВРО-2020</div>
    </div>
  )
}

export default Winner