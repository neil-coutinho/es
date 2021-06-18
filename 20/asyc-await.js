function counter(count) {
    return new Promise((resolve, reject) => {
        if(count < 5) {
            return reject(`Oh Noooo!!! Value ${count} is < 5`)
        }

        return setTimeout(()=> resolve(`Done after ${count} seconds`), (count*1000));
    });
}

counter(5)
    .then(res => console.log(res))

counter(2)
    .then(res => console.log(res))
    .catch(e => console.log(e))

function hoc(fn) {
    return function(...args) {
        fn(...args)
        .catch(e => console.log(e));
    }

}


async function count(seconds) {
    //Try/Catch error handling
    // try {
    //     const value = await counter(seconds);
    //     console.log(value);
    // } catch(e) {
    //     console.log(e);
    // }

    //Catch 
    // const value = await counter(seconds).catch(e => console.log(e));
    // if(value) {
    //     console.log(value);
    // }
   
    const value = await counter(seconds);
   
}

// count(4);
// count(10);

const hocFn = hoc(count);
hocFn(4);
