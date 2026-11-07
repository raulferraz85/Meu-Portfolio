
# Roadmap — Raul Ferraz Portfolio

## Objetivo

Desenvolver um portfólio pessoal moderno, responsivo, com identidade visual própria, personagem GLB interativo com fallback estático e galeria interativa de projetos.

## Etapa 1 — Configuração e arquitetura

Status: Em andamento

Tarefas:
- [x] Criar projeto com Vite, React e TypeScript.
- [x] Instalar dependências.
- [x] Configurar Tailwind CSS.
- [x] Configurar React Router.
- [x] Criar estrutura de pastas.
- [ ] Criar páginas iniciais.
- [ ] Configurar dados e tipagens.
- [x] Validar build e lint.

Critério de conclusão:
Aplicação executando corretamente, com navegação funcional e sem erros de build ou lint.

## Etapa 2 — Home e identidade visual

Status: Concluída — Home e avatar verificados em desktop e mobile; avatar evoluído para GLB na Etapa 3.

Tarefas:
- [x] Implementar design system.
- [x] Criar navbar flutuante.
- [x] Desenvolver Hero.
- [x] Adicionar avatar inicial estático.
- [x] Aplicar tipografia.
- [x] Implementar botões glass.
- [x] Ajustar layout responsivo.

Critério de conclusão:
Home visualmente consistente e funcional em desktop e mobile.

Registro de implementação — 06/11/2026:
- O repositório continha somente documentação e pastas vazias. Foi criada a base necessária da Etapa 1 para executar a Home.
- Foram consultados os arquivos existentes `docs/AGENTS.md`, `docs/desing.md`, `docs/avatar.md` e `docs/portifolio.md`; os nomes originais foram preservados.
- Tokens CSS, fontes locais, Hero, navegação acessível e botões glass implementados. Glass limitado à navbar e aos botões.
- Breakpoints de desktop, tablet e celular implementados; conferência posterior no Edge headless em 1440, 390 e 320 px confirmou layout sem rolagem horizontal e navegação funcional.
- Avatar aprovado pelo usuário integrado a partir de `public/assets/avatar/Retrato 3D com Luz Neon Roxa e Azul.png`, preservando a imagem original. Dimensões e texto alternativo configurados; enquadramento completo e espaço reservado em desktop e mobile, com monograma apenas como fallback de erro.
- Após integrar o avatar, build e lint passaram novamente; a imagem original foi confirmada no build por comparação de hash. Conferência visual concluída durante a evolução para GLB.
- `/projetos` contém apenas uma página provisória para manter o CTA funcional, sem antecipar a galeria da Etapa 5.
- A entrega inicial não incluiu animações. A evolução do personagem para GLB está registrada na Etapa 3; conteúdo pessoal adicional permanece na Etapa 4.
- `npm.cmd run build` e `npm.cmd run lint` concluídos com sucesso. O build exigiu execução fora do sandbox devido a bloqueio de acesso do esbuild.
- A instalação reportou sete vulnerabilidades moderadas nas dependências; revisão de dependências pendente. A auditoria offline não substitui uma auditoria online atualizada.

## Etapa 3 — Interações e animações

Status: Em andamento — avatar GLB interativo implementado; animações de interface pendentes.

Tarefas:
- [ ] Implementar animações com Motion.
- [ ] Criar transições de entrada.
- [ ] Adicionar interações em botões.
- [x] Inspecionar e integrar o GLB do avatar, substituindo as sequências de imagens por solicitação do usuário.
- [x] Implementar acompanhamento do cursor, repouso e reação ao clique usando o rig real.
- [ ] Respeitar prefers-reduced-motion.

Critério de conclusão:
Interações funcionando sem prejudicar desempenho ou usabilidade.

Evolução solicitada — 06/11/2026:
- Nova instrução do usuário autoriza Three.js, React Three Fiber e Drei, substituindo a restrição anterior a renderização em tempo real.
- Original preservado em `src/components/home/portrait 3d model (1).glb`; cópia idêntica por SHA-256 em `public/models/raul-avatar.glb`.
- GLB inspecionado: 13 juntas, uma malha com skin, 18.751 triângulos, um material, nenhum clip ou morph target. Acompanhamento e reação são procedurais sobre Head_0/Head_1; não há piscadas ou controles faciais comprovados.
- Implementação modular em `Avatar3D.tsx`, `AvatarScene.tsx`, `useAvatarInteraction.ts` e `avatarMotion.ts`, com fallback de carga/WebGL, espaço reservado e importação dinâmica do código 3D.
- Renderização pausa fora da tela e em aba oculta. Preferência por movimento reduzido já implementada no avatar; aplicar também às futuras animações de interface antes de concluir a tarefa geral.
- Build, lint e sete testes de movimento passaram. O build mantém um aviso de tamanho do módulo 3D (~1 MB sem compressão, ~273 kB gzip), carregado separadamente do pacote inicial. O GLB original tem 10,59 MB e ainda pode ser otimizado no futuro.
- Quatorze verificações no Edge headless passaram: carregamento, cursor, clique/teclado/toque, retorno, navegação/remontagem, responsividade em 320/390 px, movimento reduzido sem frames contínuos, pausa fora da tela, evento de visibilidade e fallbacks por GLB inválido, WebGL indisponível e perda de contexto. Nenhum erro JavaScript nos fluxos normais. O evento de aba oculta foi simulado; desempenho em celular físico ainda depende do hardware.
- Nenhum commit realizado nesta entrega, conforme solicitado.

## Etapa 4 — Conteúdo pessoal

Status: Pendente

Tarefas:
- [ ] Implementar Sobre mim.
- [ ] Implementar Tecnologias.
- [ ] Implementar Experiências e formação.
- [ ] Implementar Minha trajetória.
- [ ] Implementar Contato.
- [ ] Revisar informações pessoais.

Critério de conclusão:
Todas as seções funcionais e com conteúdo confirmado.

## Etapa 5 — Projetos

Status: Pendente

Tarefas:
- [ ] Criar galeria.
- [ ] Criar componentes de projeto.
- [ ] Implementar filtros.
- [ ] Criar páginas individuais.
- [ ] Inserir imagens e demonstrações.
- [ ] Adicionar links para repositórios.
- [ ] Documentar decisões técnicas.

Critério de conclusão:
Projetos reais apresentados de forma profissional e navegável.

## Etapa 6 — Finalização

Status: Pendente

Tarefas:
- [ ] Testar responsividade.
- [ ] Verificar acessibilidade.
- [ ] Otimizar imagens.
- [ ] Melhorar SEO.
- [ ] Testar links e navegação.
- [ ] Validar build.
- [ ] Publicar o site.
- [ ] Configurar domínio, se houver.

Critério de conclusão:
Portfólio publicado, funcional e acessível.

## Regras de acompanhamento

- Não marcar tarefas como concluídas sem implementação e verificação.
- Atualizar o status ao finalizar cada etapa.
- Registrar decisões técnicas importantes.
- Não modificar etapas anteriores sem necessidade.
- Informar problemas ou pendências.
- Não realizar commits automaticamente.
