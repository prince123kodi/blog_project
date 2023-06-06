import React, { useState } from 'react';
import { Navigate } from "react-router-dom";


function Addblog() {

    let [images, setImg] = useState('');
    let [title, setTitle] = useState('');
    let [category, setCategory] = useState('');
    let [des, setDes] = useState('');
    let [s_des, setSdes] = useState('');
    let [t_des, setTdes] = useState('');
    let [f_des, setFdes] = useState('');
    let [fifth_dis, setFifthdes] = useState('');
    let [author, setAuthor] = useState('');
    let [backPage, setBackpage] = useState(0)



    const submitData = (event) => {
        event.preventDefault();
        let Record = {
            images: images,
            title: title,
            category: category,
            des: des,
            s_des: s_des,
            t_des: t_des,
            f_des: f_des,
            fifth_dis: fifth_dis,
            author: author
        }
        console.log(Record);
        fetch("http://localhost:3001/blog/", {
            method: "POST",
            body: JSON.stringify(Record),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => { console.log("Record Added") }).catch(err => { console.log(err) })
        setBackpage(1)
    }



    return (
        <div>
            <div className='my-5'>
                <h1>Add Blog</h1>
            </div>
            <div className="formbold-main-wrapper">
                <div className="formbold-form-wrapper">
                    <form method="post" onSubmit={(e) => submitData(e)}>
                        <div className="formbold-mb-5">
                            <label htmlFor="name" className="formbold-form-label"> Add Title </label>
                            <input type='text' name="title" className="formbold-form-input" onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="formbold-mb-5">
                            <label htmlFor="phone" className="formbold-form-label"> Select Category </label>
                            <select name="type" className="formbold-form-input" onChange={(e) => setCategory(e.target.value)}>
                                <option>News</option>
                                <option>Sports</option>
                                <option>Politics</option>
                                <option>Technology</option>
                            </select>
                        </div>
                        <div className="formbold-mb-5">
                            <label htmlFor="email" className="formbold-form-label"> Select Image </label>
                            <input type='text' name="img" className="formbold-form-input" onChange={(e)=>setImg(e.target.value)}/>
                            
                        </div>
                        <div className="d-flex flex-wrap formbold--mx-3">
                            <div className="w-100 formbold-px-3">
                                <div className="formbold-mb-5 w-100">
                                    <label htmlFor="date" className="formbold-form-label"> Enter Author Name </label>
                                    <input type="text" name="author" onChange={(e) => setAuthor(e.target.value)} className="formbold-form-input" />
                                </div>
                            </div>
                        </div>
                        <div className="formbold-mb-5 formbold-pt-3">
                            <label className="formbold-form-label formbold-form-label-2">
                                Enter DesCription
                            </label>
                            <div className="d-flex flex-wrap formbold--mx-3">
                                <div className="w-100 sm:w-half formbold-px-3">
                                    <div className="formbold-mb-5">
                                        <textarea name="des" onChange={(e) => setDes(e.target.value)}></textarea>
                                    </div>
                                </div>
                                <div className="w-100 sm:w-half formbold-px-3">
                                    <div className="formbold-mb-5">
                                        <textarea name="s_des" onChange={(e) => setSdes(e.target.value)}></textarea>
                                    </div>
                                </div>
                                <div className="w-100 sm:w-half formbold-px-3">
                                    <div className="formbold-mb-5">
                                        <textarea name="t_des" onChange={(e) => setTdes(e.target.value)}></textarea>
                                    </div>
                                </div>
                                <div className="w-100 sm:w-half formbold-px-3">
                                    <div className="formbold-mb-5">
                                        <textarea name="f_des" onChange={(e) => setFdes(e.target.value)}></textarea>
                                    </div>
                                </div>
                                <div className="w-100 sm:w-half formbold-px-3">
                                    <div className="formbold-mb-5">
                                        <textarea name="fifth_des" onChange={(e) => setFifthdes(e.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <input type='submit' name="Add" value="Add Blog" className="formbold-btn" />
                        </div>
                        {backPage != 0?<Navigate replace to="/"/> : ""}
                    </form>
                </div>
            </div>


        </div>
    )
}
export default Addblog;