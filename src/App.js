import React from "react";
import Navbar from "./Components/navbar";
import Grid from "./Components/grid-img";
import Hero from "./Components/hero";
import Card from "./Components/Card";
import data from "./data";
import Footer from "./Components/Footer";

export default function App(){
    let cardsProps = data.map(x => {
        return <Card
        key = {x.id}
        x = {x}
        />
    })
    return (
        <div>
            <Navbar />
            <Grid />
            <Hero />
            <div className="card-container">
                {cardsProps}
            </div>
            <Footer />
        </div>
    )
}
/*<Card 
img="https://www.teamusa.org/-/media/USA_Triathlon/Images/Athletes/2020-Athlete-Headshots/2020-Nils-Athlete-Headshots/022820-katie-zaferes.jpg?mh=250&mw=150&hash=847BC14636A973C82E16E2DE5951F34F63FEFED1"
rating={5.0}
reviewCount={6}
country="USA"
title="Life Lessons with Katie Zaferes"
price={136}
/>
<Card 
img="https://www.teamusa.org/-/media/USA_Triathlon/Images/Athletes/2020-Athlete-Headshots/2020-Nils-Athlete-Headshots/022820-katie-zaferes.jpg?mh=250&mw=150&hash=847BC14636A973C82E16E2DE5951F34F63FEFED1"
rating={5.0}
reviewCount={6}
country="USA"
title="Life Lessons with Katie Zaferes"
price={136}
/>
<Card 
img="https://www.teamusa.org/-/media/USA_Triathlon/Images/Athletes/2020-Athlete-Headshots/2020-Nils-Athlete-Headshots/022820-katie-zaferes.jpg?mh=250&mw=150&hash=847BC14636A973C82E16E2DE5951F34F63FEFED1"
rating={5.0}
reviewCount={6}
country="USA"
title="Life Lessons with Katie Zaferes"
price={136}
/>*/