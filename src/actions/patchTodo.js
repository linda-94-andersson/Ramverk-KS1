async function patchTodo() {

    const id = 3;

    const t = "";

    const b = false;

    const settings = {
        "async": true,
        "url": `http://localhost:5000/api/todos/${id}`,
        "method": "PATCH",
    }

    const url = new URL(settings.url);

    try {
        const res = await fetch(url, {
            name: t.name,
            completed: b.completed,
        });
        const data = await res.json();
        console.log(data + " try patchTodo");
    } catch (err) {
        console.log(err + " catch patchTodo");
    }
}

patchTodo();

export { patchTodo };