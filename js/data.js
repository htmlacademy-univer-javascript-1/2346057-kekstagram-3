import { getRandInt } from './util.js';
function getPhotos() {
  const photo = [];
  for (let i=0; i<25; i++) {
    photo.push({
      id: i+1,
      url: `photo/${i+1}.jpg`,
      description: `my favourite photo #${i+1}`,
      likes: getRandInt(15, 200),
      comments: getRandInt(0, 200)
    });
  }
  return photo;
}

export {getPhotos};
