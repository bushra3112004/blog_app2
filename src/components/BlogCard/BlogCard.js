import "./BlogCard.css"
import { Link } from 'react-router-dom'

function BlogCard({ id, title, content, famous, cultural_events, city }) {
    return (
        <Link className="blog-card" to={`/blog/${id}`}>
            <h1 className="blog-title">{title}</h1>
            <p className="blog-content">{content.substring(0, 70)}....</p>
            <p className="blog-famous">{famous}</p>
            <p className="blog-culture">{cultural_events}</p>
            <div className="city-img">
                <img src={city.picture} alt="city" />
            </div>


        </Link>
    )
}
export default BlogCard