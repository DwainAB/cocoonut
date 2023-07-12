import React from "react";
import Formulaire from "../Components/Formulaire/Formulaire"
import Header from "../Components/Header/Header"
import SectionNews from "../Components/section-news/section-news";
import SectionTendency from "../Components/section-tendency/section-tendency";
import SectionNewsletter from "../Components/section-newsletter/section-newsletter";
import SectionGallery from "../Components/section-gallery/section-gallery";

function Home(){
    return(
        <div>
            <Header/>
            <SectionNews/>
            <SectionTendency/>
            <SectionGallery/>
            <Formulaire/>
            <SectionNewsletter/>
        </div>
    )
}

export default Home