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
    return getContentFromFiles(import.meta.glob('@/assets/content/games/**/*.json'));
  });

  return data;
}
