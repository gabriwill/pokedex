import React from "react";

import GrassIcon from '../../assets/types/grass.svg';
import PoisonIcon from '../../assets/types/poison.svg';
import NormalIcon from '../../assets/types/normal.svg';
import BugIcon from '../../assets/types/bug.svg';
import DarkIcon from '../../assets/types/dark.svg';
import DragonIcon from '../../assets/types/dragon.svg';
import EletricIcon from '../../assets/types/electric.svg';
import FairyIcon from '../../assets/types/fairy.svg';
import FightingIcon from '../../assets/types/fighting.svg';
import FireIcon from '../../assets/types/fire.svg';
import FlyingIcon from '../../assets/types/flying.svg';
import GhostIcon from '../../assets/types/ghost.svg';
import GroundIcon from '../../assets/types/ground.svg';
import IceIcon from '../../assets/types/ice.svg';
import PsychicIcon from '../../assets/types/psychic.svg';
import RockIcon from '../../assets/types/rock.svg';
import SteelIcon from '../../assets/types/steel.svg';
import WaterIcon from '../../assets/types/water.svg';

interface Type {
    icon: React.ReactElement,
    name: string,
    color: string,
    backgroundColor: string,
    fontColor: string
}

const size = 16

const PokeTypes: Type[] = [
    {
        icon: (<NormalIcon height={size} width={size} color='#fff' />),
        name: 'Unknown',
        color: '#7d7d7d',
        backgroundColor: '#C9C9C9',
        fontColor: '#333333'
    },
    {
        icon: (<GrassIcon height={size} width={size} color='#fff' />),
        name: 'Grass',
        color: '#62b957',
        backgroundColor: '#8bbe8a',
        fontColor: '#49604c'
    },
    {
        icon: (<PoisonIcon height={size} width={size} color='#fff' />),
        name: 'Poison',
        color: '#a552cc',
        backgroundColor: '#E09CFF',
        fontColor: '#775E82'
    },
    {
        icon: (<BugIcon height={size} width={size} color='#fff' />),
        name: 'Bug',
        color: '#8cb230',
        backgroundColor: '#D7FF7A',
        fontColor: '#5C693E'
    },
    {
        icon: (<DarkIcon height={size} width={size} color='#fff' />),
        name: 'Dark',
        color: '#58575f',
        backgroundColor: '#A7A6AB',
        fontColor: '#5E5D57'
    },
    {
        icon: (<DragonIcon height={size} width={size} color='#fff' />),
        name: 'Dragon',
        color: '#0f6ac0',
        backgroundColor: '#4AA7FF',
        fontColor: '#2F5375'
    },
    {
        icon: (<EletricIcon height={size} width={size} color='#fff' />),
        name: 'Eletric',
        color: '#eed535',
        backgroundColor: '#FFEC6E',
        fontColor: '#A39958'
    },
    {
        icon: (<FairyIcon height={size} width={size} color='#fff' />),
        name: 'Fairy',
        color: '#ed6ec7',
        backgroundColor: '#FFABE6',
        fontColor: '#A37F98'
    },
    {
        icon: (<FightingIcon height={size} width={size} color='#fff' />),
        name: 'Fighting',
        color: '#d04164',
        backgroundColor: '#FF85A3',
        fontColor: '#875562'
    },
    {
        icon: (<FireIcon height={size} width={size} color='#fff' />),
        name: 'Fire',
        color: '#fd7d24',
        backgroundColor: '#FF9E59',
        fontColor: '#B37A52'
    },
    {
        icon: (<FlyingIcon height={size} width={size} color='#fff' />),
        name: 'Flying',
        color: '#748fc9',
        backgroundColor: '#C9DAFF',
        fontColor: '#737780'
    },
    {
        icon: (<GhostIcon height={size} width={size} color='#fff' />),
        name: 'Ghost',
        color: '#556aae',
        backgroundColor: '#AFC0FA',
        fontColor: '#515563'
    },
    {
        icon: (<GroundIcon height={size} width={size} color='#fff' />),
        name: 'Ground',
        color: '#dd7748',
        backgroundColor: '#FFAF8A',
        fontColor: '#947160'
    },
    {
        icon: (<IceIcon height={size} width={size} color='#fff' />),
        name: 'Ice',
        color: '#61cec0',
        backgroundColor: '#ADFFF4',
        fontColor: '#698581'
    },
    {
        icon: (<NormalIcon height={size} width={size} color='#fff' />),
        name: 'Normal',
        color: '#9da0aa',
        backgroundColor: '#B3BCC7',
        fontColor: '#616161'
    },
    {
        icon: (<PsychicIcon height={size} width={size} color='#fff' />),
        name: 'Psychic',
        color: '#ea5d60',
        backgroundColor: '#FF9C9D',
        fontColor: '#A17474'
    },
    {
        icon: (<RockIcon height={size} width={size} color='#fff' />),
        name: 'Rock',
        color: '#baab82',
        backgroundColor: '#CFC3B0',
        fontColor: '#707070'
    },
    {
        icon: (<SteelIcon height={size} width={size} color='#fff' />),
        name: 'Steel',
        color: '#417d9a',
        backgroundColor: '#91C9E5',
        fontColor: '#3A484F'
    },
    {
        icon: (<WaterIcon height={size} width={size} color='#fff' />),
        name: 'Water',
        color: '#4a90da',
        backgroundColor: '#8CC4FF',
        fontColor: '#5E768F'
    },
    
]

export default PokeTypes;