/* 
    * 2C = Two of Clubs (2 de tréboles)
    * 2D = Two of Diamonds (2 de diamantes)
    * 2H = Two of Hearts (2 de corazones)
    * 2S = Two of Spades (2 de espadas)
 */

// En algun momento lo voy a manipular o cambiar (let)
let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

// Esta función crea un nuevo deck (baraja)
const crearDeck = () => {

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push ( i + tipo );
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push ( esp + tipo );
        }
    }

    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

crearDeck();

// Esta función me permite tomar una carta
const pedirCarta = () => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }


    const carta = deck.pop();

    console.log( deck );
    // La carta debe ser de la baraja (deck)
    console.log( carta );
    return carta;
}

// pedirCarta();
const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
             ( valor === 'A') ? 11 : 10
             : valor * 1;

    // let puntos = 0;
    // 2 = 2, 10 = 10, 3 = 3
    // if( isNaN( valor ) ) {
    //     console.log( 'No es un número' );
    //     puntos = ( valor === 'A' ) ? 11 : 10;

    // } else {
    //     console.log( 'Es un número' );
    //     puntos = valor * 1;
    // }

    // console.log( puntos );
}

const valor = valorCarta( pedirCarta() );
console.log({ valor });