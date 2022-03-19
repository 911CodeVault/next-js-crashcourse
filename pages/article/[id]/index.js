// import { server } from '../../../config'
import Link from 'next/link'
import {useRouter} from 'next/router'

const article = ({article}) => {
    // const router = useRouter()
    // const {id} = router.query
  return (
    <>
    <h1>{article.title}</h1>
    <p>{article.body}</p>
    <br/>
    <Link href='/'>GO BACK</Link>
    </>
  )
}

export const getStaticProps = async (context) => {
    // const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  
    const article = await res.json()
  
    return {
      props: {
        article,
      },
    }
  }

// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = res.json()
    
//     return{
//         props:{
//             article,
//         },
//     }
// }


export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

  const articles = await res.json()

  const ids = articles.map((article) => article.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

// export const getStaticPaths = async () => {
//     // making a request to get all posts
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//     const articles = res.json()

//     // get array of article ids
//     const ids = articles.map(article => article.id)

//     // map thru ids
//     const paths = ids.map((id) => ({params: {id.toString()}}))

//     return {
//         paths:{
//             params:{
//                 paths,
//                 fallback: false,
//             }
//         }
//     }
// }

// we're exporting article and bringint it into this component as a prop
export default article