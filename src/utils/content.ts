export const getContentFromFiles = function(imports: ContentImport) {
  return Promise.all(Object.entries(imports())
    .map(([ key, imp ]) => {
      const slug = key.split('/').pop()?.slice(0, -5);
      return imp().then(item => ({
        ...item,
        slug
      }));
    }));
};
