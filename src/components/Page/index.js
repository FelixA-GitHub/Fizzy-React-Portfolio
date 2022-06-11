//dependencies
import React from "react";
import PageContent from "../PageContent";
import About from  "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Page({ currentPage }) {

    const renderPage = () => {
        switch (currentPage) {
            case 'about me':
                return <About />;
        }
    }
}


