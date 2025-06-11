export const avatarPool = {
  'laki-laki': [
    'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortRound&facialHairType=BeardLight&clotheType=ShirtVNeck&clotheColor=PastelBlue&eyeType=Default&eyebrowType=UpDown&mouthType=Smile&skinColor=Light&accessoriesType=Prescription02',
    'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairSides&facialHairType=Blank&clotheType=BlazerShirt&clotheColor=Gray02&eyeType=Default&eyebrowType=Default&mouthType=Serious&skinColor=Brown&accessoriesType=Blank',
    'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&facialHairType=BeardMedium&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Light&accessoriesType=Blank',
    'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairFrizzle&facialHairType=MoustacheMagnum&clotheType=GraphicShirt&clotheColor=Blue02&graphicType=SkullOutline&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned&accessoriesType=Blank',
    'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads01&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Heather&eyeType=Happy&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Brown&accessoriesType=Kurt'
  ],
  'perempuan': [
    'https://avataaars.io/?avatarStyle=Transparent&topType=Hijab&clotheType=BlazerShirt&clotheColor=PastelGreen&eyeType=Default&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Brown&accessoriesType=Blank',
    'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&hairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Pink&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Default&skinColor=Light&accessoriesType=Blank',
    'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBob&hairColor=Black&clotheType=BlazerShirt&clotheColor=Blue03&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light&accessoriesType=Round',
    'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurvy&hairColor=BlondeGolden&clotheType=Hoodie&clotheColor=Red&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Default&skinColor=Light&accessoriesType=Sunglasses',
    'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&hairColor=Brown&clotheType=GraphicShirt&clotheColor=PastelBlue&graphicType=Diamond&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light&accessoriesType=Blank'
  ]
};

export function getRandomAvatar(gender) {
  const urlList = avatarPool[gender];
  
  const randomIndex = Math.floor(Math.random() * urlList.length);
  
  return urlList[randomIndex];
}
