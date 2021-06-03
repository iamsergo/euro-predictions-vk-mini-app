import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Cell, List, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'

import Flag from '../../components/Flag'

import { PanelName } from '../../types/PanelName'
import { goTo } from '../../store/slices/navigation'
import { selectGame as setGame } from '../../store/slices/games'
import { Game } from '../../types/Game'
import { GAME_PREDICTION_PANEL, MAIN_PANEL } from '../../constants/panels'
import { RootState } from '../../store/rootReducer'

interface GamesPanelProps
{
  id: PanelName
}

const GamesPanel: React.FC<GamesPanelProps> = ({
  id,
}) => {
  const dispatch = useDispatch()
  const games = useSelector((s: RootState) => s.games.games)
  
  const selectGame = (game: Game) => {
    dispatch(setGame(game))
    dispatch(goTo(GAME_PREDICTION_PANEL))
  }

  const goToMain = () => {
    dispatch(goTo(MAIN_PANEL))
  }

  return (
    <Panel id={id}>
      <PanelHeader
        left={<PanelHeaderBack onClick={goToMain} />}
      >Матчи</PanelHeader>

      <List>
        {games.map(game => {
          return <Cell
            key={game.id}
            onClick={() => selectGame(game)}
            before={<div style={{display:'flex'}}>
              <Flag country={game.home.logo} filled />
              <Flag country={game.away.logo} filled translated/>
            </div>}
            description={game.timeString}
          >{game.home.name} - {game.away.name}</Cell>
        })}
      </List>
    </Panel>
  )
}

export default GamesPanel