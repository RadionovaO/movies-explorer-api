import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../SavedMovies/MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies() {

    return (
        <div className="saved-movies">
            <Header />
            <main>
                <SearchForm />
                <MoviesCardList />
            </main>
            <Footer />
       </div>
    );
};

export default SavedMovies;