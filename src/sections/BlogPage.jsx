// src/BlogPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import ReactMarkdown from "react-markdown";

// Eagerly load all markdown as RAW text
const files = import.meta.glob("../blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export default function BlogPage() {
  const { slug } = useParams();
  const key = `../blog/${slug}.md`;
  const content = files[key] ?? "# Post not found";

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto", padding: "0 1rem" , marginTop: "11rem"}} 
      className="markdown">
      <p><Link to="/blogs"><IoArrowBackCircleSharp />Back to Blogs</Link></p>
  
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
