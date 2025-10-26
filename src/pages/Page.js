import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: String!) {
    pageCollection(where: { slug: $slug }, limit: 1) {
      items {
        sys { id }
        title
        content {
          json
        }
      }
    }
  }
`;

const Page = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_PAGE_BY_SLUG, {
    variables: { slug },
  });

  if (loading) return <p>Loading page...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const page = data.pageCollection.items[0];
  if (!page) return <p>Page not found.</p>;

  return (
    <div className="page-container">
      <Link to="/" className="back-link">← Back to Menu</Link>
      <h1>{page.title}</h1>
      <div className="page-content">
        {documentToReactComponents(page.content.json)}
      </div>
    </div>
  );
};

export default Page;
