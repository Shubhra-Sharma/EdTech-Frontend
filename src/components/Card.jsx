import React from 'react';
// import {FcLike} from "react-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {toast} from "react-toastify";
const Card=(props)=>{
    let course=props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;

    function clickHandler(){
      if(likedCourses.includes(course.id)){
        // pehle se like hua pada tha
        setLikedCourses( (prev)=> prev.filter( (cid)=> (cid !== course.id) ));
        toast.warning("Like removed");
      }else{
        //pehle se like nahi h, insert it in the likedcourses.
        if(likedCourses.length=== 0){
             setLikedCourses([course.id]);
        }else{
           setLikedCourses( (prev) =>[...prev,course.id]);
        }
        toast.success("Liked!");
      }
    }
    return(
        <div className='w-[300px] bg-white rounded-md overflow-hidden shadow-lg'>
          <div className='relative'>
            <img src={course.image.url}/>
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center'>
            <button onClick={clickHandler}>
            <FontAwesomeIcon icon={faHeart} className="text-gray-400 hover:text-red-500 cursor-pointer"/>
            </button>
          </div>
          </div>
         
          <div className='p-4'>
            <p className='text-black font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2 text-black'>{course.description.length>100? (course.description.substr(0,100)+ '...') : (course.description)}</p>
          </div>
        </div>
    );
}

export default Card;