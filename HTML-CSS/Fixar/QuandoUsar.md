# POSITION ABSOLUTE:

    top, right, bottom, left é possivel utilizar;

    z-index para ficar atras de outro intem;

    Para preencher apenas o espaço do seu parent, é necessario declarar o parent como position: relative;

    Usar absolute quando quiser remover um elemento do Flow original do documento;

# STATIC AND RELATIVE:

    static elementes nao tem acesso a top, bottom, right, left, portanto eles ficam estáticos em suas posições;

    relative tem acesso a top, bottom, right and left;

    Usar relative quando quiser posicionar elementos no fluxo normal do documento;

# FIXED AND STICKY:

    FIXED é semelhante ao absolute, ou seja, é utilizado quando desejamos remover o item do flow do documento;

    A diferença é que quando há o scroll na página ele fica fixo e vai junto ao scroll por toda página;

    Item com position fixed estao sempre ralativos ao campo HTML;

    STICKY funciona semelhante ao positiion relative e fixed;

    Um item com position Sticky vai seguir o scroll da pagina mas apenas pelo campo do seu parent
