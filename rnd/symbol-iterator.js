
function arrayFrom(iterable) {
  if (iterable[Symbol.iterator]) {
    const iterator = iterable[Symbol.iterator]();
    const result = [];
    let item = iterator.next();
    while (!item.done) {
       result.push(item.value);
       item = iterator.next();
    }
    return result;
  } else {
    throw new Error(`${iterable} is not an iterable object.`);
  }
}




 let movies = {
    action: [
        'Ведьмак',
        'Викинги',
        'Остаться в живых'
    ],
    comedy: [
        'Шурик', 
        'Кавказкая пленница',
        'Один дома'
    ],
    drama: [
        'Крёстный отец',
        '1 + 1',
        'Т-34'
    ],
    [Symbol.iterator]() {
        let allMovies  = Object.values(this),
            smallIndex = 0,
            bigIndex   = 0;
        return {
            next() {
                
                if (smallIndex === allMovies[bigIndex].length) {
                    smallIndex = 0;
                    bigIndex++;
                }

                if (bigIndex === allMovies.length) {
                    return {done: true}
                }

                return {
                    value: allMovies[bigIndex][smallIndex++],
                    done: false
                };
                
            }
        }
    }
};

