
import { Link, Outlet } from "react-router-dom";
import { getBook } from "../../../Data/data-Book";


export default function Book() {
    const books = getBook();

    return (
        <>
            <main>
                <div>
                    {books.map((book) => (
                        <Link

                            to={`/books/${book.nameBook}`}
                            key={book.nameBook}
                        >
                            {book.nameBook}
                        </Link>
                    ))}
                </div>
            </main>
        </>
    );

}