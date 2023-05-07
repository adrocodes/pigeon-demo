import { gql } from "@apollo/client"
import { datocms, type QueryResponse, type ValidationResult } from "./pigeon"
import { client } from "./client"
import { Hero } from "@/components/Hero"
import { Testimonial } from "@/components/Testimonial"

async function getData() {
  const query = gql`
    ${datocms.fragments()}

    query GetPage {
      page(filter: { id: { eq: "${process.env.DATO_PAGE_ID}" } }) {
        content {
          __typename
          ${datocms.query()}
        }
      }
    }
  `

  type Response = {
    page: {
      content: QueryResponse
    }
  }

  const { data } = await client.query<Response>({
    query
  })

  const { content } = data.page
  const props = datocms.validate(content)

  return props
}

export default async function DatoPage() {
  const data = await getData()

  return (
    <>
      {data.map((item) => {
        switch (item.__typename) {
          case "Hero":
            return <Hero key={item.id} {...item} />
          case "Testimonial":
            return <Testimonial key={item.id} {...item} />
          default:
            return null
        }
      })}
    </>
  )
}
