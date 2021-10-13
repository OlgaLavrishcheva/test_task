// http://www.omdbapi.com/?i=tt3896198&apikey=88d2e404 использовался для отладки метода

let getData = (url) => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 200) {
            const json = JSON.parse(xhr.response);
            resolve(json.Search);
        } else reject(xhr.statusText)
    };
    xhr.onerror = (err) => reject(err)
});

getData(`тут будет адрес сервера`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
