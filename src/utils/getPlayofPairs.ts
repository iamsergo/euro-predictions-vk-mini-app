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

const getTeamByIndexFromThirdPlaces = (groups: EuroGroup[], thirdPlaces: Team[], index: string) => {
  const groupsNames = index.slice(1).split('')
  const filteredGroups = groups.filter(({ name }) => groupsNames.includes(name.slice(-1)) )

  const thirdPlace = filteredGroups.find(({ teams }) => {
    return teams.some(team => {
      return !!thirdPlaces.find(thirdPlace => thirdPlace.name === team.name)
    })
  })!.teams[2]

  return thirdPlace
}

const getTeamByIndexFromPairs = (pairs: EuroPair[], id: string) => {
  return pairs.find(pair => pair.id === id)!.teams.find(team => team.checked)!
}

// pairs generator
export const getPlayOffPairs8 = (groups: EuroGroup[], thirdPlaces: Checkable<Team>[]): EuroPair[] => {
  const thirdPlacesTeams = thirdPlaces.filter(team => team.checked)

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
        getTeamByIndexFromThirdPlaces(groups, thirdPlacesTeams, '3DEF'),
      ]
    },
    {
      id: '4',
      teams: [
        getTeamByIndexFromGroups(groups, '1B'),
        getTeamByIndexFromThirdPlaces(groups, thirdPlacesTeams, '3ADEF'),
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
        getTeamByIndexFromThirdPlaces(groups, thirdPlacesTeams, '3ABC'),
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
        getTeamByIndexFromThirdPlaces(groups, thirdPlacesTeams, '3ABCD'),
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