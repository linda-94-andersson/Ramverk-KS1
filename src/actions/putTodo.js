async function putTodo() {

    const id = 4; 

    const settings = {
        "async": true,
        "url": `http://localhost:5000/api/todos/${id}`,
        "method": "PUT",
    }

    const url = new URL(settings.url);

    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data + " try putTodo");
    } catch (err) {
        console.log(err + " catch putTodo err");
    }
}

putTodo();

export { putTodo };