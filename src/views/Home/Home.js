import "./Home.css"
import blogs from "../../data"
import BlogCard from "../../components/BlogCard/BlogCard"

function Home() {
    return (
        <>
            <div className="blog-container">
                {
                    blogs.map((blogObject, i) => {
                        const {
                            id,
                            title,
                            content,
                            picture
                        } = blogObject

                        return (
                            <BlogCard
                                id={id}
                                title={title}
                                content={content}
                                picture={picture}
                            />)
                    })
                }
            </div>
        </>
    )
}
export default Home