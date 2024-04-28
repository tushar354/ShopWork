import React, { useState } from 'react';
import blogList from '../utilis/blogdata';
import { useParams } from 'react-router-dom';
import PageHeader from '../Components/PageHeader';
import PopularPost from '../shop/PopularPost'
import Tags from '../shop/Tags'

const socialList = [
    {
        link: "#",
        iconName: "icofont-facebook",
        className: "facebook",
    },
    {
        link: "#",
        iconName: "icofont-twitter",
        className: "twitter",
    },
    {
        link: "#",
        iconName: "icofont-linkedin",
        className: "linkedin",
    },
    {
        link: "#",
        iconName: "icofont-instagram",
        className: "instagram",
    },
    {
        link: "#",
        iconName: "icofont-pinterest",
        className: "pinterest",
    },
];

const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const { id } = useParams();
    const result = blog.filter((b) => b.id === Number(id))[0]; // Changed this line to get the first element of the filtered array
    return (
        <div>
            <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />
            <div className='blog-section blog-single padding-tb section-bg'>
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className='section-wrapper'>
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className='col'>
                                            <div className='post-item style-2'>
                                                <div className='post-inner'>
                                                    <div className='post-thumb'>
                                                        <img src={result.imgUrl} className='w-100' alt="blog-post"></img> {/* Added alt attribute */}
                                                    </div>
                                                    <div className='post-content'>
                                                        <h3>
                                                            {result.title}
                                                        </h3>
                                                        <div className='meta-post'>
                                                            <ul className='lab-ul'>
                                                                {
                                                                    result.metaList.map((val, i) => (
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
                                                        <img src='/src/assets/images/blog/01.jpg' alt="blog-post"></img> {/* Added alt attribute */}
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam temporibus iusto unde facilis tenetur quo quae deleniti repellendus nihil a magni natus, necessitatibus modi reprehenderit esse accusamus dicta eum? Eos odio quia provident vitae quos perspiciatis doloremque aliquid voluptates modi?
                                                        </p>
                                                        <div className='video-thumb'>
                                                            <img src='/src/assets/images/blog/02.jpg' alt="blog-post"></img> {/* Added alt attribute */}
                                                            <a href='https://tushargargggg.netlify.app/' className='video-button popup' target='_blank' > <i className='icofont-ui-play'></i></a>
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
                                                            <ul className='lab-ul social-icons'>
                                                                {
                                                                    socialList.map((val, i) => (
                                                                        <li key={i}>
                                                                            <a href={val.link} className={val.className}> {/* Changed href attribute */}
                                                                                <i className={val.iconName}></i> {/* Changed className to iconName */}
                                                                            </a>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='navigation-part'>
                                                <div className='left'>
                                                    <a href='#' className='prev'>
                                                        <i className='icofont-double-left'></i> Previous Blog
                                                    </a>
                                                    <a href='#' className='title'>
                                                        Lorem ipsum dolor sit amet consectetur
                                                    </a>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <aside>
                                <Tags />
                                <PopularPost />
                            </aside>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleBlog;
