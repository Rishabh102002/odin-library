const myLibrary = [
    {
        title: "Myth of sisyphus",
        author: "Albert camus",
        pages: 340,
        hasRead: false,
    },
    {
        title: "The Stranger",
        author: "Albert camus",
        pages: 150,
        hasRead: true,
    },
    {
        title: "Beyond Good and Evil",
        author: "Nietzsche",
        pages: 400,
        hasRead: false,
    }
];
const container = document.querySelector(".container");
display()

function display() {
    container.innerHTML = "";
    for (let index = 0; index < myLibrary.length; index++) {
        const book = myLibrary[index];

        let bookDOM = document.createElement("div");
        bookDOM.classList.add("book");

        let titleDOM = document.createElement("h3");
        titleDOM.textContent = book.title;
        titleDOM.style.margin = "0px";
        let authorDOM = document.createElement("h5");
        authorDOM.textContent = `By: ${book.author}`;
        authorDOM.style.margin = "16px 0px";
        let pagesDOM = document.createElement("p");
        pagesDOM.textContent = `no. of pages: ${book.pages}`;
        pagesDOM.style.marginBottom = "auto";
        let hasReadBtn = document.createElement("button");
        hasReadBtn.textContent = `read status: ${hasRead ? "finished" : "not yet"}`
        hasReadBtn.style.margin = "8px 0px";

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "remove book";
        removeBtn.classList.add("remove")
        removeBtn.value = index;
        removeBtn.addEventListener("click", ()=> {
            console.log(removeBtn.value)
            myLibrary.splice(removeBtn.value,1);
            display()
        })

        bookDOM.appendChild(titleDOM);
        bookDOM.appendChild(authorDOM);
        bookDOM.appendChild(pagesDOM);
        bookDOM.appendChild(hasReadBtn);
        bookDOM.appendChild(removeBtn);

        container.appendChild(bookDOM);

    }
}

function toggleForm() {
    const popup = document.querySelector("#popup");
    popup.classList.toggle('active');
}

document.querySelector('#addBookBtn').addEventListener('click', toggleForm);
document.querySelector('#closeFormBtn').addEventListener('click', toggleForm);

document.querySelector("#popup").addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const hasRead = document.getElementById('hasRead').checked;

    const newBook = {
        title: title,
        author: author,
        pages: parseInt(pages),
        hasRead: hasRead
    };

    console.log(newBook);
    myLibrary.push(newBook);
    display();
    toggleForm(); // Close the form after submission
    document.querySelector('#popup').reset(); // Reset the form fields
});

