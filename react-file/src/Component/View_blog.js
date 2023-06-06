import React,{useEffect,useState} from 'react';
import {NavLink, useParams} from 'react-router-dom';

const View_blog = () =>
{
    let [data ,setItem] = useState([])
    let [active, setActive] = useState(true)
    let {id}  = useParams();
  
    
    useEffect(()=>{
        if(active) {
            fetch('http://localhost:3001/blog/'+id,{
            }).then(res=>{
                res.json().then(record=>{
                  let dataRecord = [record]
                    setActive(false)

                    setItem(dataRecord);
                    
                })
            }).catch(err=>{console.log(err)})
        }
        
    },[data])

    return(
        <div>
            <div className='blog-btn'>
                <NavLink to='/' ><button className='btn py-2 px-5 my-5' >Back Home</button></NavLink>
            </div>            
                {data.map((v, i) => {
                    return (
                        <div>
                            <div className="hero">
                                <img className='h-100 w-100' src={require("../asset/images/" + v.images)}/>
                                <div className="hero--bottom-gradient">
                                </div>
                            </div>
                            <article className="grid-container article">
                                <div className="grid-x align-center article--container">
                                    
                                    <div className="cell large-9 article--body">
                                        <div className="article--header">
                                            <h1>{v.title}</h1>
                                        </div>
                                        <p>{v.des}</p>
                                        <p>{v.s_des}</p>
                                        <p>{v.t_des}</p>
                                        <p>{v.f_des}</p>
                                        <p>{v.fifth_des}</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    )
                })}
        </div>
    )
}
export default View_blog;


