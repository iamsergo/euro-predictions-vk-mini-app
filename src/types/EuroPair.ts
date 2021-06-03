import { Checkable } from "./Checkable";
import { Team } from "./Team";

export type EuroPair = {
  id: string
  teams: Checkable<Team>[]
}