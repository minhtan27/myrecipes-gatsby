import React from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Bold = ({ children }) => (
  <span style={{ fontWeight: "bold" }}>{children}</span>
);
const Paragraph = ({ children }) => <p>{children}</p>;
const Heading3 = ({ children }) => <h3>{children}</h3>;

const BlogPost = ({ content }) => {
  const text = JSON.parse(content.raw);
  const images = content.references;

  const getContextImage = (data, imageID) => {
    return data.find((item) => item.contentful_id === imageID);
  };

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.HEADING_3]: (node, children) => <Heading3>{children}</Heading3>,
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const contextImage = getImage(
          getContextImage(images, node.data.target.sys.id)
        );
        return (
          <GatsbyImage
            image={contextImage}
            style={{ height: "600px", margin: "20px 0px" }}
            alt="image"
          />
        );
      },
    },
  };

  return <>{documentToReactComponents(text, options)}</>;
};

export default BlogPost;
