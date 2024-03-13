
import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";



const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {title,cover,reading_time,posted_date,author_img,author,hashtags} =blog;
    return (
        <div className='mb-20 mt-8 space-y-4'>
            <img className='w-full mb-8 rounded-md' src={cover} alt={`Cover picture of the titel${title}`}/>
            <div className='flex justify-between '>
                <div className='flex fl'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-24'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>


                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button className='ml-1 text-red-600 '
                    ><CiBookmark onClick={()=>handleAddToBookmark(blog)}></CiBookmark></button>
                    

                </div>
            </div>
            <h2 className='text-2xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key = {idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button 
             onClick={()=>handleMarkAsRead(reading_time)}
            className='text-purple-800 font-bold underline ' >Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;

