import { type TestimonialProps } from "./types";

export function Testimonial({ content, source }: TestimonialProps) {
  return (
    <div className="container mx-auto py-12 lg:py-24 px-6">
      <p className="max-w-md text-2xl text-slate-500 pl-6 py-4 border-l-8 border-l-slate-200">{content}</p>
      {source && (
        <a href={source} target="_blank" rel="noopener noreferrer" className="underline inline-flex mt-4">See Source</a>
      )}
    </div>
  )
}
