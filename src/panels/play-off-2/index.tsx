import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui'

import PlayOffPredictor from '../../components/PlayOffPredictor'

import { goTo } from '../../store/slices/navigation'
import { setPairs1, setPairs2 } from '../../store/slices/play-off'

import { getPlayOffPairs1 } from '../../utils/getPlayofPairs'
import { PLAY_OFF_PANEL_1, PLAY_OFF_PANEL_4, } from '../../constants/panels'
import { RootState } from '../../store/rootReducer'
import { EuroPair } from '../../types/EuroPair'
import { PanelName } from '../../types/PanelName'

interface PlayOff2PanelProps
{
  id: PanelName
}

const PlayOff2Panel: React.FC<PlayOff2PanelProps> = ({
  id,
}) => {
  const dispatch = useDispatch()
  const pairs = useSelector((s: RootState) => s.playOff.pairs2)

  const goBack = () => {
    dispatch(goTo(PLAY_OFF_PANEL_4))
  }

  const handleConfirm = (checkedPairs: EuroPair[]) => {
    dispatch(setPairs2(checkedPairs))
    dispatch(setPairs1(getPlayOffPairs1(checkedPairs)))
    dispatch(goTo(PLAY_OFF_PANEL_1))
  }

  return (
    <Panel id={id}>
      <PanelHeader
        left={<PanelHeaderBack onClick={goBack} />}
      >1/2 финала</PanelHeader>

      <PlayOffPredictor
        pairs={pairs}
        onEnd={handleConfirm}
      />
    </Panel>
  )
}

export default PlayOff2Panel