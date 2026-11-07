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
- Avatar GLB interativo com acompanhamento do cursor, repouso discreto e reação ao clique ou Enter/Espaço. O retrato aprovado permanece como fallback. Ver `docs/avatar.md` para inspeção e limitações do modelo.
- Preferência por movimento reduzido, pausa quando oculto/fora da tela e comportamento simplificado no celular.
- As seções pessoais completas pertencem à Etapa 4. Animações de interface com Motion permanecem na Etapa 3.

## Avatar 3D

Implementação em `src/components/home/Avatar3D.tsx` e `AvatarScene.tsx`, interação em `src/hooks/useAvatarInteraction.ts` e cálculo de movimento em `src/lib/avatarMotion.ts`.

O modelo de 10,59 MB está em `public/models/raul-avatar.glb`; a cópia original em `src/components/home/portrait 3d model (1).glb` foi preservada. Há rig corporal com ossos de cabeça/pescoço, mas não há clips nem controles faciais identificáveis: os movimentos são procedurais, sem piscadas ou expressões simuladas por deformação.

Os testes de movimento podem ser executados com:

```sh
npm test
```

## Documentação

As especificações existentes estão em `docs/AGENTS.md`, `docs/desing.md`, `docs/avatar.md`, `docs/portifolio.md` e `docs/roadmap.md`. As grafias originais dos arquivos foram preservadas.

## Validação

Build, lint e sete testes de movimento passaram. Quatorze verificações no Edge headless cobriram Home em 1440, 390 e 320 px, carregamento do GLB, movimento/retorno, clique/teclado/toque emulado, navegação, movimento reduzido, pausa por visibilidade e fallback de GLB/WebGL. O evento de aba oculta foi simulado. Em celular real, desempenho e toque ainda dependem do hardware e devem ser conferidos antes da publicação.

Para testar manualmente, abrir `npm run dev`, mover o cursor sobre o avatar, clicar diretamente no personagem ou focá-lo com Tab e usar Enter/Espaço. Verificar também a preferência de movimento reduzido do sistema.

Para hospedagem futura, configurar fallback das rotas da SPA para `index.html`.
