async function postTodo() {

    const t = "";

    const b = false;

    const settings = {
        "async": true,
        "url": `http://localhost:5000/api/todos`,
        "method": "POST",
    }

    const url = new URL(settings.url);

    try {
        const res = await fetch(url, {
            name: t.name,
            completed: b.completed,
        });
        const data = await res.json();
        console.log(data + " try postTodo");
    } catch (err) {
        console.log(err + " catch postTodo");
    }
}

postTodo();

export { postTodo };