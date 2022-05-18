async function getTodo() {

    const id = 1; 

    const settings = {
        "async": true,
        "url": `http://localhost:5000/api/todos/${id}`,
        "method": "GET",
    }

    const url = new URL(settings.url);

    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data + " try getTodo-singel");
    } catch (err) {
        console.log(err + " catch getTodo-singel err");
    }
}

getTodo();

export { getTodo };