import React from 'react'
import { plantContentMoim } from './plant-content/Moim-content';
import { plantContentMepho } from './plant-content/Mepho-content';
import { plantContentKsor } from './plant-content/Ksor-content';
import { plantContentMurm } from './plant-content/Murm-content';

export default function Plant(props) {
  let plantContent
  switch (props.name) {
    case 'Moim':
      plantContent = plantContentMoim
      break;
    case 'Mepho':
      plantContent = plantContentMepho
      break;
    case 'Ksor':
      plantContent = plantContentKsor
      break;
    case 'Murm':
      plantContent = plantContentMurm
      break;
    default:
      break;
  }

  return (
    <div>{plantContent.title}</div>
  )
}
