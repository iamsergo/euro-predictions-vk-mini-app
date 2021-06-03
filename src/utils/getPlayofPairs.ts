import { Checkable } from "../types/Checkable";
import { EuroGroup } from "../types/EuroGroup";
import { EuroPair } from "../types/EuroPair";
import { Team } from "../types/Team";

// team selectors
const getTeamByIndexFromGroups = (groups: EuroGroup[], index: string) => {
  const [idx, groupName] = index.split('')
  
  const group = groups.find(group => group.name.slice(-1) === groupName)!
  const team = group.teams[+idx - 1]

  return team
}

const getThirdPlaceTeamByRivalGroup = (groups: EuroGroup[], directedThirdPlacesGroups: string, rivalGroup: string) => {
  const firstPlacesGroups = { B: 0, C: 1, E: 2, F: 3 }
  const idx = firstPlacesGroups[rivalGroup as (keyof typeof firstPlacesGroups)]
  const groupName = directedThirdPlacesGroups[idx]

  const group = groups.find(group => group.name.slice(-1) === groupName)!
  const thirdPlace = group.teams[2]

  return thirdPlace
}

const getTeamByIndexFromPairs = (pairs: EuroPair[], id: string) => {
  return pairs.find(pair => pair.id === id)!.teams.find(team => team.checked)!
}

// pairs generator
const variantsOfThirdPlaces = {"ABCD":"ADBC","ABCE":"AEBC","ABCF":"AFBC","ABDE":"DEAB","ABDF":"DFAB","ABEF":"EFBA","ACDE":"EDCA","ACDF":"FDCA","ACEF":"EFCA","ADEF":"EFDA","BCDE":"EDBC","BCDF":"FDCB","BCEF":"FECB","BDEF":"FEDB","CDEF":"FEDC"}

export const getPlayOffPairs8 = (groups: EuroGroup[], thirdPlaces: Checkable<Team>[]): EuroPair[] => {
  const thirdPlacesTeams = thirdPlaces.filter(team => team.checked)

  const thirdPlacesGroups = thirdPlacesTeams.map(thirdPlace => {
    return groups.find(group => group.teams.find(team => team.name === thirdPlace.name))!.name.slice(-1)
  }).join('')
  const directedThirdPlacesGroups = variantsOfThirdPlaces[thirdPlacesGroups as (keyof typeof variantsOfThirdPlaces)]

  const pairs = [
    {
      id: '1',
      teams: [
        getTeamByIndexFromGroups(groups, '2A'),
        getTeamByIndexFromGroups(groups, '2B'),
      ]
    },
    {
      id: '2',
      teams: [
        getTeamByIndexFromGroups(groups, '1A'),
        getTeamByIndexFromGroups(groups, '2C'),
      ]
    },
    {
      id: '3',
      teams: [
        getTeamByIndexFromGroups(groups, '1C'),
        getThirdPlaceTeamByRivalGroup(groups, directedThirdPlacesGroups, 'C'),
      ]
    },
    {
      id: '4',
      teams: [
        getTeamByIndexFromGroups(groups, '1B'),
        getThirdPlaceTeamByRivalGroup(groups, directedThirdPlacesGroups, 'B'),
      ]
    },
    {
      id: '5',
      teams: [
        getTeamByIndexFromGroups(groups, '2D'),
        getTeamByIndexFromGroups(groups, '2E'),
      ]
    },
    {
      id: '6',
      teams: [
        getTeamByIndexFromGroups(groups, '1F'),
        getThirdPlaceTeamByRivalGroup(groups, directedThirdPlacesGroups, 'F'),
      ]
    },
    {
      id: '7',
      teams: [
        getTeamByIndexFromGroups(groups, '1D'),
        getTeamByIndexFromGroups(groups, '2F'),
      ]
    },
    {
      id: '8',
      teams: [
        getTeamByIndexFromGroups(groups, '1E'),
        getThirdPlaceTeamByRivalGroup(groups, directedThirdPlacesGroups, 'E'),
      ]
    },
  ]

  return pairs
}

export const getPlayOffPairs4 = (pairs: EuroPair[]): EuroPair[] => {
  return [
    {
      id: '1',
      teams: [
        getTeamByIndexFromPairs(pairs, '6'),
        getTeamByIndexFromPairs(pairs, '5'),
      ],
    },
    {
      id: '2',
      teams: [
        getTeamByIndexFromPairs(pairs, '4'),
        getTeamByIndexFromPairs(pairs, '2'),
      ],
    },
    {
      id: '3',
      teams: [
        getTeamByIndexFromPairs(pairs, '1'),
        getTeamByIndexFromPairs(pairs, '3'),
      ],
    },
    {
      id: '4',
      teams: [
        getTeamByIndexFromPairs(pairs, '8'),
        getTeamByIndexFromPairs(pairs, '7'),
      ],
    },
    
  ]
}

export const getPlayOffPairs2 = (pairs: EuroPair[]): EuroPair[] => {
  return [
    {
      id: '1',
      teams: [
        getTeamByIndexFromPairs(pairs, '1'),
        getTeamByIndexFromPairs(pairs, '2'),
      ],
    },
    {
      id: '2',
      teams: [
        getTeamByIndexFromPairs(pairs, '4'),
        getTeamByIndexFromPairs(pairs, '3'),
      ],
    },
  ]
}

export const getPlayOffPairs1 = (pairs: EuroPair[]): EuroPair[] => {
  return [
    {
      id: '1',
      teams: [
        getTeamByIndexFromPairs(pairs, '1'),
        getTeamByIndexFromPairs(pairs, '2'),
      ],
    },
  ]
}