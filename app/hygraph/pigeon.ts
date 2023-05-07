import { type HeroIntegrationProps } from "@/components/Hero"
import { type TestimonialIntegrationProps } from "@/components/Testimonial"
import { createPigeon, createRegistration, type output, type input } from "@adrocodes/pigeon"
import { z } from "zod"

const ImageAsset = createRegistration({
  __typename: "Asset",
  fragment: `
    url
    fileName
    width
    height
  `,
  schema: z
    .object({
      __typename: z.literal("Asset"),
      url: z.string().min(1),
      fileName: z.string().min(1),
      width: z.number().positive(),
      height: z.number().positive(),
    })
    .transform((input) => {
      return {
        ...input,
        __typename: "Image",
        src: input.url,
        alt: input.fileName,
      }
    }),
  fragmentName: "ImageFragment",
})

const HeroIntegration = createRegistration({
  __typename: "Hero",
  fragment: `
    id
    title
    description
    image {
      ...${ImageAsset.fragmentName}
    }
  `,
  dependencies: [ImageAsset],
  schema: z
    .object({
      __typename: z.literal("Hero"),
      id: z.string().min(1),
      title: z.string().min(1),
      description: z.string().nullable(),
      image: ImageAsset.schema,
    })
    .transform((input): HeroIntegrationProps => {
      return {
        ...input,
        __typename: "Hero",
        description: input.description ?? undefined,
      }
    }),
})

const TestimonialIntegration = createRegistration({
  __typename: "Testimonial",
  fragment: `
    id
    content
    source
  `,
  schema: z
    .object({
      __typename: z.literal("Testimonial"),
      id: z.string().min(1),
      content: z.string().min(1),
      source: z.string().nullable(),
    })
    .transform((input): TestimonialIntegrationProps => {
      return {
        ...input,
        __typename: "Testimonial",
        source: input.source ?? undefined,
      }
    }),
})

export const hygraph = createPigeon([HeroIntegration, TestimonialIntegration])
export type QueryResponse = input<typeof hygraph>
export type ValidationResult = output<typeof hygraph>
