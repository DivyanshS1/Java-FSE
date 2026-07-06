package com.div.repository;

public class BookRepository {
    public void getBooks() {

        System.out.println("Fetching books from the database...");

        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

}
