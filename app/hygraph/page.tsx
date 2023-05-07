import { gql } from "@apollo/client"
import { hygraph, type QueryResponse, type ValidationResult } from "./pigeon"
import { client } from "./client"
import { Hero } from "@/components/Hero"
import { Testimonial } from "@/components/Testimonial"

async function getData() {
  const query = gql`
    ${hygraph.fragments()}

    query GetPage {
      page(where: {id: "${process.env.HYGRAPH_PAGE_ID}"}) {
        flexibleContent {
          __typename
          ${hygraph.query()}
        }
      }
    }
  `

  type Response = {
    page: {
      flexibleContent: QueryResponse
    }
  }

  const { data } = await client.query<Response>({
    query
  })

  const { flexibleContent } = data.page
  const props = hygraph.validate(flexibleContent)

  return props
}

export default async function HygraphPage() {
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
