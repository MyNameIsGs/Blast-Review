import React from 'react';

const TagPill = ({ title, customColor, ...props }) => {

  const colors = [
    'platformer2',
    'platformer3',
    'fighting',
    'roguelike',
    'shooter',
    'adventure',
    'action',
    'horror',
    'rpg',
    'simulation',
  ];

  const charactersLastDigit = (text) => {
    const sampleNumber = text.length
    return sampleNumber % 10;
  }

  return(
    <div
      className={`tagLook me-1 ${customColor ? customColor : colors[charactersLastDigit(title)]}`}
      {...props}
    >
      <span className="tagPills">{title}</span>
    </div>
  )
}

export default TagPill;
