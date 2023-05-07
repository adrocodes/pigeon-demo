import { type HeroIntegrationProps } from "@/components/Hero"
import { type TestimonialIntegrationProps } from "@/components/Testimonial"
import { createPigeon, createRegistration, type output, type input } from "@adrocodes/pigeon"
import { z } from "zod"

const ImageAsset = createRegistration({
  __typename: "FileField",
  fragment: `
    url
    alt
    width
    height
  `,
  schema: z
    .object({
      __typename: z.literal("FileField"),
      url: z.string().min(1),
      alt: z.string().min(1),
      width: z.number().positive(),
      height: z.number().positive(),
    })
    .transform((input) => {
      return {
        ...input,
        __typename: "Image",
        src: input.url,
      }
    }),
  fragmentName: "ImageFragment",
})

const HeroIntegration = createRegistration({
  __typename: "HeroRecord",
  fragment: `
    id
    heading
    description
    heroImage {
      ...${ImageAsset.fragmentName}
    }
  `,
  dependencies: [ImageAsset],
  schema: z
    .object({
      __typename: z.literal("HeroRecord"),
      id: z.string().min(1),
      heading: z.string().min(1),
      description: z.string().optional(),
      heroImage: ImageAsset.schema,
    })
    .transform((input): HeroIntegrationProps => {
      return {
        ...input,
        __typename: "Hero",
        title: input.heading,
        image: input.heroImage,
        description: input.description ?? undefined,
      }
    }),
})

const TestimonialIntegration = createRegistration({
  __typename: "TestimonialRecord",
  fragment: `
    id
    content
    source
  `,
  schema: z
    .object({
      __typename: z.literal("TestimonialRecord"),
      id: z.string().min(1),
      content: z.string().min(1),
      source: z.string().optional(),
    })
    .transform((input): TestimonialIntegrationProps => {
      return {
        ...input,
        __typename: "Testimonial",
        source: input.source ?? undefined,
      }
    }),
})

export const datocms = createPigeon([HeroIntegration, TestimonialIntegration])
export type QueryResponse = input<typeof datocms>
export type ValidationResult = output<typeof datocms>
