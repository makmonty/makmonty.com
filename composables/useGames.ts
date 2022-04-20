interface ContentImport {
  [key: string]: () => Promise<any>
}

const getContentFromFiles = function(imports: ContentImport) {
  return Promise.all(Object.entries(imports)
    .map(([key, imp]) => {
      const slug = key.split('/').pop().slice(0, -5);
      return imp().then(item => ({
        ...item,
        slug
      }));
    }));
}

export const useGames = async () => {
  const { data } = await useAsyncData('games', async (app) => {
    // return new Promise(resolve => {
    //   resolve([
    //     {
    //       "date": "2014-02-10T15:16:55.773Z",
    //       "title": "3D Bird",
    //       "description": "Made in 48 hours for the Flappy Jam, this game brings the immersive experience of being a bird flying between pipes to the ultimate level! ",
    //       "body": "## Behind this game\n\nFlappy Bird was a mobile game developed by the Vietnamese game developer [Dong Nguyen](http://en.wikipedia.org/wiki/Nguy%E1%BB%85n_H%C3%A0_%C4%90%C3%B4ng). The game was widely regarded as ugly and its gameplay extremely frustrating. Nevertheless, the game was a huge success, toping download lists and generating thousands of dollars in ad revenues per day\n\nOn February 10th, the author retired the game from the market, alleging that he *could not take it anymore*. Whilst it is not clear the meaning of those words, Mr. Nguyen was receiving a lot of negative comments and personal accusations because of his game.\n\nSoon after that, the indie game site [Itch.io](http://itch.io/) organized the [Flappy Jam](http://itch.io/jam/flappyjam), a jam to develop similar games, retro and insanely difficult, to celebrate the game and the indie community.\n\nThis game is our contribution to the Flappy Jam\n\n## The game\n\nTrying to be original, we didn't want to create a simple clone of Flappy Bird. Instead, we thought that rethinking the game to a FPS perspective would be a nice twist!",
    //       "tags": [
    //         "flappy-bird",
    //         "first-person"
    //       ],
    //       "platforms": [
    //         "android"
    //       ],
    //       "featuredImage": "/cms/img/3dbird-promo.jpg",
    //       "links": [
    //         {
    //           "url": "https://play.google.com/store/apps/details?id=com.CortaStudios.FpsFlappyBird",
    //           "label": "Download"
    //         }
    //       ]
    //     }
    //   ]);
    // });
    return getContentFromFiles(import.meta.glob('@/assets/content/games/**/*.json'));
  });

  return data;
}
