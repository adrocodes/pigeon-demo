export type HeroProps = {
  title: string
  description?: string
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
}

export type HeroIntegrationProps = HeroProps & {
  __typename: "Hero"
  id: string
}
