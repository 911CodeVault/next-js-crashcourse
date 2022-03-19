import ArticleItem from './ArticleItem';
import articleStyles from '../styles/Articles.module.css'

const ArticleList = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
        {articles.map((article) => (
      // <h3>{article.title}</h3>
      <ArticleItem article={article}/>
    ))}
    </div>
  )
}

export default ArticleList