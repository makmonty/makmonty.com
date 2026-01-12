export async function getContent<T>(modules: Record<string, () => T>) {
  return await Promise.all(Object.values(modules).map(contentModule => contentModule()));
}
