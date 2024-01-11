export interface WebExperiment {
  title: string,
  slug: string,
  featuredImage: string
}

export interface Game {
  date: string,
  title: string,
  description: string,
  tags: Array<string>
  platforms: Array<string>
  featuredImage: string
  links: Array<{url: string, label: string}>
}
