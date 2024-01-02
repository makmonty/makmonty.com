const contentTypes = {
  games: () => import.meta.glob(`@/assets/content/games/**/*.json`),
  blog: () => import.meta.glob(`@/assets/content/blog/**/*.json`),
};

export interface ContentImport {
  [key: string]: () => Promise<any>
}

export const getContentFromFiles = function(imports: ContentImport) {
  return Promise.all(Object.entries(imports)
    .map(([ key, imp ]) => {
      const slug = key.split('/').pop()?.slice(0, -5);
      return imp().then(item => ({
        ...item,
        slug
      }));
    }));
};

export const useCmsContent = async(contentType: string) => {
  const { data } = await useAsyncData(contentType, () => {
    return getContentFromFiles(contentTypes[contentType]());
  });

  return data;
};
