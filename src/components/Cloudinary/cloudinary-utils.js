export const sliceCloudinarySrc = (url) => {
  const urlAsArray = url.split('');

  const slicedSrc = ['', ''];

  for (let i = 0, n = urlAsArray.length, slashCounter = 0; i < n; i++) {
    const character = urlAsArray[i];
    if (slashCounter < 6) {
      if (character === '/') slashCounter += 1;
      if (slashCounter !== 6) slicedSrc[0] += character;
    } else {
      slicedSrc[1] += character;
    }
  }

  return slicedSrc;
};

export default sliceCloudinarySrc;
