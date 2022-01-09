# Links

- Link sao criados com o elemento <a></a> que tem um atributo "href".

- O valor do atributo "href" e a pagina qye você quer que as pessoas visitem quando clicam nos links.

- Por padrao os navegadores exibem links em azul com um sublinhado.

# URLS Absoluto

- (Uniform Resource Locator) cada pagina tem seu próprio URL que e o endereço web que você digita em um navegador.

- Exemplo (<a href="http://www.facebook.com">Facebook</a>).

# URLS Relativos

- Sao links para outras paginas no mesmo site.

- Exemplo (<a href="index.html">Pagina Principal</a>).

! Se tiver arquivos de paginas em outros níveis de pasta, entao devemos especificar o caminho da pasta/arquivo.

# Links De Email

- Para criar um link que inicia o programa de email do usuario utilizamos o elemento <a> mas com o atributo "mailto:" seguido pelo endereço de email para qual você quer que seja enviado.

# Links Em Uma Nova Janela

- Podemos tambem abrir links em uma nova janela usando o atributo "target" com o valor "_blank".

- Exemplo (<a href="http://www.htmlandcssbook.com" target="_blank"></a>)

! Geralmente você deve evitar links abrirem em uma nova janela, mas se fizer, e recomendável informar os usuários.

# Links Especifico Na Mesma Pagina

- Em paginas longas podemos criar link que levam direto para o conteudo, ou talvez um link que nos leve ao topo da pagina.

- Primeiro criamos pontos de destino utilizando o atributo id que irão identificar as seções da pagina.

- Exemplo aqui temos o destino (<div id="top"></div>) esse e o link no final da pagina(<a href="#top">top</a>).

! O valor do "href" começa com o simbolo "#" seguido pelo valor do atributo "id" de destino.

# Links Especifico Em Outra Pagina

- A Técnica e semelhante a anterior, contanto que a pagina destino tenha atributos "id" que identifique partes especificas.

- Exemplo (<a href="http://www.htmlandcssbook.com/#bottom"></a>).

! Nao tem exemplo feito no index.html.
