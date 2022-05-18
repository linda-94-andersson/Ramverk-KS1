async function getTodos() {
    const settings = {
        "async": true,
        "url": "http://localhost:5000/api/todos",
        "method": "GET",
    }

    const url = new URL(settings.url);

    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err + " try getTodos err");
    }
}

getTodos();

export { getTodos };