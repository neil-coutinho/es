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

async function count(seconds) {
    try {
        const value = await counter(seconds);
        console.log(value);
    } catch(e) {
        console.log(e);
    }
   
}

count(4);