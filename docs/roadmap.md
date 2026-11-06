
# Roadmap — Raul Ferraz Portfolio

## Objetivo

Desenvolver um portfólio pessoal moderno, responsivo, com identidade visual própria, personagem 3D pré-renderizado e galeria interativa de projetos.

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

Status: Em andamento — Home e avatar estático implementados; conferência visual pendente.

Tarefas:
- [x] Implementar design system.
- [x] Criar navbar flutuante.
- [x] Desenvolver Hero.
- [x] Adicionar avatar inicial estático.
- [x] Aplicar tipografia.
- [x] Implementar botões glass.
- [ ] Ajustar layout responsivo.

Critério de conclusão:
Home visualmente consistente e funcional em desktop e mobile.

Registro de implementação — 06/11/2026:
- O repositório continha somente documentação e pastas vazias. Foi criada a base necessária da Etapa 1 para executar a Home.
- Foram consultados os arquivos existentes `docs/AGENTS.md`, `docs/desing.md`, `docs/avatar.md` e `docs/portifolio.md`; os nomes originais foram preservados.
- Tokens CSS, fontes locais, Hero, navegação acessível e botões glass implementados. Glass limitado à navbar e aos botões.
- Breakpoints de desktop, tablet e celular implementados; a tarefa de responsividade permanece pendente até conferência visual em navegador.
- Avatar aprovado pelo usuário integrado a partir de `public/assets/avatar/Retrato 3D com Luz Neon Roxa e Azul.png`, preservando a imagem original. Dimensões e texto alternativo configurados; enquadramento completo e espaço reservado em desktop e mobile, com monograma apenas como fallback de erro.
- Após integrar o avatar, build e lint passaram novamente; a imagem original foi confirmada no build por comparação de hash. A conferência visual em navegador continua pendente.
- `/projetos` contém apenas uma página provisória para manter o CTA funcional, sem antecipar a galeria da Etapa 5.
- Animações do personagem e da interface não foram implementadas. Conteúdo pessoal adicional permanece na Etapa 4.
- `npm.cmd run build` e `npm.cmd run lint` concluídos com sucesso. O build exigiu execução fora do sandbox devido a bloqueio de acesso do esbuild.
- A instalação reportou sete vulnerabilidades moderadas nas dependências; revisão de dependências pendente. A auditoria offline não substitui uma auditoria online atualizada.

## Etapa 3 — Interações e animações

Status: Pendente

Tarefas:
- [ ] Implementar animações com Motion.
- [ ] Criar transições de entrada.
- [ ] Adicionar interações em botões.
- [ ] Preparar sequências do avatar.
- [ ] Implementar troca suave de poses.
- [ ] Respeitar prefers-reduced-motion.

Critério de conclusão:
Interações funcionando sem prejudicar desempenho ou usabilidade.

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
