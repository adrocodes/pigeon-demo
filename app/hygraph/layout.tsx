import { type PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
  return (
    <>
      <div className="py-3 px-6 bg-purple-600 text-white font-bold italic">
        <a href="https://hygraph.com" target="_blank" rel="noopener noreferrer">Powered by Hygraph</a>
      </div>
      {props.children}
    </>
  )
}