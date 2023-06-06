import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "../asset/css/foundation.min.css"
import "../asset/css/bootstrap.min.css"
import "../asset/css/style.css"


const Blog = () => {

    let [data, setItem] = useState('');
    let [active, setactive] = useState(true);
    let[search, setNewSearch] = useState("");


    useEffect(() => {
        if (active) {
            fetch('http://localhost:3001/blog', {
            })
                .then(res => {
                    res.json().then(record => {
                        setItem(record);
                        // console.log(record);
                        setactive(false)
                    })
                        .catch(err => {
                            console.log(err);
                        })

                }).catch(err => { console.log(err) })
        }
    }, [data])

    const handleSearchChange = (e) => {
        setNewSearch(e.target.value);
    };

    const filterItems = async (cateItem) => {
        await fetch('http://localhost:3001/blog', {
        }).then(res => {
            res.json().then(record => {
                setactive(false);
                if (cateItem) {
                    let updateData = record.filter((v, index) => {
                        if (v.category == cateItem) {
                            return v;
                        }
                    });
                    setItem(updateData)
                }
                else {
                    setItem(record);
                }
            });
        }).catch(err => { console.log(err) })
    }

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 col-12'>
                    <h1 className='mb-5'>Blog</h1>
                </div>
                <div className='col-md-6 col-12'>
                    <NavLink to={"/Addblog"} className='btn me-4 py-2 px-5 add-blog'>Add Blog</NavLink>
                </div>

            </div>
            <div className='search mx-auto w-75 mb-5'>

                <input type="text" value={search} onChange={handleSearchChange} placeholder="Search Category" className='searchData' />
            </div>
            <div className='blog-btn'>

                <button className='btn me-4 py-2 px-5' onClick={() => filterItems('')}>All</button>
                <button className='btn me-4 py-2 px-5' onClick={() => filterItems('Latest News')}>Latest News</button>
                <button className='btn me-4 py-2 px-5' onClick={() => filterItems('sports')}>Sports</button>
                <button className='btn me-4 py-2 px-5' onClick={() => filterItems('technology')}>Technology</button>
                <button className='btn me-4 py-2 px-5' onClick={() => filterItems('politics')}>politics</button>
            </div>


            <section className='pt-5'>
                <div className='container'>
                    <div className='row'>

                        {data ? data.filter((v, id) => {
                            if (search === '') {
                                return v;
                            }
                            else if (v.category.toLowerCase().includes(search.toLowerCase())) {
                                return v;
                            }
                            // return v;
                        }).map((v, i) => {
                            return (
                                <NavLink to={'/blog/' + v.id} className='col-md-4 mb-5'>
                                    <div className='h-100'>
                                        <article className="card h-100">
                                            <div className="card-img">
                                                <img src={require("../asset/images/" + v.images)} alt />
                                            </div>
                                            <div className="card-content">
                                                <span className="card-tag">{v.category}</span>
                                                <h2 className="card-title">{v.title}</h2>
                                                <p className="card-desc">{v.des}</p>
                                                <div className="card-profile">
                                                    <div className="card-profile-content">
                                                        <author className="fst-italic">- {v.author}</author>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </NavLink>
                            )
                        }) : "not found"}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Blog
