import React, { FC } from "react";

interface HomeProps {};

const HomeView: FC = (props: HomeProps) => {
    return (
        <section>
            <h1>Hi. My name is Shawn.</h1>

            <img className="circle" src="/img/headshot.jpg" alt="headshot of Shawn Rice" />
        </section>
    );
}

export default HomeView;
