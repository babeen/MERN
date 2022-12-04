function cutPieces(fruit){
    return fruit * 4;
};

function fruitProcessor(apple,guava){
    let applePieces = cutPieces(apple);
    let guavaPieces = cutPieces(guava);
    let juice = `juice of ${applePieces} apple pieces and ${guavaPieces} guava pieces is prepared`;
    return juice
}

console.log(fruitProcessor(4,5));