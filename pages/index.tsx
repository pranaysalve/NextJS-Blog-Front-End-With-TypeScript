import { GetServerSideProps, NextPage } from 'next'
import axios, { AxiosResponse } from "axios"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { fetchArticles, fetchCategories } from '../service/index'
import { ICollectionResponse, ICategory, IArticle } from 'types';
import Tabs from 'components/tabs'
import ArticleList from 'components/articlelist'
import qs from "qs"
import Pagination from 'components/pagination'
import { IPagination } from 'types'
import { useRouter } from 'next/router'
import { IQueryOptions } from 'types'
import { debounce } from 'utils'


const inter = Inter({ subsets: ['latin'] })

interface IPropTypes {
  categories: {
    items: ICategory
  },
  articles: {
    items: IArticle[];
    pagination: IPagination;
  }
}

const Home: NextPage<IPropTypes> = ({ categories, articles }) => {
  const router = useRouter();

  const handleOnSearch = (query: string) => {
    router.push(`/?search=${query}`)
  }

  const { page, pageCount } = articles.pagination;
  return (
    <>
      <div>
        <Head>
          <title>My page title</title>
        </Head>
        <Tabs categories={categories.items} handleOnSearch={debounce(handleOnSearch, 500)} />
        {/* Articles */}
        <ArticleList articles={articles.items} />
        {/* pagination */}
        <Pagination page={page} pageCount={pageCount} />
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  const options: Partial<IQueryOptions> = {
    populate: ['author.avatar'],
    sort: ['id:desc'],
    pagination: {
      page: query.page ? +query.page : 1,
      pageSize: 1
    }
  }

  if (query.search) {
    options.filters = {
      Title: {
        $containsi: query.search
      }
    }
  }

  const queryString = qs.stringify(options);
  console.log({ queryString })
  // categories
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories();
  //articles 
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticles(queryString)



  return {
    props: {
      categories: {
        items: categories.data
      },
      articles: {
        items: articles.data,
        pagination: articles.meta.pagination
      },
    }
  }
}

export default Home;