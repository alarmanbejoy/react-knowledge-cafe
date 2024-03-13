import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const{title}= bookmark
    return (
        <div className='bg-gray-300 p-5 m-4 rounded-md '>
            <h3 className='text-2xl '>{title}</h3>
        </div>
    );
};
Bookmark.propTypes={
    bookmark: PropTypes.object
}

export default Bookmark;