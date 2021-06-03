import React from 'react'

import { Button, Cell, Div, Text, Header, Panel, PanelHeader, PanelHeaderBack, Separator, Slider } from '@vkontakte/vkui'

import Flag from '../../components/Flag'
import Score from '../../components/Score'

import { PanelName } from '../../types/PanelName'
import { useDispatch, useSelector } from 'react-redux'
import { goTo } from '../../store/slices/navigation'
import { GAMES_PANEL } from '../../constants/panels'
import { RootState } from '../../store/rootReducer'

interface GamePredictionPanelProps
{
  id: PanelName
}

const GamePredictionPanel: React.FC<GamePredictionPanelProps> = ({
  id,
}) => {
  const dispatch = useDispatch()

  const selectedGame = useSelector((s: RootState) => s.games.selectedGame)
  const [selectedGameHomeScore, setSelectedGameHomeScore] = React.useState<number>(0)
  const [selectedGameAwayScore, setSelectedGameAwayScore] = React.useState<number>(0)

  const doPrediction = () => {
    console.log('GAME', selectedGame)
    console.log('PREDICTION', selectedGameHomeScore, selectedGameAwayScore)
  }

  const goToMain = () => {
    dispatch(goTo(GAMES_PANEL))
  }

  return (
    <Panel id={id}>
      <PanelHeader
        left={<PanelHeaderBack onClick={goToMain} />}
      >Матчи</PanelHeader>

      {selectedGame && <>
        <Cell
          disabled
          before={<div style={{display:'flex'}}>
            <Flag country={selectedGame.home.logo} filled />
            <Flag country={selectedGame.away.logo} filled translated/>
          </div>}
          after={<Score prediction><>{selectedGameHomeScore}:{selectedGameAwayScore}</></Score>}
          description={selectedGame.timeString}
        >{selectedGame.home.name} - {selectedGame.away.name}</Cell>

        <Div style={{display:'flex'}}>
          <Flag country={selectedGame.home.logo} />
          <div style={{flex:1, margin:'0px 8px'}}>
            <Slider
              step={1}
              min={0}
              max={10}
              value={selectedGameHomeScore}
              onChange={s => setSelectedGameHomeScore(+s)}
            />
          </div>
          <Score>{selectedGameHomeScore}</Score>
        </Div>
        <Div style={{display:'flex'}}>
          <Flag country={selectedGame.away.logo} />
          <div style={{flex:1, margin:'0px 8px'}}>
            <Slider
              step={1}
              min={0}
              max={10}
              value={selectedGameAwayScore}
              onChange={s => setSelectedGameAwayScore(+s)}
            />
          </div>
          <Score>{selectedGameAwayScore}</Score>
        </Div>
        <Div style={{paddingTop:24}}>
          <Button
            style={{width:'100%'}}
            size="l"
            disabled={!selectedGame}
            onClick={doPrediction}
          >Сделать прогноз</Button>
        </Div>
      </>}
      <Separator />
      <Header>Правила</Header>
      <Div style={{paddingTop:0}}>
        <Text weight="regular" style={{marginBottom:12,color:'gray'}}>За верный счет начисляется 3 очка</Text>
        <Text weight="regular" style={{color:'gray'}}>За верный результат начисляется 1 очко, с учетом, что счет не угадан</Text>
      </Div>
    </Panel>
  )
}

export default GamePredictionPanel