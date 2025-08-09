# Universidade Corporativa — Vercel-ready prototype

## O que está neste pacote
- Projeto Next.js leve com feed de microlearning e gamificação mock.
- API mock para pontos e badges.
- Exemplo de NextAuth (credencial demo: qualquer usuário com senha 'demo').
- Assets (logo e thumbnails), Dockerfile e CI workflow.

## Como publicar no Vercel (passo a passo, sem programar)
1. Crie uma conta gratuita em https://vercel.com
2. Clique em **New Project** > **Import Git Repository**.
   - Se ainda não tem um repositório no GitHub, crie um criando um novo repositório e faça upload dos arquivos deste pacote (arrastar).
3. Conecte seu repositório na Vercel e aceite as configurações padrão.
4. Em **Environment Variables**, adicione `NEXTAUTH_SECRET` com um valor aleatório (ex: 'my-secret-123') se quiser testar login demo.
5. Clique em **Deploy**. Em minutos, seu protótipo estará no ar com uma URL pública.


## Testando localmente (opcional)
1. Instale o Node.js (versão 18+).
2. Na pasta do projeto, rode `npm install` e depois `npm run dev` e abra http://localhost:3000


## Observações
- Para uso em produção, contrate um desenvolvedor para integrar com banco real e SSO corporativo.
- Se quiser, eu posso subir este repositório no GitHub para você e conectar à Vercel (preciso que você me autorize a criar o repo ou me dê acesso).