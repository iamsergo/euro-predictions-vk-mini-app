export type Game = {
  id: string
  time: number
  timeString: string
  home: { logo: string, name: string }
  away: { logo: string, name: string }
}