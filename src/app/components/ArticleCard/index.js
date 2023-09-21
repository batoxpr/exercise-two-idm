"use client";

import styles from "./articleCard.module.css"

const ArticleCard = ({date, description, imageAlt, imageSrc, title, link}) => {
    return (
        <div className={styles.articleCard}>
            <div className={styles.articleCardImage}>
              <img src={imageSrc} alt={imageAlt}/>
            </div>

            <div className={styles.articleCardContent}>
              <h2>{title}</h2>
              <p>{date}</p>
              <p>{description}</p>
              <a href="{link}">Read More</a>
            </div>
        </div>
    );
};

export default ArticleCard;