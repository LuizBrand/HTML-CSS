# em and rem:

    - Relatives units;

    -- em: pega como base o tamanho de seu parent, se o parent nao tiver um valor para aquela
    opcao definido (por exemplo: font-size), ele vai perguntar ao outros blocos externos
    até encontrar o primeiro bloco com font-size definido e assim ajustar seu tamanho
    relativo à aquele valor;

    -- rem: por sua vez é relativo ao valor do root (geralmente 16px), logo 1rem = 16px;

    -- em: é muito bom para definição de paddings, margins and widths, uma vez que ele é relativo ao tamanho do seu
    parent

# %, vh, vw:

    - % é relativo ao seu parent;
    - vw: viewport-width
    - vh: viewport-height

# ch:

    - ch: numero de caracteres por linha
