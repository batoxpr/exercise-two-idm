import Data from "../app/components/data";
import ArticleCard from "../app/components/ArticleCard";
import styles from "../app/page.module.css";

export default function Home() {
  const projectName = "Exercise Two";

  return (
    <main>
       <h1>{projectName}</h1>
      {Data.map((article) => (
        <ArticleCard 
          key={article.id}
          date={new Date(article.publishedDate).toDateString()}
          title={article.title} 
          description={article.blurb}
          id={article.id}
          imageSrc={"https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg"}
        />
      ))}
    </main>
  );
}
