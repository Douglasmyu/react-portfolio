import React from "react";

import { Link } from "react-router-dom";


const files = import.meta.glob("../blog/*.md", {
    eager: true,
    query: "?raw",
    import: "default",
});

console.log("[blogs] discovered files: ", Object.keys(files));
function getTitle(markdown) {
    const match = markdown.match(/^#\s+(.+)/m);
    return match ? match[1].trim() : "Untitled";
}

const post= Object.entries(files).map(([path, content]) => {
    const slug = path.split("/").pop().replace(/\.md$/,"");
    const title = getTitle(content);
    return { slug, title};
})
export default function Blogs() {
    return(
        <div>
            <h1 style={{ maxWidth: 800, margin: "2rem auto", padding: "0 1rem" }}>Blogs</h1>
            <p>These are my blogs.  I decided to start writing blogs as an alternative to doom scrolling.</p>
            <ul>
                {post.slice().reverse().map(({ slug, title})=>
                    <li key = {slug}>
                        <Link to={`/blog/${slug}`}>{title}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}