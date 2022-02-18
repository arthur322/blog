import { Layout } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <div className="float-right h-40 ml-3 relative w-40 md:h-60 md:w-60">
        <Image
          className="rounded-full"
          layout="fill"
          src="/eu_cara.webp"
          alt="Perfil de Arthur Lima"
        />
      </div>
      <p>Olá 👋 meu nome é Arthur Lima e esse é meu mini site.</p>
      <p>
        Tenho 25 anos, sou um desenvolvedor web e este é um cantinho da internet
        que vou usar pra escrever um pouco sobre mim e coisas que eu gosto.
      </p>
    </Layout>
  )
}
