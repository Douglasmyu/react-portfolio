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

function getDate(markdown){
    const match = markdown.match(/\*\*Date:\*\*\s*(\d{4}-\d{2}-\d{2})/);
    return match ? match[1].trim() : null;
}

function sortByDate(posts){
    return posts.slice().sort((a,b) => new Date(b.date) - new Date(a.date))

}
const post= Object.entries(files).map(([path, content]) => {
    const slug = path.split("/").pop().replace(/\.md$/,"");
    const title = getTitle(content);
    const date = getDate(content);
    return { slug, title, date};
})
export default function Blogs() {
    return(
        <div>
            <h1 style={{ maxWidth: 800, margin: "2rem auto", padding: "0 1rem" }}>Blogs</h1>
            <p>These are my blogs.  I decided to start writing blogs as an alternative to doom scrolling.</p>
            <ul>
                {sortByDate(post).slice().map(({ slug, title, date})=>
                    <li key = {slug}>
                        <Link to={`/blog/${slug}`}>{title}</Link>
                        {date &&(
                            <p>
                                {new Date(date).toLocaleDateString("en-US", {
                                    year:"numeric",
                                    month:"long",
                                    day:"numeric",
                                })}
                            </p>
                        )}

                    </li>
                )}
            </ul>
        </div>
    )
}