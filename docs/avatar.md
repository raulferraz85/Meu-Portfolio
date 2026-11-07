
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

Em 06/11/2026, o usuário solicitou substituir a implementação pré-renderizada por um avatar GLB interativo com Three.js, React Three Fiber e Drei. Esta decisão substitui a restrição anterior a Three.js.

- Modelo servido: `public/models/raul-avatar.glb`, acessível por `/models/raul-avatar.glb`.
- Original preservado: `src/components/home/portrait 3d model (1).glb`.
- Retrato aprovado em `public/assets/avatar/` continua como fallback durante carregamento, erro do modelo, indisponibilidade de WebGL ou perda de contexto.
- O Canvas é transparente e conserva a área e o layout da Home.

### Inspeção do recurso fornecido

- GLB 2.0 gerado pelo Tripo, 10.586.076 bytes, sem recursos externos ou compressão Draco/Meshopt.
- Uma malha com skin, 38.473 vértices, 18.751 triângulos e um material PBR.
- Armature com 13 juntas: Root, Spine_0/1/2, Head_0/1/2 e bone_6/7/8/10/11/12.
- Head_0 e Head_1 influenciam pescoço e cabeça. Seus eixos locais diferem dos eixos da cena.
- Nenhum AnimationClip ou morph target. Os ossos genéricos da face não documentam controles funcionais de olhos, pálpebras ou sorriso.
- Três texturas embutidas: basecolor JPEG 4096², metallic-roughness PNG 2048² e normal JPEG 2048². O PNG de metallic-roughness representa cerca de 5,74 MB do arquivo. O tamanho do download e o consumo de memória das texturas ainda são pontos para otimização futura.

## 7. Animações e limitações

- Acompanhamento do cursor e gesto de cumprimento são movimentos procedurais aplicados aos ossos reais Head_0/Head_1, sem clips importados.
- Limites combinados: aproximadamente ±10° horizontal e ±7° vertical. Os offsets em eixos mundiais são convertidos para o espaço do pai e compostos com as rotações originais.
- Repouso com variações pequenas de cabeça e deslocamento mínimo do conjunto, sem escalar a malha para simular respiração.
- Reação de 0,7 segundo ao clique diretamente na malha ou Enter/Espaço quando o avatar recebe foco. Cliques repetidos não reiniciam o gesto em andamento.
- Sem piscadas, movimento independente dos olhos, sorriso ou sobrancelhas: não existem controles comprovados para essas funções neste recurso.
- Se um modelo futuro não tiver os ossos reconhecidos, o fallback procedural limita a rotação de todo o busto a ±3°/±2°.

## 8. Comportamento

Desktop:
- Personagem inicialmente em repouso.
- Cabeça acompanha o cursor dentro da área do avatar, com interpolação exponencial baseada em delta time.
- Saída do cursor ou perda de foco retorna suavemente ao repouso.
- Movimentos faciais dependem de uma versão futura do modelo com controles apropriados.

Mobile:
- Repouso com amplitude reduzida e reação ao toque; não depende de mouse.
- A área do Canvas permite rolagem vertical por toque.
- Pixel ratio limitado a 1 em dispositivos sem ponteiro fino; até 1,5 no desktop.

## 9. Otimização

- Carregamento do código 3D sob demanda; não aumentar o pacote inicial com Three.js.
- Preservar geometria e texturas faciais. Uma futura otimização do GLB deve manter o original.
- Iluminação simples, sem sombras dinâmicas, pós-processamento ou mapas de ambiente externos.
- Manter imagem estática como fallback e reservar espaço para evitar layout shift.
- Pausar renderização quando a página estiver oculta ou o avatar fora da tela.
- Com `prefers-reduced-motion`, exibir modelo neutro e renderizar apenas sob demanda, sem gesto ou acompanhamento.
- Não usar estado React por frame; listeners devem ser removidos ao desmontar.

## 10. Privacidade

Fotos pessoais originais não devem ser publicadas automaticamente no repositório.

Utilizar somente os recursos finais aprovados para o portfólio.

## 11. Restrições

- Não utilizar avatar genérico de terceiros.
- Não substituir o personagem sem autorização.
- Não inventar ossos, controles faciais ou animações importadas.
- Não modificar o GLB original nem fabricar articulações ausentes.
