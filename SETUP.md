# Setup — Site MTC + Sanity

Site institucional para profissional de Medicina Tradicional Chinesa, com blog
gerido via Sanity. Sanity Studio está embutido em `/studio`.

## 1. Criar o projecto Sanity

Na raiz do repo:

```bash
npx sanity@latest init --env=.env.local
```

Quando o CLI perguntar:

- **Login** com a tua conta Sanity (cria gratuitamente em https://sanity.io).
- **Create new project** — dá-lhe um nome (ex.: `mtc-site`).
- **Use the default dataset configuration** → `production`.
- **Project output path** → aceita o default (não vai escrever schemas, só usa
  o ficheiro `.env.local`).

Ao terminar terás um `.env.local` com:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
NEXT_PUBLIC_SANITY_DATASET=production
```

Adiciona também:

```
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
```

> Os **schemas do conteúdo** (post, autor, categoria) já vivem neste repo em
> `src/sanity/schemas/` e são carregados pelo Studio embutido.

## 2. Configurar CORS no Sanity

No painel do Sanity (https://sanity.io/manage), abre o teu projecto:

- **API → CORS Origins → Add origin**
- Adiciona `http://localhost:3000` (com credentials = true)
- Em produção, adiciona o domínio final (ex.: `https://meu-dominio.pt`).

## 3. Correr localmente

```bash
npm install
npm run dev
```

- Site: http://localhost:3000
- Sanity Studio: http://localhost:3000/studio

Cria primeiro alguns autores e categorias e só depois publica artigos.
A homepage e a página `/blog` mostram automaticamente os artigos publicados
(revalidação a cada 60s).

## 4. Estrutura do conteúdo

- **Autor (`author`)** — nome, função (acupunctor, etc.), foto, bio.
- **Categoria (`category`)** — ex.: Acupunctura, Fitoterapia, Bem-estar.
- **Artigo (`post`)** — título, slug, autor, imagem principal, categorias,
  resumo (excerpt) e corpo em rich text (com imagens, citações, headings).

## 5. Personalização do site

Procura por placeholders entre parêntesis rectos no código e substitui:

- `[Nome do Profissional]`
- `[Cidade]`
- `[X]` (anos de experiência)
- `[Instituição]`
- Morada, telefone e email — em
  `src/components/Contact/ClinicInfoBox.tsx` e no rodapé
  `src/components/Footer/index.tsx`.

Os tratamentos estão definidos em
`src/components/Treatments/treatmentsData.tsx`.
