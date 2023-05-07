import Link from "next/link";

export default function Home() {
  return (
    <div className="prose-lg max-w-3xl mx-auto px-6 py-10 lg:py-24">
      <h2>Welcome to the Pigeon demo</h2>
      <p>
        This is a demo of how you can use Pigeon to create the same website using multiple CMS platforms.
      </p>
      <div className="flex gap-3">
        <a href="https://www.npmjs.com/package/@adrocodes/pigeon" target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-3 rounded bg-red-600 font-bold text-white">
          npm
        </a>
        <a href="https://github.com/adrocodes/pigeon" target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-3 rounded bg-black font-bold text-white">
          Github
        </a>
      </div>
      <hr />
      <h3>Get started</h3>
      <pre className="bg-slate-100">
        <code>npm i @adrocodes/pigeon zod</code>
      </pre>
      <p>Pigeon uses <a href="https://www.npmjs.com/package/zod" target="_blank" rel="noopener noreferrer" className="underline">zod</a> to validate incoming data from your CMS to ensure you get the data you&apos;re expecting. You can then run a `transform` on this data to ensure you&apos;re components get the props they expect.</p>
      <p>Allowing for confidence in your data and allows you to quickly see if the content model changes.</p>
      <p>Read more in the <a href="https://github.com/adrocodes/pigeon#readme" target="_blank" rel="noopener noreferrer" className="underline">README</a></p>
      <h3>About the demo</h3>
      <p>This demo shows how this works in practice by connecting to several Content Management Systems to pull in data, validate, transform and render to the same components.</p>
      <p>In this way, your data and UI is separate allowing you to reuse UI in several projects without them being tied to how a CMS works or outputs data.</p>
      <p>For this demo, we&apos;re using:</p>
      <div className="flex flex-wrap gap-3">
        <Link href="/hygraph" className="text-sm px-4 py-3 rounded bg-purple-600 font-bold text-white">Hygraph</Link>
        <Link href="/datocms" className="text-sm px-4 py-3 rounded bg-orange-600 font-bold text-white">DatoCMS</Link>
      </div>
      <p>With planned demos for:</p>
      <ul className="list-disc text-base">
        <li>Contentful</li>
        <li>Sanity</li>
        <li>Prismic</li>
      </ul>
      <h4>Demo Links</h4>
      <ul className="list-disc text-base">
        <li><a href="https://github.com/adrocodes/pigeon-demo/" target="_blank" rel="noopener noreferrer" className="underline">Demo Source</a></li>
        <li><a href="https://github.com/adrocodes/pigeon-demo/tree/main/app/datocms" target="_blank" rel="noopener noreferrer" className="underline">DatoCMS Source</a></li>
        <li><a href="https://github.com/adrocodes/pigeon-demo/tree/main/app/hygraph" target="_blank" rel="noopener noreferrer" className="underline">Hygraph Source</a></li>
      </ul>
    </div>
  )
}
