import React, { FC } from "react";

import { IASRImage } from "../../types";

import style from "./Block.module.scss";

export interface BlockProps {
    description: string;
    image?: IASRImage;
    subtitle?: string;
    title: string;
}

const Block: FC<BlockProps> = (props: BlockProps) => {
    const { description, image, subtitle } = props;

    function renderHTML() {
        return {
            __html: description
        }
    }

    return (
        <div>
            <header>
                {image && (
                    <div className={style.imageWrap}>
                        <img className="circle" src={image.src} alt={image.alt} />
                    </div>
                )}

                {subtitle && <small>{subtitle}</small>}

                <h3>{props.title}</h3>
            </header>

            <p dangerouslySetInnerHTML={renderHTML()} />
        </div>
    );
}

export { Block }
