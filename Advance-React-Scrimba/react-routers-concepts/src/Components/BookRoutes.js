import React from "react";
import { Routes, Route } from "react-router-dom";
import BooksLayout from "./BooksLayout";
import BookList from "./BookList";
import Book from "./Book";
import NewBook from "./NewBook";

function BookRoutes() {
  return (
    <Routes>
      <Route element={<BooksLayout />}>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<NewBook />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default BookRoutes;
