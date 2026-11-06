# Raul Ferraz — Portfólio

Home em React, TypeScript, Vite, Tailwind CSS e React Router. Requer Node.js 22.12+ (validado com Node.js 24).

```sh
npm install
npm run dev
npm run build
npm run lint
```

No PowerShell com execução de scripts restrita, usar `npm.cmd` no lugar de `npm`.

## Escopo atual

- Home em `/`, com navbar flutuante, Hero responsivo e botões glass.
- Tipografia local: Space Grotesk, Inter e JetBrains Mono.
- `/projetos` tem apenas uma página provisória para o destino do CTA; a galeria pertence à Etapa 5.
- Conteúdo confirmado centralizado em `src/data/profile.ts`.
- Avatar estático aprovado integrado à Home, com texto alternativo e fallback em caso de erro. Ver `public/assets/avatar/README.md` para detalhes do recurso.
- As seções pessoais completas pertencem à Etapa 4. Motion e animações ficam para a Etapa 3.

## Documentação

As especificações existentes estão em `docs/AGENTS.md`, `docs/desing.md`, `docs/avatar.md`, `docs/portifolio.md` e `docs/roadmap.md`. As grafias originais dos arquivos foram preservadas.

## Verificação visual manual

Abrir `npm run dev` e verificar a Home em 320, 390, 768 e 1440 px: ausência de rolagem horizontal, composição vertical no celular e legibilidade. Percorrer links com Tab, verificar o atalho para conteúdo e navegar entre Início e Projetos. A conferência visual em navegador ainda é necessária.

Para hospedagem futura, configurar fallback das rotas da SPA para `index.html`.
