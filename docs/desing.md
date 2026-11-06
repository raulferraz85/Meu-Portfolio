
# Design System — Raul Ferraz

## 1. Conceito visual

Estilo: Dark Cinematic / Minimalista / Tecnológico.

O portfólio deve transmitir:
- Modernidade.
- Criatividade.
- Sofisticação.
- Personalidade.
- Qualidade técnica.

A inspiração principal é um portfólio de desenvolvedor com personagem 3D estilizado, iluminação cinematográfica e interface minimalista.

Evitar aparência de dashboard administrativo, template genérico ou landing page comercial.

## 2. Paleta de cores

Cores iniciais:

- Fundo principal: #090B10
- Fundo secundário: #171B25
- Texto principal: #F5F7FA
- Texto secundário: #A8B0C2
- Roxo de destaque: #8B7CF6
- Azul de destaque: #6DAAF7

Os destaques devem ser utilizados com moderação.

Criar tokens CSS reutilizáveis para essas cores.

## 3. Tipografia

Fontes sugeridas:

- Títulos: Space Grotesk
- Textos: Inter
- Trechos de código: JetBrains Mono

Utilizar hierarquia visual clara, títulos marcantes e textos legíveis.

## 4. Layout

### Desktop

- Navbar flutuante.
- Hero com composição assimétrica.
- Personagem em destaque à esquerda.
- Nome e apresentação à direita.
- Espaçamento generoso.
- Seções com largura máxima consistente.

### Mobile

- Navbar compacta e adaptada.
- Personagem e texto reorganizados verticalmente.
- Tipografia responsiva.
- Botões acessíveis ao toque.
- Sem rolagem horizontal acidental.

## 5. Liquid Glass

O efeito de vidro deve aparecer SOMENTE em:

- Barra de navegação.
- Botões.
- Controles interativos, como filtros da galeria.

Não aplicar o efeito em:
- Fundo da página.
- Seções de conteúdo.
- Cards de projetos.
- Cards de tecnologias.
- Containers de textos.

Utilizar transparência, blur, bordas suaves e reflexos discretos.

Preferir CSS com backdrop-filter.

Não utilizar expo-glass-effect, pois o projeto é uma aplicação web React.

## 6. Animações

Utilizar Motion para animações de interface quando necessário.

Animações permitidas:
- Entrada suave de elementos.
- Hover em botões.
- Transições entre conteúdos.
- Aparição de seções durante a rolagem.
- Interações leves nos cards.
- Movimento simulado do personagem.

Evitar:
- Animações excessivas.
- Efeitos que prejudiquem a leitura.
- Movimentos constantes sem propósito.
- Transições lentas que dificultem a navegação.

Respeitar prefers-reduced-motion.

## 7. Componentes visuais

Criar componentes reutilizáveis para:

- Navbar.
- GlassButton.
- SectionHeading.
- ProjectCard.
- TechnologyItem.
- Timeline.
- Footer.

Manter consistência de espaçamento, cores, bordas e tipografia.

## 8. Diretrizes de qualidade

- Design responsivo.
- Boa legibilidade e contraste.
- Estados hover, focus e active.
- Navegação por teclado.
- Carregamento eficiente.
- Imagens otimizadas.
- Não adicionar efeitos que não contribuam para a experiência.

## 9. Regra principal

O personagem deve ser o protagonista visual da Home.

O Liquid Glass complementa a interface, mas não deve dominar o design.
