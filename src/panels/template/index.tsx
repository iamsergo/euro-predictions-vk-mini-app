import React from 'react'

import { Panel } from '@vkontakte/vkui'

import { PanelName } from '../../types/PanelName'

interface NamePanelProps
{
  id: PanelName
}

const NamePanel: React.FC<NamePanelProps> = ({
  id,
}) => {
  return (
    <Panel id={id}>
      
    </Panel>
  )
}

export default NamePanel