![Front-end-Projeto E-Commerce devStore _ Next js](https://github.com/darioreisjr/projeto-de-e-commerce-devstore/assets/85812823/6c164b11-0ff8-420e-afa5-b7f7e1f1214c)

# E-commerce devstore

O DevStore foi projetado para oferecer uma experiência de compra online rápida, fácil e segura. A plataforma utiliza recursos avançados de SEO para garantir que os produtos sejam facilmente encontrados pelos clientes em mecanismos de busca.

## Stack utilizada

**Front-end:** React, Next.js, TailwindCSS



## Apêndice

O DevStore é um e-commerce desenvolvido utilizando as tecnologias Next.js e Tailwind CSS. A plataforma oferece as seguintes páginas:

- Home: A página inicial do DevStore apresenta uma seleção de produtos em destaque.
- Detalhes do produto: Esta página apresenta informações detalhadas sobre um único produto, incluindo imagens, descrições, especificações técnicas,tamanho do produto e opção de adicionar ao carrinho.
- Busca de produtos: A página de busca permite que os clientes encontrem produtos específicos por meio de palavras-chave.


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Demonstração

Insira um gif ou um link de alguma demonstração


## Funcionalidades

- Home com produtos destaque
- Detalhes do produto
- Busca de produtos
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/darioreisjr/projeto-de-e-commerce-devstore.git
```

Entre no diretório do projeto

```bash
  cd projeto-de-e-commerce-devstore
```

Instale as dependências

```bash
  pnpm install
```

Inicie o servidor

```bash
  pnpm run dev
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env.local

`NEXT_PUBLIC_API_BASE_URL`

`APP_URL`
## Documentação de cores

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Cor zinc-900       | ![#0a192f](https://via.placeholder.com/10/18181b?text=+) #18181b |
| Cor violet-500       | ![#f8f8f8](https://via.placeholder.com/10/8b5cf6?text=+) #8b5cf6 |
| Cor zinc-500       | ![#00b48a](https://via.placeholder.com/10/71717a?text=+) #71717a  |
| Cor black/60       | ![#00d1a0](https://via.placeholder.com/10/00000099?text=+) #00000099 |


## Documentação da API

#### Retorna todos os itens

```http
  GET /api/products
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |





## Uso/Exemplos

```typescript
import Link from 'next/link'
import Image from 'next/image'
import { api } from '@/app/data/api'
import { Product } from '@/app/data/types/product'
import { Metadata } from 'next'

async function getFeaturedProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const products = await response.json()

  return products
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          src={highlightedProduct.image}
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
          >
            <Image
              src={product.image}
              className="group-hover:scale-105 transition-transform duration-500"
              width={920}
              height={920}
              quality={100}
              alt=""
            />

            <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

```


## Melhorias

- Refatorações 
- Melhorias de performance 
- Acessibilidade
- Integração com meio de pagamentos
- Criação de tela de destaques
- Adicionar banners
- Criação de login e cadastro de novos usuarios
- Criação de dashboard 
- Criação tela de adicionar novos produtos



## Aprendizados

#### Ao construir o DevStore, aprendi muito sobre as seguintes tecnologias:

- Next.js: Aprendi como usar o Next.js para construir aplicações web estáticas e dinâmicas. Isso incluiu aprender sobre roteamento, otimização de desempenho e SEO.
- Tailwind CSS: Aprendi como usar o Tailwind CSS para criar interfaces de usuário personalizadas com rapidez e facilidade. Isso incluiu aprender sobre classes de utilidade, componentes e diretivas.
- E-commerce: Aprendi sobre os princípios básicos do e-commerce.
Também aprendi muito sobre o processo de desenvolvimento de software em geral. Isso incluiu aprender sobre planejamento, design e desenvolvimento.

#### Desafios enfrentados
Ao construir o DevStore, enfrentei os seguintes desafios:

- Desenvolvimento de front-end: O desenvolvimento da interface do usuário do DevStore foi um desafio, pois eu queria que ela fosse bonita e fácil de usar. Usei o Tailwind CSS para me ajudar a criar uma interface de usuário personalizada que fosse responsiva e acessível.

#### Como superei os desafios
Superei os desafios que enfrentei ao construir o DevStore da seguinte maneira:

- Desenvolvimento de front-end: Usei o Tailwind CSS para me ajudar a criar uma interface de usuário personalizada que fosse responsiva e acessível. 


#### Conclusões
Ao construir o DevStore, aprendi muito sobre desenvolvimento web, e-commerce e o processo de desenvolvimento de software em geral. Estou orgulhoso do que consegui realizar e espero continuar aprendendo e crescendo como desenvolvedor de software.

## Autores

- [@darioreisjr](https://www.github.com/darioreisjr)


## Suporte

Para suporte ou melhorias, mande um email para dev.darioreis@gmail.com


## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio de dev.darioreis@gmail.com


## Relacionados

Segue alguns projetos relacionados

[FERRAMENTARIA OSTEN MOOVE](https://github.com/darioreisjr/ferramentaria_osten_moove_front_end)

[FERRAMENTARIA OSTEN MOOVE BACK-END](https://github.com/darioreisjr/ferramentaria_osten_moove_back_end-)



## Licença

[MIT](https://choosealicense.com/licenses/mit/)

