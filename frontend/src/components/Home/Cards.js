import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { FaEdit } from'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { IoAddCircleSharp} from 'react-icons/io5';
const Cards = ({home, setInputDiv}) => {
    const data =[
        {
            title: "The best coding channel",
            desc: "Lorem ipsum lorem ipsum tango ren solo",
            status: "In Complete"
        },
        {
            title: "CPP Concepts",
            desc: "Lorem ipsum lorem ipsum tango ren solo",
            status: "Complete"
        },
        {
            title: "DSA Concepts",
            desc: "Lorem ipsum lorem ipsum tango ren solo",
            status: "In Complete"
        },
        {
            title: "Basic Programming Concepts",
            desc: "Lorem ipsum lorem ipsum tango ren solo",
            status: "In Complete"
        },
        {
            title: "Grocery List",
            desc: "Lorem ipsum lorem ipsum tango ren solo",
            status: "Complete"
        },

    ]
    // const [ImportantButton, setImportantButton] = useState("Incomplete");
  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
        {
            data &&
            data.map((items,i)=>(
            <div className=' flex flex-col justify-between bg-gray-800 rounded-sm p-4'>
                <div>
                    <h3 className='text-xl font-semibold'>{items.title}</h3>
                    <p className='text-gray-300'>{items.desc}</p>
                </div>
                <div className='mt-4 w-full flex items-center'>
                <button className={`bg-${items.status === "In Complete" ? 'red-420' : 'green-300'} text-white p-2 rounded w-3/6`}>
                {items.status}
                </button>
                        <div className='text-white p-2 w-3/6 text-2xl font-semibold flex justify-around '>
                            <button><CiHeart /></button>
                            <button><FaEdit /></button>
                            <button><MdDelete /></button>
                        </div>
                </div>
            </div>
            ))
        }
        {
            home === "true" && (
            <button className=' flex flex-col justify-center items-center bg-gray-800 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300' onClick={()=>setInputDiv("fixed")}>
                <IoAddCircleSharp className='text-5xl'/>
                <h2 className='text-2xl mt-4'>Add Tasks</h2>
            </button>
            )
        }
    </div>
  )
}

export default Cards;
