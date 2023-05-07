import { type PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
  return (
    <>
      <div className="py-3 px-6 bg-orange-600 text-white font-bold italic">
        <a href="https://datocms.com" target="_blank" rel="noopener noreferrer">Powered by DatoCMS</a>
      </div>
      {props.children}
    </>
  )
}