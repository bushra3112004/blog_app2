import "./BlogView.css";
import { useParams } from "react-router-dom";
import blogs from "../../data";

function BlogView() {
    const { id } = useParams();
    const selectedBlog = blogs.find((blogObject) => blogObject.id === id);
    if (!selectedBlog) {
        return <div>Blog not found</div>;
    }
    return (
        <div>
            <h1 className="title">{selectedBlog.title}</h1>
            <p>
                <img src={selectedBlog.picture} alt="Blog-City" className="pic" />
            </p>
            <div className="data">{selectedBlog.content}</div>
        </div>
    )
}
export default BlogView;