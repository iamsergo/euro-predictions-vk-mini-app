import React from 'react'
import './Score.sass'

interface ScoreProps
{
  live?:boolean
  prediction?: boolean
}

const Score: React.FC<ScoreProps> = ({
  prediction,
  live,
  children,
}) => {
  return (
    <div className={`score${live?' live':''}${prediction?' prediction':''}`}>{children}</div>
  )
}

export default Score