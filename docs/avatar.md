
# Avatar 3D — Raul Ferraz

## 1. Objetivo

Utilizar um personagem 3D estilizado como elemento visual principal da Home.

O personagem representa Raul Ferraz e deve transmitir uma imagem moderna, simpática e profissional.

## 2. Aparência

Características principais:

- Homem jovem.
- Cabelo castanho-escuro, volumoso e ondulado.
- Olhos claros, com tonalidade esverdeada
- Sobrancelhas marcantes.
- Óculos de armação metálica fina.
- Bigode fino e natural.
- Rosto levemente oval.
- Brincos pequenos.
- Expressão tranquila e confiante.

As características devem seguir as imagens de referência aprovadas.

Não alterar significativamente o rosto entre diferentes poses.

## 3. Roupa

- Moletom ou camiseta escura.
- Preferência por preto.
- Visual minimalista, sem estampas chamativas.

## 4. Iluminação

- Iluminação principal suave.
- Luz roxa/magenta em um dos lados.
- Luz azul no lado oposto.
- Sombras cinematográficas.
- Destaque para os olhos claros.

## 5. Estilo

Personagem 3D estilizado de alta qualidade.

Equilibrar:
- Semelhança com o Raul.
- Aparência de animação 3D.
- Texturas suaves.
- Expressões naturais.
- Estética consistente com o portfólio.

## 6. Implementação

O personagem NÃO será renderizado em tempo real usando Three.js.

Será implementado com imagens ou sequências de frames pré-renderizados.

Os recursos de imagem serão armazenados em:

public/assets/avatar/

## 7. Estados previstos

- idle: expressão neutra.
- blink: piscando.
- look-left: olhando à esquerda.
- look-right: olhando à direita.
- smile: sorriso sutil, opcional.

Cada estado deverá preservar:

- Mesmo personagem.
- Mesmo enquadramento.
- Mesma escala.
- Mesma iluminação.
- Mesmas roupas.
- Alinhamento consistente.

As poses só devem ser ativadas quando os arquivos correspondentes existirem.

## 8. Comportamento

Desktop:
- Personagem inicialmente em repouso.
- Piscadas ocasionais.
- Mudanças discretas de olhar.
- Reação suave ao movimento do cursor, se houver poses adequadas.

Mobile:
- Animação simplificada.
- Não depender do mouse.
- Priorizar desempenho.

## 9. Otimização

- Preferir WebP ou AVIF com transparência.
- Evitar arquivos excessivamente grandes.
- Manter imagem estática como fallback.
- Evitar mudanças bruscas de frames.
- Evitar layout shift durante carregamento.
- Respeitar preferência por movimento reduzido.

## 10. Privacidade

Fotos pessoais originais não devem ser publicadas automaticamente no repositório.

Utilizar somente os recursos finais aprovados para o portfólio.

## 11. Restrições

- Não utilizar avatar genérico de terceiros.
- Não substituir o personagem sem autorização.
- Não utilizar Three.js nesta implementação.
- Não inventar poses que não tenham arquivos disponíveis.
