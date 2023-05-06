import { getRandInt } from './util.js';
function getPhotos() {
  const photos = [];
  for (let i=0; i<25; i++) {
    photos.push({
      id: i+1,
      url: `photos/${i+1}.jpg`,
      description: `my favourite photos #${i+1}`,
      likes: getRandInt(15, 200),
      comments: getRandInt(0, 200)
    });
  }
  return photos;
}

export {getPhotos};
//Задание 7 часть 2
