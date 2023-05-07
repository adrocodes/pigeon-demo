export type TestimonialProps = {
  content: string
  source?: string
}

export type TestimonialIntegrationProps = TestimonialProps & {
  __typename: "Testimonial"
  id: string
}
