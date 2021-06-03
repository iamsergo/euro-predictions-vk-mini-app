import { Checkable } from "./Checkable";
import { Team } from "./Team";

export type EuroGroup = {
  id: string
  name: string
  teams: Checkable<Team>[]
}