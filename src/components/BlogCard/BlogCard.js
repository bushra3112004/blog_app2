import "./BlogCard.css"
import { Link } from 'react-router-dom'

function BlogCard({ id, title, content, picture }) {
    return (
        <Link className="blog-card" to={`/blog/${id}`}>
            <h1 className="blog-title">{title}</h1>
            <p className="blog-content">{content.substring(0, 70)}....</p>
            
            <div className="city-img">
                <img src={picture} alt="city" />
            </div>


        </Link>
    )
}
export default BlogCard