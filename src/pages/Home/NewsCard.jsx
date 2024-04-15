
import PropTypes from 'prop-types';
import moment from 'moment';
import { CiBookmark, CiShare2, } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const { image_url, title, author, details, rating, total_view, _id } = news
    return (
        <div className="card card-compact bg-base-100 border  space-y-4 p-6 mb-8">
        <div className='space-y-4 flex justify-between bg-base-200 p-4 rounded-lg'>
            <div className='flex gap-4'>
                <img className='w-12 rounded-full' src={author.img} alt="" />
                <p className='font-semibold'>{author.name}
                    <p className='font-normal'>{moment().format("YYYY-MM-DD ")}</p>
                </p>

            </div>

            <div>
                <p className='flex text-2xl gap-4'>
                    <CiBookmark></CiBookmark>
                    <CiShare2></CiShare2>
                </p>
            </div>
        </div>

        <p className='text-2xl font-semibold'>{title}</p>

        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
            
            {/* <p className='text-base'>{details}</p> */}
            {
                details.length > 200 ? 
                <p>{details.slice(0, 200)}<Link to={`/news/${_id}`} className='text-red-400 font-medium py-2'>Read More...</Link></p>
                 :
                <p>{details}</p>

            }
           
            <hr />
            <div className='flex justify-between'>
                <p className='flex gap-1 items-center'>
                    <FaStar className='text-red-400 text-xl'></FaStar>
                    <FaStar className='text-red-400 text-xl'></FaStar>
                    <FaStar className='text-red-400 text-xl'></FaStar>
                    <FaStar className='text-red-400 text-xl'></FaStar>
                    <FaStar className='text-red-400 text-xl'></FaStar>
                    <p className='text-lg font-medium px-3'>
                        {rating.number}
                    </p>
                </p>
                <p className='flex items-center gap-3'>
                    <MdOutlineRemoveRedEye className='text-xl'></MdOutlineRemoveRedEye>
                    {total_view}
                </p>
            </div>
        </div>
    </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.node
}

export default NewsCard;