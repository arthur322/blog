import { Layout } from "@/components";

export default function Home() {
  return (
    <Layout>
      <main>
        <a href="https://github.com/arthur322" target="_blank" rel="noreferrer">
          <div
            className="bg-center bg-cover bg-no-repeat flex h-80 mt-96 px-5 rounded-3xl hover:rotate-180"
            style={{ backgroundImage: 'url("eu_cara.webp")' }}
          >
            <h1 className="font-mono text-black tracking-widest">Atur</h1>
          </div>
        </a>
      </main>
    </Layout>
  )
}
