import React from 'react'
import ArticleCard from "../components/ArticleCard"
const NewsFeed = () => {
  return (
    <div className='grid grid-cols-3 gap-10 my-2'>

      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />

    </div>
  )
}

export default NewsFeed