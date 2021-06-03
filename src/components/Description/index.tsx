import React from 'react'

import { Caption } from '@vkontakte/vkui'

interface DescriptionProps
{}

const Description: React.FC<DescriptionProps> = ({
  children,
}) => {
  return (
    <Caption style={{opacity:0.5, padding: '4px 12px 8px 12px', textAlign: 'center'}} level="3" weight="regular">
      {children}
    </Caption>
  )
}

export default Description