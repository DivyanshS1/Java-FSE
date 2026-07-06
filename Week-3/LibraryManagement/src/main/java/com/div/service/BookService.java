package com.div.service;

import com.div.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayBooks() {
        System.out.println("Book Service: Processing request...");
        bookRepository.getBooks();
    }
}
