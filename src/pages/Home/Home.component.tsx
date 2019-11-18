import React, { FC } from "react";

import { Block, BlockProps } from "../../components/Block";
import { Milestone } from "../../types";
import style from "./Home.module.scss";

interface HomeProps {
    milestones: Milestone[];
};

const HomeView: FC<HomeProps> = (props: HomeProps) => {
    return (
        <section>
            <div className={style.imageWrap}>
                <img className="circle" src="/img/headshot.jpg" alt="headshot of Shawn Rice" />
            </div>

            <h2 className="centered">Hi. My name is Shawn.</h2>

            <p>I am a web developer living and working in Charleston, SC. I am a firm believer in the path of least resistance and maintain that the simplest solution is the usually best one. My career started in the arts world, so I am well acquainted with communicating and collaborating with people from diverse disciplines and backgrounds. And it has given me a tremendous amount of empathy for non-technical users. However, the journey from under-employed actor/failing real-estate agent to mid-level web developer did not occur overnight. It all started when...</p>

            <div>
                {props.milestones && (props.milestones.length > 0) && (
                    props.milestones.map((milestoneProps: Milestone) => {
                        const blockProps: BlockProps = {
                            description: milestoneProps.description,
                            image: milestoneProps.image,
                            subtitle: milestoneProps.date,
                            title: milestoneProps.title,
                        }

                        return (
                            <Block {...blockProps} />
                        )
                    })
                )}
            </div>
        </section>
    );
}

export default HomeView;
