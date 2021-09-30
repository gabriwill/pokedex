import React from "react";

import GrassIcon from '../../assets/types/grass.svg';
import PoisonIcon from '../../assets/types/poison.svg';
import NormalIcon from '../../assets/types/normal.svg';
import BugIcon from '../../assets/types/normal.svg';
import DarkIcon from '../../assets/types/normal.svg';
import DragonIcon from '../../assets/types/normal.svg';
import EletricIcon from '../../assets/types/normal.svg';
import FairyIcon from '../../assets/types/normal.svg';
import FightingIcon from '../../assets/types/normal.svg';
import FireIcon from '../../assets/types/normal.svg';
import FlyingIcon from '../../assets/types/normal.svg';
import GhostIcon from '../../assets/types/normal.svg';
import GroundIcon from '../../assets/types/normal.svg';
import IceIcon from '../../assets/types/normal.svg';
import PsychicIcon from '../../assets/types/normal.svg';
import RockIcon from '../../assets/types/normal.svg';
import SteelIcon from '../../assets/types/normal.svg';
import WaterIcon from '../../assets/types/normal.svg';

interface Type {
    icon: React.ReactElement,
    name: string,
    color: string
}

const size = 16

const PokeTypes: Type[] = [
    {
        icon: (<NormalIcon height={size} width={size} color='#fff' />),
        name: 'Unknown',
        color: '#7d7d7d'
    },
    {
        icon: (<GrassIcon height={size} width={size} color='#fff' />),
        name: 'Grass',
        color: '#62b957'
    },
    {
        icon: (<PoisonIcon height={size} width={size} color='#fff' />),
        name: 'Poison',
        color: '#a552cc'
    },
    {
        icon: (<BugIcon height={size} width={size} color='#fff' />),
        name: 'Bug',
        color: '#8cb230'
    },
    {
        icon: (<DarkIcon height={size} width={size} color='#fff' />),
        name: 'Dark',
        color: '#58575f'
    },
    {
        icon: (<DragonIcon height={size} width={size} color='#fff' />),
        name: 'Dragon',
        color: '#0f6ac0'
    },
    {
        icon: (<EletricIcon height={size} width={size} color='#fff' />),
        name: 'Eletric',
        color: '#eed535'
    },
    {
        icon: (<FairyIcon height={size} width={size} color='#fff' />),
        name: 'Fairy',
        color: '#ed6ec7'
    },
    {
        icon: (<FightingIcon height={size} width={size} color='#fff' />),
        name: 'Fighting',
        color: '#d04164'
    },
    {
        icon: (<FireIcon height={size} width={size} color='#fff' />),
        name: 'Fire',
        color: '#fd7d24'
    },
    {
        icon: (<FlyingIcon height={size} width={size} color='#fff' />),
        name: 'Flying',
        color: '#748fc9'
    },
    {
        icon: (<GhostIcon height={size} width={size} color='#fff' />),
        name: 'Ghost',
        color: '#556aae'
    },
    {
        icon: (<GroundIcon height={size} width={size} color='#fff' />),
        name: 'Ground',
        color: '#dd7748'
    },
    {
        icon: (<IceIcon height={size} width={size} color='#fff' />),
        name: 'Ice',
        color: '#61cec0'
    },
    {
        icon: (<NormalIcon height={size} width={size} color='#fff' />),
        name: 'Normal',
        color: '#9da0aa'
    },
    {
        icon: (<PsychicIcon height={size} width={size} color='#fff' />),
        name: 'Psychic',
        color: '#ea5d60'
    },
    {
        icon: (<RockIcon height={size} width={size} color='#fff' />),
        name: 'Rock',
        color: '#baab82'
    },
    {
        icon: (<SteelIcon height={size} width={size} color='#fff' />),
        name: 'Steel',
        color: '#417d9a'
    },
    {
        icon: (<WaterIcon height={size} width={size} color='#fff' />),
        name: 'Water',
        color: '#4a90da'
    },
    
]

export default PokeTypes;