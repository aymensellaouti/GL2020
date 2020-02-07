var book = {
    "main title": "JavaScript",
    'sub-title': "The Guide",
    "for": "all audiences",
    author: {
        firstname: "David",
        surname: "Flanagan"
    }
};

for (attribut in book) {
    console.log(`${attribut} : ${book[attribut]}`);
}
