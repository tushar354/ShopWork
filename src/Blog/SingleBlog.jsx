import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom'
import PageHeader from '../Components/PageHeader'

const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList)
    const { id } = useParams()
    const result = blog.filter((b) => b.id === Number(id))
    return (
        <div>
            <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />
            <div className='blog-section blog-single padding-tb section-bg'>
                <div className="row justify-content-center">
                    <div className='col-lg-8 col-12'>
                        <article>
                            <div className='section-wraapper'>
                                <div className="row row-cols-1 justify-content-center g-4">
                                    <div className='col'>
                                        <div className='post-item style-2'>
                                            <div className='post-inner'>
                                                {
                                                    result.map((item) => (
                                                        <div key={item.id}>
                                                            <div className='post-thumb'>
                                                                <img src={item.imgUrl} className='w-100'></img>
                                                            </div>

                                                            <div className='post-content'>
                                                                <h3>
                                                                    {item.title}
                                                                </h3>
                                                                <div className='meta-post'>
                                                                    <ul className='lab-ul'>

                                                                        {
                                                                            item.metaList.map((val, i) => (
                                                                                <li key={i}><i className={val.iconName}></i>{val.text} </li>
                                                                            ))
                                                                        }

                                                                    </ul>
                                                                </div>
                                                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in quae, sunt ipsa illo accusamus animi ea temporibus ullam eligendi.</p>
                                                                <blockquote>
                                                                    <p>
                                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, alias.
                                                                    </p>
                                                                    <cite>
                                                                        <a href='#'>...Tushar Garg</a>
                                                                    </cite>
                                                                </blockquote>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quae quidem architecto id numquam, impedit officiis voluptates animi fugit sequi velit hic distinctio labore cupiditate laborum voluptatibus maxime delectus earum quas a repudiandae iure. Officia ratione adipisci autem deserunt sed. Error esse voluptatem nam, beatae possimus perferendis ab dignissimos soluta!
                                                                </p>
                                                                <img src='/src/assets/images/blog/01.jpg'></img>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam temporibus iusto unde facilis tenetur quo quae deleniti repellendus nihil a magni natus, necessitatibus modi reprehenderit esse accusamus dicta eum? Eos odio quia provident vitae quos perspiciatis doloremque aliquid voluptates modi?
                                                                </p>
                                                                <div className='video-thumb'>
                                                                    <img src='/src/assets/images/blog/02.jpg'></img>
                                                                    <a href='https://tushargargggg.netlify.app/' className='video-button popup'> <i className='icofont-ui-play'></i></a>
                                                                </div>
                                                                <p>
                                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis dolore ab voluptate aut reprehenderit, nesciunt dignissimos, voluptatibus deserunt rerum sequi ratione architecto atque iusto non fugiat ipsam est quis alias.
                                                                </p>
                                                                <div className='tags-section'>
                                                                    <ul className='tags lab-ul'>
                                                                        <li>
                                                                            <a href='#'>Agency</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href='#'>Business</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href='#'>Personal</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className='col-lg-4 col-12'> Right Side</div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog
