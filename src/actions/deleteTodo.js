async function deleteTodo() {

    const id = 2; 

    const settings = {
        "async": true,
        "url": `http://localhost:5000/api/todos/${id}`,
        "method": "DELETE",
    }

    const url = new URL(settings.url);

    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data + " try deleteTodo");
    } catch (err) {
        console.log(err + " catch deleteTodo");
    }
}

deleteTodo();

export { deleteTodo };