import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md: w-1/3 ml-8 bg-gray-100 rounded-xl mt-16">
            <div>
                <h3 className='text-2xl'>Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-2xl text-center">Bookmarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks: PropTypes.array,
    readingTimes: PropTypes.number
}
export default Bookmarks;