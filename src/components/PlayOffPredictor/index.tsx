import React from 'react'

import { Cell, Div, Card, Button, FixedLayout, } from '@vkontakte/vkui'

import Description from '../Description'
import Flag from '../Flag'

import { EuroPair } from '../../types/EuroPair'

interface PlayOffPredictorProps
{
  pairs: EuroPair[]
  onEnd: (pairs: EuroPair[]) => void
}

const PlayOffPredictor: React.FC<PlayOffPredictorProps> = ({
  pairs: propsPairs,
  onEnd,
}) => {
  const defaultPairs = propsPairs.map(pair => {
    const teams = pair.teams.map(team => ({ ...team, checked: false }) )
    
    return { ...pair, teams }
  })
  const [pairs, setPairs] = React.useState<EuroPair[]>(defaultPairs)
  const [amountChecked, setAmountChecked] = React.useState(pairs.filter(pair => pair.teams.some(team => team.checked)).length)


  const handleCheck: React.ChangeEventHandler<HTMLInputElement> = e => {
    const [pairIndex, checkedName] = e.target.name.split('-')

    const newPairs = pairs.map((pair, i) => {
      if(+pairIndex === i)
      {
        const teams = pair.teams.map(team => {
          return { ...team, checked: team.name === checkedName }
        })

        return { ...pair, teams }
      }

      return pair
    })

    setPairs(newPairs)
    setAmountChecked(newPairs.filter(pair => pair.teams.some(team => team.checked)).length)
  }

  const handleConfirm = () => {
    onEnd(pairs)
  }  

  return (<>
    <Div style={{marginBottom: 85}}>
      {pairs.map((pair, i) => {
        return (
          <Card key={i} style={{marginBottom: 8}}>
              {pair.teams.map(team => {
                return <Cell key={team.id}
                  name={`${i}-${team.name}`}
                  selectable
                  checked={team.checked}
                  onChange={handleCheck}
                  before={<Flag country={team.logo} />}
                >{team.name}</Cell>
              })}
          </Card>
        )
      })}
    </Div>
    <FixedLayout
      style={{boxShadow:'0px -2px 8px black'}}
      filled
      vertical="bottom"
    >
      <Div>
        <Button
          disabled={amountChecked !== pairs.length}
          style={{width:'100%'}}
          size="m"
          onClick={handleConfirm}
        >Подтвердить</Button>
      </Div>
      <Description>
        Выберите из каждой пары одну команду, которая пройдет дальше
      </Description>
    </FixedLayout>
  </>)
}

export default PlayOffPredictor