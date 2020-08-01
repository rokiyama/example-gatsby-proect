import React from "react";
import Img from "gatsby-image";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFolderOpen, faChevronLeft, faChevronRight, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const contentRenderOptions = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2>
        <FontAwesomeIcon icon={faCheckSquare} />
        {children}
      </h2>
    )
  }
}

export default ({ data }) => (
  <Layout>
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <title>ESSENTIALS</title>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" integrity="sha384-v8BU367qNbs/aIZIxuivaU55N5GPF89WBerHoGA4QTcbUjYiLQtKdrfXnqAcXyTv" crossOrigin="anonymous" />
      <link rel="stylesheet" href="style.css" />
      <link rel="icon" href="images/icon.png" type="image/png" />
      <header className="header">
        <div className="container">
          <div className="site">
            <a href="base-index.html">
              <img src="images/logo.svg" alt="ESSENTIALS" />
            </a>
          </div>
          <nav className="nav">
            <ul>
              <li><a href="base-index.html">TOP</a></li>
              <li><a href="base-about.html">ABOUT</a></li>
              <li><a href="base-blog.html">BLOG</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="eyecatch">
        <figure>
          <Img
            fluid={data.contentfulBlogPost.eyecatch.fluid}
            alt={data.contentfulBlogPost.eyecatch.description}
          />
        </figure>
      </div>
      <article className="content">
        <div className="container">
          <h1 className="bar">{data.contentfulBlogPost.title}</h1>
          <aside className="info">
            <time dateTime={data.contentfulBlogPost.publishDate}>
              <FontAwesomeIcon icon={faClock} />
              {data.contentfulBlogPost.publishDateJP}
            </time>
            <div className="cat">
              <FontAwesomeIcon icon={faFolderOpen} />
              <ul>
                {data.contentfulBlogPost.category.map(cat => (
                  <li className={cat.categorySlug} key={cat.id}>{cat.category}</li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="postbody">
            {documentToReactComponents(data.contentfulBlogPost.content.json, contentRenderOptions)}
          </div>
          <ul className="postlink">
            <li className="prev">
              <a href="base-blogpost.html" rel="prev">
                <FontAwesomeIcon icon={faChevronLeft} />
                <span>前の記事</span>
              </a>
            </li>
            <li className="next">
              <a href="base-blogpost.html" rel="next">
                <span>次の記事</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </li>
          </ul>
        </div>
      </article>
      <footer className="footer">
        <div className="container">
          <div className="site">
            <a href="base-index.html">
              <img src="images/logo-w.svg" alt="ESSENTIALS" />
              <p>おいしい食材と食事を探求するサイト</p>
            </a>
          </div>
          <ul className="sns">
            <li>
              <a href="https://twitter.com/">
                <i className="fab fa-twitter" />
                <span className="sr-only">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/">
                <i className="fab fa-facebook-square" />
                <span className="sr-only">Facebook</span>
              </a>
            </li>
            <li>
              <a href="http://instagram.com/">
                <i className="fab fa-instagram" />
                <span className="sr-only">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    contentfulBlogPost {
      title
      publishDateJP: publishDate(formatString: "YYYY 年 M 月 DD 日")
      publishDate
      category {
        category
        categorySlug
        id
      }
      eyecatch {
        fluid(maxWidth: 1600) {
          ...GatsbyContentfulFluid_withWebp
        }
        description
      }
      content {
        json
      }
    }
  }
`
