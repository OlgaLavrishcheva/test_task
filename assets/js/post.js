// https://jsonplaceholder.typicode.com/posts использовался для отладки метода

async function postData(url, data) {
    console.log(JSON.stringify(data))
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) throw Error(response.statusText);

    return response.json();
}

postData(`адрес где будут храниться данные`, {

    //сюда должны попадать данные из формы регистрации

})
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
