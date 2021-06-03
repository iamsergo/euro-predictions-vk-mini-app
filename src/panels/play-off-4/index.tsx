import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'

import PlayOffPredictor from '../../components/PlayOffPredictor'

import { goTo } from '../../store/slices/navigation'
import { setPairs2, setPairs4 } from '../../store/slices/play-off'

import { getPlayOffPairs2 } from '../../utils/getPlayofPairs'
import { PLAY_OFF_PANEL_2, PLAY_OFF_PANEL_8, } from '../../constants/panels'
import { RootState } from '../../store/rootReducer'
import { EuroPair } from '../../types/EuroPair'
import { PanelName } from '../../types/PanelName'

interface PlayOff4PanelProps
{
  id: PanelName
}

const PlayOff4Panel: React.FC<PlayOff4PanelProps> = ({
  id,
}) => {
  const dispatch = useDispatch()
  const pairs = useSelector((s: RootState) => s.playOff.pairs4)

  const goBack = () => {
    dispatch(goTo(PLAY_OFF_PANEL_8))
  }

  const handleConfirm = (checkedPairs: EuroPair[]) => {
    dispatch(setPairs4(checkedPairs))
    dispatch(setPairs2(getPlayOffPairs2(checkedPairs)))
    dispatch(goTo(PLAY_OFF_PANEL_2))
  }

  return (
    <Panel id={id}>
      <PanelHeader
        left={<PanelHeaderBack onClick={goBack} />}
      >1/4 финала</PanelHeader>

      <PlayOffPredictor
        pairs={pairs}
        onEnd={handleConfirm}
      />
    </Panel>
  )
}

export default PlayOff4Panel