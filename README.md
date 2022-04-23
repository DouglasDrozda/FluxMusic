# Flux Music
<div align="center">
  <a href="https://flux-music.netlify.app/" target="_blank">
    <img src="https://i.postimg.cc/6QGk5YRx/flux-music.jpg" />
  </a>
</div>

## 📑Sobre o projeto
Nesse projeto foi desenvolvido um site inovador que possibilita descobrir artistas, álbuns e notícias do mundo da música.

[Clique aqui](https://flux-music.netlify.app/) para visitar o site.

## 📜 Soluções implementadas
- Criar uma timeline contendo as notícias mais recentes.
- Criar uma página para os artistas renomados.
- Criar uma página para os discos do momentos.
- Criar um input para buscar notícias, artistas e discos por nome.
- Desing responsivo
- HTML Semântico
- Acessibilidade
- Performance

## ⚙️ Tecnologias utilizadas
- React
- Context API
- React-Router-Dom
- ESlint
- TypeScript

## 📚 Informações
Criei um objeto com objetivo de adicionar mais informações no mesmo estado que a resposta da API é guaradada.
Neste objeto contém, imagens, descrições, das notícias, artistas e discos.
#### 🚀 Execução
`npm install`

> instala as dependências

`npm run dev`

> inicia a aplicação

## Erro/Solução
<img src="https://i.postimg.cc/CKBX1zjB/error-cors.jpg" />
- Erro:
Ao fazer a requisição para API me deparei com erro de CORS. Depois de muita pesquisa e sem nenhuma solução, recorri ajuda a um amigo
que me indicou alguns sites com informações que mostram como resolver o problema.
<br/>
- Solução:
Para solucionar o problema tive que criar um proxy através da defineConfig no vite.config.ts para fazer a requisição da API de forma segura.<br/>
- Para o deploy funcionar criei uma pasta public/redirects mapeando para onde o proxy precisa fazer a requisição.

- Sites que me ajudaram a solucionar o problema:
- [rubenr.dev](https://rubenr.dev/en/cors-vite-vue/)
- [netlify.docs](https://docs.netlify.com/routing/redirects/rewrites-proxies/#proxy-to-another-service)

## Resultados Lighthouse
<img src="https://i.postimg.cc/bwZdyfwC/result-Light-House.jpg" />
