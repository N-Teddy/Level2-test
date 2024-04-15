import React, { useContext, useEffect, useState } from 'react'
import './assets/styles/responsiveness/media.css'
import './assets/styles/responsiveness/mobile_view.css'
import './assets/styles/base.css'
import './assets/styles/component.css'
import './assets/styles/font.css'
import './assets/styles/module.css'
import { Link } from 'react-router-dom'
import { authContext } from '../../context/AuthProvider'
import axios from 'axios'


export default function Blue() {
    
    const { currentUser } = useContext(authContext)

    const [count, setCount] = useState(1)
    
    // // useEffect

    // // component did mount
    // // it executes only once when the component is first mounted because of the dependency array
    // useEffect(() => {
    //     console.log('Page updated to: ', count)
    // }, [])

    // // component will mount
    // // it always runs every time something happens since the dependency array is abscent

    // useEffect(() => {
    //     console.log('user logged in')
    // })

    // // component did update/ variable update
    // // here the log oly executes when the "cerrentUser" updates ie it depends on the dependency array

    // useEffect(() => {
    //     console.log('user updated')
    // }, [count])

    const [products, setProducts] = useState([])
    // movies api function

    const getProduct = async () => {
        await axios.get('https://fakestoreapi.com/products').then(result => {
            // console.log(result.data);
            setProducts(result.data) 
            // console.log(products)
        }).catch(error => console.log(error));

    }
    useEffect(() => {
        getProduct();
    },[])
    

    return (
        <main>
            <section className="fixed">
                <header>
                    <section className="header_cont cera_pro">
                        <div className="logo">
                            <svg height="100%" width="100%" viewBox="0 0 66 30">
                                <path
                                    d="M64.94 24.31v-3.42c0-.902-.203-1.622-.612-2.162-.41-.54-1.005-.81-1.79-.81-.772 0-1.55.346-2.334 1.035-.235-.667-.695-1-1.378-1h-.992l-.117.116v8.326c.19.034.397.06.622.076.222.016.452.025.688.025.235 0 .464-.01.688-.025.224-.017.43-.042.622-.076v-5.574c.224-.2.442-.344.655-.433.213-.09.403-.135.572-.135.29 0 .487.09.588.267.1.18.15.456.15.835v3.554c0 .546.107.952.32 1.22.213.266.61.4 1.193.4.594 0 1.103-.19 1.53-.568-.27-.367-.405-.918-.405-1.652zm-11.006-.26c-.157.43-.484.644-.98.644-.25 0-.45-.056-.6-.167-.153-.11-.272-.28-.356-.51-.085-.227-.142-.51-.17-.85-.028-.34-.042-.743-.042-1.21 0-.3.017-.58.05-.843.034-.26.096-.492.187-.692.09-.2.212-.36.364-.475.152-.118.352-.176.6-.176.474 0 .79.21.947.627.158.417.238 1.026.238 1.828 0 .79-.08 1.4-.238 1.826zm-.956-6.23c-.627 0-1.18.104-1.662.316-.482.21-.886.51-1.21.9-.325.39-.57.855-.74 1.394-.168.54-.252 1.144-.252 1.81 0 .657.084 1.258.252 1.803.17.545.418 1.01.748 1.394.33.383.733.682 1.21.892.476.21 1.027.316 1.654.316.628 0 1.182-.102 1.664-.308.48-.206.888-.5 1.218-.885.33-.384.583-.848.756-1.393.174-.545.26-1.152.26-1.82 0-1.49-.402-2.636-1.21-3.437-.682-.656-1.58-.984-2.688-.984zm-4.905.132c-.974 0-1.675.5-2.1 1.502-.404-.935-1.12-1.44-2.15-1.52-.16.124-.315.32-.472.594-.155.273-.262.52-.318.742.425.323.64.9.64 1.736v5.39c.38.067.82.1 1.318.1.498 0 .932-.033 1.302-.1v-5.19c.358-.568.817-.85 1.378-.85.38.043.666.1.856.166.202-.334.362-.737.48-1.21.117-.472.176-.882.176-1.226-.45-.09-.818-.134-1.11-.134zm-9.24 6.675c-.304 0-.667-.127-1.093-.383v-3.672c.347-.445.756-.668 1.226-.668.672 0 1.01.734 1.01 2.203 0 1.68-.383 2.52-1.144 2.52zm3.05-5.624c-.25-.378-.555-.67-.912-.876-.356-.206-.77-.308-1.238-.308-.916 0-1.692.316-2.33.95-.312-.545-.79-.818-1.427-.818h-.69l-.116.117v11.814l.116.117h1.008c.538 0 .913-.116 1.127-.35.213-.233.32-.64.32-1.218v-2.22c.513.234 1.026.35 1.54.35.48 0 .925-.102 1.33-.308.41-.205.764-.497 1.065-.875.3-.38.538-.842.71-1.387.174-.545.26-1.15.26-1.82 0-.667-.063-1.267-.19-1.8-.13-.535-.32-.99-.57-1.37zM30.324 21.9c-.14-.007-.24-.01-.295-.01H28.8l-.67.017.386-1.285c.448-1.646.717-2.71.806-3.187h.1c.348 1.357.656 2.503.925 3.437l.285 1.035c-.066 0-.17-.003-.31-.008zm-.833-7.002c-.582 0-1.092.033-1.53.1l-3.695 11.198.083.133c.337.122.773.183 1.31.183.482 0 .858-.034 1.127-.1l.722-2.42c.146.01.37.017.672.017h2.386c.29 0 .51-.006.654-.017l.32 1.102c.168.567.37.95.605 1.15.235.2.644.302 1.226.302.494 0 .937-.106 1.33-.318l-3.63-11.215c-.393-.078-.92-.117-1.58-.117zm20.32-8.6c.172-.25.436-.374.79-.374.368 0 .643.133.827.4.183.266.275.606.275 1.018v.184h-2.2c.033-.568.135-.977.307-1.227zm-2.15 5.332c.298.4.684.713 1.16.935.476.222 1.068.334 1.773.334 1.3 0 2.397-.318 3.293-.952-.09-.645-.318-1.157-.686-1.536-.457.172-.862.296-1.213.372-.352.075-.662.112-.93.112-.535 0-.92-.137-1.155-.413-.234-.275-.362-.66-.384-1.155h4.37c.144-.468.217-1.04.217-1.72 0-.51-.082-.984-.244-1.418-.162-.434-.394-.807-.696-1.118-.303-.31-.67-.556-1.1-.734-.432-.178-.916-.267-1.454-.267-.64 0-1.196.112-1.672.335-.476.222-.868.528-1.176.917-.308.39-.537.85-.69 1.377-.15.528-.226 1.103-.226 1.726 0 .645.062 1.24.185 1.786.124.545.334 1.018.63 1.418zM38.75 9.828c0 .9.204 1.622.613 2.16.41.54 1.007.81 1.79.81.784 0 1.62-.394 2.504-1.184.403.745 1.064 1.134 1.983 1.168.168-.122.33-.314.487-.576.156-.26.263-.503.32-.725-.315-.21-.47-.617-.47-1.218v-5.94c-.394-.068-.836-.1-1.328-.1-.494 0-.925.032-1.294.1v5.573c-.38.378-.757.567-1.126.567-.38 0-.617-.088-.706-.266-.09-.18-.134-.462-.134-.852V5.806c0-.545-.107-.95-.32-1.218-.213-.267-.615-.4-1.21-.4-.593 0-1.097.183-1.51.55.267.39.402.946.402 1.67v3.42zm-.42 2.736c.034-.112.05-.354.05-.724s-.067-.74-.2-1.11h-.455c-.493 0-.74-.262-.74-.784V1.932c0-.577-.106-.983-.318-1.216-.214-.234-.583-.35-1.11-.35H34.53l-.1.116v9.93c0 .8.16 1.388.48 1.76.318.373.858.56 1.62.56.527 0 1.126-.056 1.798-.168zM28.062 7.626h1.386c.59 0 1.023.16 1.296.483.273.322.41.7.41 1.134 0 .456-.107.812-.32 1.068-.21.256-.47.417-.783.484-.31.067-.648.095-1.01.084-.363-.012-.69-.012-.978 0V7.626zm0-4.59c.144.01.314.017.51.017h.675c.523 0 .896.125 1.12.375.22.25.333.565.333.943 0 .38-.11.7-.326.96-.216.262-.592.393-1.127.393h-1.185V3.036zm-.067 9.696c.683.01 1.232.016 1.646.016 1.345 0 2.384-.275 3.118-.825.734-.55 1.1-1.4 1.1-2.545 0-.323-.053-.637-.16-.943-.105-.306-.247-.59-.426-.852-.18-.26-.394-.49-.646-.684-.25-.196-.517-.337-.796-.426.436-.19.793-.495 1.072-.918.28-.423.42-.878.42-1.368 0-1.013-.35-1.772-1.05-2.278-.7-.506-1.662-.76-2.883-.76-.393 0-.91.006-1.555.017-.644.01-1.42.028-2.327.05l-.118.117v11.23l.118.118c.975.022 1.803.04 2.487.05zM13 0l-.296 4.924H7.812L7.518 0c-.76.113-1.502.27-2.227.475C4.987 3.627 6.004 11.42 0 15.14v10.293s3.644 3.892 10.26 3.892c6.613 0 10.258-4.143 10.258-4.143v-10.04c-6.005-3.723-4.99-11.516-5.29-14.67C14.5.27 13.757.113 12.997 0z"
                                    fill="#0F346C" fill-rule="evenodd"></path>
                            </svg>
                        </div>
                        <nav className="header_nav">
                            <ul>
                                <li><a href="#">PLANS</a></li>
                                <li><a href="#">ON THE MENU</a></li>
                                <li><a href="#">MARKET</a></li>
                                <li><a href="#">GIFT CARDS</a></li>
                                <li><a href="#">BLOG</a></li>
                            </ul>
                            <ul>
                                <li><a href="#"><Link to='/' >LOG IN</Link></a></li>
                                <span className="span button s_u">
                                    SIGN UP
                                </span>
                            </ul>
                        </nav>
                        <div className="burger_cont">
                            <input type="radio" name="burger" id="burger" />
                                <label for="burger">
                                    <svg height="16" width="24" viewBox="560 36 48 32">
                                        <path
                                            d="M560 38a2 2 0 0 1 2.001-2H606a2 2 0 1 1 0 4h-44a1.996 1.996 0 0 1-2-2zm0 14a2 2 0 0 1 2.001-2H606a2 2 0 1 1 0 4h-44a1.996 1.996 0 0 1-2-2zm0 14a2 2 0 0 1 2.001-2H606a2 2 0 1 1 0 4h-44a1.996 1.996 0 0 1-2-2z"
                                            fill="#737373" fill-rule="evenodd">
                                        </path>
                                    </svg>
                                </label>
                        </div>
                        <section className="mobile_menu">
                            <ul>
                                <li className="menu">MENU
                                    <input type="radio" name="burger" id="close_mobile" />
                                        <label for="close_mobile">
                                            <svg className="" height="19" width="19" viewBox="0 0 19 19">
                                                <path
                                                    d="M27.4462425,11.3320323 C28.0673703,10.8490762 28.9654861,10.8929813 29.5362524,11.4637476 C30.1545825,12.0820777 30.1545825,13.0845889 29.5362524,13.7029191 L29.5362524,13.7029191 L22.739,20.5 L29.5362524,27.2970809 C30.1545825,27.9154111 30.1545825,28.9179223 29.5362524,29.5362524 C28.9654861,30.1070187 28.0673703,30.1509238 27.4462425,29.6679677 L27.2970809,29.5362524 L20.5,22.739 L13.7029191,29.5362524 L13.5537575,29.6679677 C12.9326297,30.1509238 12.0345139,30.1070187 11.4637476,29.5362524 C10.8454175,28.9179223 10.8454175,27.9154111 11.4637476,27.2970809 L11.4637476,27.2970809 L18.261,20.5 L11.4637476,13.7029191 C10.8454175,13.0845889 10.8454175,12.0820777 11.4637476,11.4637476 C12.0345139,10.8929813 12.9326297,10.8490762 13.5537575,11.3320323 L13.7029191,11.4637476 L20.5,18.261 L27.2970809,11.4637476 Z"
                                                    transform="translate(-11 -11)" fill="#737373"></path>
                                            </svg>
                                        </label>
                                </li>
                                <li>HOME</li>
                                <li>PLANS</li>
                                <li>ON THE MENU</li>
                                <li>MARKET</li>
                                <li>GIFT CARDS</li>
                                <li>BLOG</li>
                            </ul>
                            <div>
                                <span className="button mobile_btn_1">SIGN UP</span>
                                <span className="button mobile_btn_2">LOG IN</span>
                            </div>
                        </section>
                    </section>
                </header>
                <div className="ads cera_pro">
                    <p>Welconme to Blue Epron {currentUser.userName}. How can we help you</p>
                    {/* <span>{ count }</span> */}
                    <span className="span r_o">
                        {count}
                    </span>
                    <span className="span r_o" onClick={() => setCount(count + 1)}>
                        Update count
                    </span>
                </div>
            </section>
            <section className="hero">
                <section className="hero_main">
                    <div className="hero_sub">
                        <div className="chronicle">
                            <h2 className="hero_hd">
                                <p>Easy meal kits.</p>
                                <p>Quality ingredients.</p>
                                <p>Delivered to your door.</p>
                            </h2>
                        </div>
                        <span className="span med_btn b_1 cera_pro">
                            GET 65% OFF
                        </span>
                    </div>
                </section>
                <section className="hero_mid">
                    <section className="hero_mid_cont">
                        <div className="hero_mid_left">
                            <h6>
                                <p>Prepared & Ready New!</p>
                            </h6>
                            <p className="six">Keep things easy with pre-made meals delivered fresh and ready to eat.</p>
                            <span className="cera_pro span s_s">
                                SEE PLANS
                            </span>
                        </div>
                        <div className="hero_mid_right">
                        </div>
                    </section>
                </section>
                <div className="hero_btm">
                    <div className="hero_btm_main cera_pro">
                        <h4>
                            <p>Our customers think we're EXCELLENT</p>
                        </h4>
                        <div className="rating_cont">
                            <img src="./assets/images/others/rating.svg" alt="" /><span className="cera_pro rating" >4.7</span>
                        </div>
                        <p className="six">Based on 38.8K App Store Ratings</p>
                        <span className="span cera_pro o_c">
                            SEE PLANS
                        </span>
                    </div>
                </div>
            </section>
            <section className="offers">
                <div className="offers_head">
                    <div className="aft_hr_main">
                        <h3 className="cera_pro">
                            <p>CHOOSE FROM</p>
                        </h3>
                        <h1 className="chronicle">
                            <p>80+ weekly options</p>
                        </h1>
                    </div>
                </div>
                <section className="offers_main className cera_pro">
                    {products.map(product => (
                        <section className="cat">
                            <div className="cat_img">
                                <img src={product.image} height="100%" width="100%" alt="" />
                            </div>
                            <p className="three">{product.title.slice(0, 10)}</p>
                            <p className="five">${product.price}</p>
                            <Link to={`/products/${product.id}`} className='button span r_o de_btn'>Details</Link>
                        </section>
                    ))}
                    {/* <section className="cat">
                        <div className="cat_img">
                            <img src="https://media.blueapron.com/assets/registration/homepage/craft.webp?width=300&amp;height=300&amp;quality=90" height="100%" width="100%" alt="" />
                        </div>
                        <p className="three">CRAFT</p>
                        <p className="five">Cheese Crisp Burgers</p>
                    </section> */}
                    {/* <section className="cat">
                        <div className="cat_img">
                            <img src="./assets/images/weekly_options/wellness.webp" height="100%" width="100%" v alt="" />
                        </div>
                        <p className="three">WELLNESS</p>
                        <p className="five">Turkey & Mushroom Lettuce Cups</p>
                    </section>
                    <section className="cat">
                        <div className="cat_img">
                            <img src="./assets/images/weekly_options/family-friendly.webp" height="100%" width="100%" alt="" />
                        </div>
                        <p className="three">FAMILY FRIENDLY</p>
                        <p className="five">Mafalda Pasta</p>
                    </section>
                    <section className="cat">
                        <div className="cat_img">
                            <img src="./assets/images/weekly_options/fast-and-easy.webp" height="100%" width="100%" alt="" />
                        </div>
                        <p className="three">FAST & EASY</p>
                        <p className="five">Sheet Pan Cheesy Jalapeño Chicken</p>
                    </section>
                    <section className="cat">
                        <div className="cat_img">
                            <img src="./assets/images/weekly_options/vegetarian.webp" height="100%" width="100%" alt="" />
                        </div>
                        <p className="three">VEGETARIAN</p>
                        <p className="five">Quinoa & Vegetable “Fried Rice”</p>
                    </section>
                    <section className="cat">
                        <div className="cat_img">
                            <img src="./assets/images/weekly_options/premium-steak.webp" height="100%" width="100%" alt="" />
                        </div>
                        <p className="three">PREMIUM</p>
                        <p className="five">NY Strip Steaks & Herb-Mushroom Pan Sauce</p>
                    </section>
                    <section className="cat">
                        <div className="cat_img">
                            <img src="./assets/images/weekly_options/ready-to-cook.webp" height="100%" width="100%" vvvalt="" />
                        </div>
                        <p className="three">READY TO COOK</p>
                        <p className="five">Pesto Chicken and Orzo</p>
                    </section>
                    <section className="cat">
                        <a href="#">
                            <div className="cat_img">
                                <img src="./assets/images/weekly_options/heat-and-eat.webp" height="100%" width="100%" vegeta
                                    alt="" />
                            </div>
                            <p className="three">HEAT & EAT</p>
                            <p className="five">Cheesy Truffle Cavatappi</p>
                        </a>
                    </section>
                    <section className="cat">
                        <div className="cat_img">
                            <img src="./assets/images/weekly_options/breakfast.webp" height="100%" width="100%" alt="" />
                        </div>
                        <p className="three">BREAKFAST</p>
                        <p className="five">Fried Egg & Prosciutto Sandwiches</p>
                    </section>
                    <section className="cat">
                        <div className="cat_img">
                            <img src="./assets/images/weekly_options/desserts.webp" height="100%" width="100%" alt="" />
                        </div>
                        <p className="three">DESSERTS</p>
                        <p className="five">Flourless Chocolate Cake</p>
                    </section> */}
                </section>
                <div className="offers_btm">
                    <span className="span b_o cera_pro">
                        BROWSE OUR MENUS
                    </span>
                </div>
            </section>
            <section className="qlt">
                <section className="qlt_cont">
                    <section className="qlt_head">
                        <div>
                            <h2 className="chronicle">
                                <p>530+ million meals shipped</p>
                            </h2>
                            <h6 className="cera_pro">
                                <p>See why home cooks stick with the</p>
                                <p>original American meal kit.</p>
                            </h6>
                        </div>
                    </section>
                    <section className="qlt_main cera_pro">
                        <section className="qlt_main_sub">
                            <div className="qlt_img">
                                <img src="https://media.blueapron.com/assets/registration/homepage/chef-experience.webp?height=374&quality=90" height="100%" width="100%" alt="" />
                            </div>
                            <p className="five">5 decades of top restaurant experience</p>
                            <p className="five">Our chefs bring high standards to crafting your meals.</p>
                        </section>
                        <section className="qlt_main_sub">
                            <div className="qlt_img">
                                <img src="https://media.blueapron.com/pricing/howitworks/unpack_your_box.jpg?height=374&quality=90" height="100%" width="100%" alt="" />
                            </div>
                            <p className="five">Fresher ingredients faster</p>
                            <p className="five">80% of ingredients come directly from producers.</p>
                        </section>
                        <section className="qlt_main_sub">
                            <div className="qlt_img">
                                <img src="https://media.blueapron.com/pricing/howitworks/choose_your_meals.jpg?height=374&quality=90" height="100%" width="100%" alt="" /> 
                            </div>
                            <p className="five">You're busy, so we're flexible</p>
                            <p className="five">Get boxes on your schedule. Skip, pause, or cancel anytime.</p>
                        </section>
                    </section>
                    <section className="qlt_btm">
                        <div className="cera_pro">
                            <p className="six">Get started for as little as $7.99 per serving</p>
                            <span className="span cera_pro med_btn b_2">
                                SEE PLANS
                            </span>
                        </div>
                    </section>
                </section>
            </section>
            <section className="act">
                <section className="act_cont">
                    <div className="act_main" id="testimonial_1">
                        <img src="https://media.blueapron.com/assets/registration/homepage/texture-pattern.webp?height=20&quality=90" width="100%" height="20px" alt="" />
                            <div>
                                <h6 className="cera_pro">
                                    <p>Celebrating 10 years of happy customers</p>
                                </h6>
                                <h5 className="chronicle">
                                    <p>We changed from HelloFresh to Blue Apron and it was the best choice we made!</p>
                                </h5>
                                <p className="six">— LESLIE</p>
                            </div>
                    </div>
                </section>
            </section>
            <section className="start">
                <div className="start_cont">
                    <div className="start_main">
                        <h4 className="chronicle">
                            <p>Get started now</p>
                        </h4>
                        <p className="eight cera_pro">for as little as <span className="blue cera_pro">$7.99 per serving</span></p>
                        <span className="span s_b cera_pro">
                            SEE PLANS
                        </span>
                    </div>
                </div>
            </section>
            <article>
                <section className="art cera_pro">
                    <div className="art_left">
                        <p className="four">FOLLOW US</p>
                        <ul className="our_contacts">
                            <li>
                                <span>
                                    <svg height="26" width="26" viewBox="0 0 26 26"><g clip-path="url(#clip0_1_826)"><path d="M7.61591 0.0909189C6.23271 0.156179 5.28813 0.376919 4.46237 0.701399C3.60775 1.03446 2.88339 1.4814 2.16267 2.20472C1.44195 2.92804 0.998131 3.65292 0.667411 4.50884C0.347351 5.33642 0.130511 6.28178 0.0694106 7.66576C0.00831057 9.04974 -0.00520944 9.4946 0.00155056 13.0249C0.00831056 16.5552 0.0239106 16.9977 0.0909906 18.3845C0.157031 19.7675 0.376991 20.7118 0.70147 21.5378C1.03505 22.3924 1.48147 23.1165 2.20505 23.8375C2.92863 24.5585 3.65299 25.0013 4.51099 25.3325C5.33779 25.652 6.28341 25.8699 7.66713 25.9305C9.05085 25.9911 9.49623 26.0051 13.0255 25.9984C16.5547 25.9916 16.9991 25.976 18.3856 25.9102C19.7722 25.8444 20.7116 25.6229 21.5379 25.3C22.3925 24.9656 23.1171 24.52 23.8376 23.7962C24.558 23.0723 25.0016 22.3469 25.332 21.4905C25.6524 20.6637 25.87 19.7181 25.93 18.3354C25.9906 16.9478 26.0049 16.5047 25.9982 12.975C25.9914 9.4452 25.9755 9.00268 25.9098 7.61636C25.844 6.23004 25.6238 5.28858 25.2995 4.46204C24.9654 3.60742 24.5195 2.88384 23.7962 2.16234C23.0729 1.44084 22.347 0.997539 21.4908 0.667859C20.6635 0.347799 19.7184 0.129659 18.3347 0.0698589C16.9509 0.0100589 16.5056 -0.0052811 12.975 0.0014789C9.44449 0.00823889 9.00249 0.0233189 7.61591 0.0909189ZM7.76775 23.5918C6.50025 23.5367 5.81203 23.3261 5.35339 23.1498C4.74603 22.9158 4.31339 22.6329 3.85631 22.1803C3.39923 21.7276 3.11843 21.2934 2.88131 20.6873C2.70321 20.2287 2.48871 19.5413 2.42943 18.2738C2.36495 16.9038 2.35143 16.4925 2.34389 13.0218C2.33635 9.55102 2.34961 9.14022 2.40967 7.76976C2.46375 6.5033 2.67565 5.8143 2.85167 5.35592C3.08567 4.74778 3.36751 4.31592 3.82121 3.8591C4.27491 3.40228 4.70781 3.12096 5.31439 2.88384C5.77251 2.70496 6.45995 2.49228 7.72693 2.43196C9.09791 2.36696 9.50871 2.35396 12.9789 2.34642C16.4492 2.33888 16.861 2.35188 18.2325 2.4122C19.4989 2.46732 20.1882 2.67714 20.6461 2.8542C21.2537 3.0882 21.6861 3.36926 22.1429 3.82374C22.5997 4.27822 22.8813 4.70956 23.1184 5.31744C23.2975 5.77426 23.5102 6.46144 23.57 7.7292C23.6353 9.10018 23.6501 9.51124 23.6563 12.9812C23.6626 16.4512 23.6504 16.8633 23.5903 18.2332C23.5349 19.5007 23.3248 20.1892 23.1483 20.6483C22.9143 21.2554 22.6322 21.6883 22.1782 22.1449C21.7243 22.6015 21.2919 22.8828 20.6851 23.1199C20.2275 23.2985 19.5392 23.5117 18.2733 23.572C16.9023 23.6365 16.4915 23.65 13.02 23.6576C9.54849 23.6651 9.13899 23.6511 7.76801 23.5918M18.3656 6.05194C18.3661 6.3605 18.4581 6.66198 18.63 6.91824C18.8019 7.17451 19.0459 7.37405 19.3311 7.49163C19.6164 7.60921 19.9302 7.63955 20.2327 7.57881C20.5352 7.51807 20.8129 7.36898 21.0307 7.1504C21.2485 6.93181 21.3966 6.65355 21.4562 6.35081C21.5158 6.04806 21.4843 5.73444 21.3657 5.44959C21.2471 5.16474 21.0466 4.92147 20.7898 4.75055C20.5329 4.57962 20.231 4.48872 19.9225 4.48934C19.5088 4.49017 19.1125 4.65524 18.8205 4.94827C18.5285 5.2413 18.3649 5.63829 18.3656 6.05194ZM6.32501 13.0129C6.33229 16.6997 9.32645 19.6817 13.0125 19.6746C16.6985 19.6676 19.6825 16.6737 19.6755 12.9869C19.6685 9.30012 16.6735 6.3174 12.987 6.32468C9.30045 6.33196 6.31799 9.32664 6.32501 13.0129ZM8.66657 13.0082C8.66488 12.1512 8.91737 11.3128 9.39212 10.5993C9.86687 9.88571 10.5426 9.32895 11.3337 8.9994C12.1249 8.66985 12.996 8.58231 13.837 8.74785C14.6779 8.91339 15.4509 9.32458 16.0581 9.92942C16.6653 10.5343 17.0796 11.3056 17.2485 12.1458C17.4173 12.9861 17.3332 13.8576 17.0068 14.6501C16.6804 15.4425 16.1263 16.1204 15.4146 16.598C14.703 17.0756 13.8656 17.3314 13.0086 17.3331C12.4395 17.3343 11.8757 17.2234 11.3495 17.0066C10.8233 16.7899 10.3449 16.4717 9.94171 16.0701C9.53851 15.6685 9.21837 15.1914 8.99957 14.666C8.78078 14.1406 8.66763 13.5773 8.66657 13.0082Z" fill="#B1B5BD"></path></g><defs><clipPath id="clip0_1_826"><rect width="26" height="26" fill="white"></rect></clipPath></defs></svg>
                                </span>
                            </li>
                            <li>
                                <span className="tiktpk">
                                    <svg height="26" width="24" viewBox="0 0 24 26"><path d="M9.49634 25.9374C9.04159 25.9374 8.58684 25.9374 8.13209 25.9374C8.0664 25.9222 8.00577 25.897 7.94008 25.8919C4.56481 25.5332 1.69482 22.9714 0.957117 19.6467C0.856061 19.192 0.820691 18.7221 0.755005 18.2572C0.755005 17.8884 0.755005 17.5145 0.755005 17.1456C0.770163 17.0799 0.790374 17.0142 0.80048 16.9485C0.901536 15.9633 1.1946 15.0386 1.63419 14.1594C3.14498 11.1379 6.54045 9.34921 9.89046 9.7989C10.1178 9.82922 10.2037 9.8949 10.1987 10.1374C10.1734 11.0823 10.1734 12.0221 10.1684 12.967C10.1633 13.5127 10.1684 14.0584 10.1684 14.6344C10.0117 14.599 9.89551 14.5687 9.78435 14.5434C7.21248 13.9523 4.87303 16.0593 5.29747 18.7322C5.52484 20.152 6.68193 21.395 8.10177 21.688C9.56708 21.9912 10.9819 21.4758 11.8712 20.253C12.1996 19.8033 12.4775 19.3233 12.4876 18.7322C12.4977 17.8227 12.5432 16.9132 12.5432 16.0037C12.5533 11.3147 12.5533 6.62578 12.5583 1.93177C12.5583 1.31028 12.5735 0.688797 12.5836 0.0622559C13.9832 0.0622559 15.3778 0.0622559 16.7774 0.0622559C16.7875 0.163311 16.7976 0.264366 16.8077 0.365421C16.9442 1.77008 17.3736 3.06864 18.3034 4.15498C19.5969 5.67586 21.335 6.26703 23.245 6.47925C23.245 7.92939 23.245 9.37447 23.245 10.8246C20.9712 10.764 18.8895 10.1021 16.9745 8.77825C16.9745 8.92983 16.9745 9.01067 16.9745 9.09657C16.9694 11.6027 16.9745 14.1089 16.9593 16.6201C16.9543 17.3679 16.9543 18.1208 16.8734 18.8635C16.5046 22.1125 14.0338 24.9016 10.8606 25.6847C10.4058 25.7959 9.95109 25.8565 9.49634 25.9374Z" fill="#B1B5BD"></path></svg>
                                </span>
                            </li>
                            <li>
                                <span className="facebook">
                                    <svg height="28" width="30" viewBox="0 0 30 28"><path d="M29.0856 14.0856C29.0856 6.30631 22.7792 0 15 0C7.22076 0 0.914444 6.30631 0.914444 14.0856C0.914444 21.1161 6.06532 26.9433 12.7991 28V18.1572H9.22273V14.0856H12.7991V10.9823C12.7991 7.45213 14.902 5.50218 18.1195 5.50218C19.6605 5.50218 21.2725 5.77728 21.2725 5.77728V9.24365H19.4963C17.7466 9.24365 17.2009 10.3294 17.2009 11.4433V14.0856H21.1074L20.4829 18.1572H17.2009V28C23.9347 26.9433 29.0856 21.1161 29.0856 14.0856Z" fill="#B1B5BD"></path></svg>
                                </span>
                            </li>
                            <li>
                                <span className="pinterest">
                                    <svg height="28" width="28" viewBox="0 0 28 28"><path d="M14 0C6.2685 0 0 6.2685 0 14C0 19.9313 3.69017 24.997 8.89817 27.0363C8.77567 25.9292 8.66483 24.2293 8.94717 23.0207C9.2015 21.9287 10.5887 16.0615 10.5887 16.0615C10.5887 16.0615 10.1698 15.2227 10.1698 13.9837C10.1698 12.0365 11.298 10.584 12.7027 10.584C13.8973 10.584 14.4737 11.4812 14.4737 12.5557C14.4737 13.7573 13.7095 15.5528 13.314 17.2165C12.9838 18.6107 14.0128 19.747 15.3872 19.747C17.8757 19.747 19.7878 17.1232 19.7878 13.3362C19.7878 9.98433 17.3798 7.6405 13.9405 7.6405C9.9575 7.6405 7.6195 10.6283 7.6195 13.7165C7.6195 14.9193 8.08267 16.2097 8.66133 16.912C8.71076 16.9648 8.74566 17.0296 8.76263 17.0999C8.7796 17.1702 8.77806 17.2438 8.75817 17.3133C8.652 17.7555 8.41633 18.7063 8.36967 18.9012C8.309 19.1578 8.16667 19.2115 7.90183 19.0878C6.153 18.2735 5.05983 15.7173 5.05983 13.664C5.05983 9.24817 8.26817 5.19167 14.3103 5.19167C19.1672 5.19167 22.9413 8.652 22.9413 13.2778C22.9413 18.1032 19.8987 21.9858 15.6765 21.9858C14.2578 21.9858 12.9243 21.2485 12.4682 20.3782C12.4682 20.3782 11.7658 23.051 11.5955 23.7067C11.2793 24.9223 10.4265 26.4472 9.85483 27.377C11.165 27.7807 12.5568 28 14 28C21.7315 28 28 21.7315 28 14C28 6.2685 21.7315 0 14 0Z" fill="#B1B5BD"></path></svg>
                                </span>
                            </li>
                            <li>
                                <span className="youtube">
                                    <svg height="22" width="30" viewBox="0 0 30 22"><path d="M14.7832 0.510498C18.4514 0.583862 21.9129 0.557185 25.361 0.924004C26.2547 1.01738 27.1484 1.13743 27.9154 1.70433C28.6891 2.2779 29.2493 3.00487 29.396 3.9586C29.6094 5.35251 29.8095 6.75309 29.8962 8.15367C30.0896 11.1082 30.0229 14.0695 29.6094 17.004C29.4894 17.851 29.3427 18.698 28.8024 19.4117C28.2022 20.212 27.4485 20.7922 26.4414 20.899C24.6407 21.0924 22.8399 21.2858 21.0325 21.3591C16.0971 21.5592 11.1617 21.5392 6.22633 21.2258C5.33262 21.1657 4.43225 21.0657 3.54521 20.899C1.97122 20.5988 0.930783 19.6251 0.623988 18.0644C0.350541 16.6772 0.197144 15.2499 0.103771 13.836C-0.0896427 10.8881 -0.022949 7.94691 0.390557 5.01903C0.530616 4.01195 0.73737 3.0182 1.47768 2.24455C2.03124 1.66431 2.67818 1.26414 3.47185 1.11075C5.32595 0.757267 7.20674 0.697244 9.08086 0.637219C11.0617 0.577194 13.0292 0.550515 14.7832 0.510498ZM12.0154 6.49965C12.0154 9.54091 12.0154 12.4955 12.0154 15.5301C14.6365 14.0161 17.2043 12.5355 19.832 11.0149C17.1976 9.48756 14.6365 8.01361 12.0154 6.49965Z" fill="#B1B5BD"></path></svg>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="art_div"></div>
                    {/* <div>
                        <p>DISCOVER WHAT'S COOKIN'</p>
                        <p>search bar</p>
                        <p>Sign up for offers, recipes, news & more</p>
                    </div> */}
                    <div className="art_right">
                        <p className="four"><a href="#">FROM THE BLOG</a></p>
                        <div className="blog">
                            <div className="blog_img">
                                <img src="./assets/images/others/blog.webp" height="100%" width="100%" alt="" />
                            </div>
                            <p className="four">The Perfect Gifts For <br /> Food Lovers</p>
                        </div>
                    </div>
                </section>
            </article>
            <footer>
                <section className="footer_cont cera_pro">
                    <nav className="footer_nav footer_main">
                        <ul className="left_ul">
                            <li>On The Menu</li>
                            <li>Pricing</li>
                            <li>Our Vision</li>
                            <li>Market</li>
                            <li>Gift Cards</li>
                            <li>Blog</li>
                            <li>Cookbook</li>
                            <li>Suppliers</li>
                            <li>'Affiliates</li>
                            <li>Supply Chains Act</li>
                            <li>Food Safety</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Our Team</li>
                        <li>Military & Veterans</li>
                        <li>Students</li>
                        <li>Graduates</li>
                        <li>Teachers</li>
                        <li>Seniors (+55)</li>
                        <li>Medical Staff</li>
                        <li>First Responders</li>
                    </ul>
                    <ul className="mid_ul">
                        <li>Customer Support:</li>
                        <li>Help Center & FAQ</li>
                        <li>contact@blueapron.com</li>
                        <li>(646) 891-4349</li>
                    </ul>
                    <ul className="right_ul">
                        <li>© Blue Apron, LLC 2023</li>
                        <li>Do Not Sell or Share My Info</li>
                        <li>Notice to California Residents</li>
                        <li>Ad Preferences</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                        <span className="download">
                            <svg xmlns="http://www.w3.org/2000/svg" width="125" height="40" viewBox="8 0 125 45">
                                <path fill="#a6a6a6"
                                    d="M110.135 0H9.535c-.367 0-.73 0-1.095.002-.306.002-.61.008-.919.013A13.215 13.215 0 005.517.19a6.665 6.665 0 00-1.9.627 6.438 6.438 0 00-1.62 1.18A6.258 6.258 0 00.82 3.617 6.601 6.601 0 00.195 5.52a12.993 12.993 0 00-.179 2.002c-.01.307-.01.615-.015.921V31.56c.005.31.006.61.015.921a12.992 12.992 0 00.18 2.002 6.588 6.588 0 00.624 1.905A6.208 6.208 0 001.998 38a6.274 6.274 0 001.618 1.179 6.7 6.7 0 001.901.63 13.455 13.455 0 002.004.177c.31.007.613.011.919.011.366.002.728.002 1.095.002h100.6c.36 0 .724 0 1.084-.002.304 0 .617-.004.922-.01a13.279 13.279 0 002-.178 6.804 6.804 0 001.908-.63A6.277 6.277 0 00117.666 38a6.395 6.395 0 001.182-1.614 6.604 6.604 0 00.619-1.905 13.506 13.506 0 00.185-2.002c.004-.31.004-.61.004-.921.008-.364.008-.725.008-1.094V9.536c0-.366 0-.73-.008-1.092 0-.306 0-.614-.004-.92a13.507 13.507 0 00-.185-2.003 6.618 6.618 0 00-.62-1.903 6.466 6.466 0 00-2.798-2.8 6.768 6.768 0 00-1.908-.627 13.044 13.044 0 00-2-.176c-.305-.005-.618-.011-.922-.013-.36-.002-.725-.002-1.084-.002z">
                                </path>
                                <path
                                    d="M8.445 39.125c-.305 0-.602-.004-.904-.01a12.687 12.687 0 01-1.87-.164 5.884 5.884 0 01-1.656-.548 5.406 5.406 0 01-1.397-1.016 5.32 5.32 0 01-1.02-1.397 5.722 5.722 0 01-.544-1.657 12.414 12.414 0 01-.166-1.875c-.007-.21-.015-.913-.015-.913v-23.1s.009-.692.015-.895a12.37 12.37 0 01.165-1.872 5.755 5.755 0 01.544-1.662 5.373 5.373 0 011.015-1.398 5.565 5.565 0 011.402-1.023 5.823 5.823 0 011.653-.544A12.586 12.586 0 017.543.887l.902-.012h102.769l.913.013a12.385 12.385 0 011.858.162 5.938 5.938 0 011.671.548 5.594 5.594 0 012.415 2.42 5.763 5.763 0 01.535 1.649 12.995 12.995 0 01.174 1.887c.003.283.003.588.003.89.008.375.008.732.008 1.092v20.929c0 .363 0 .718-.008 1.075 0 .325 0 .623-.004.93a12.731 12.731 0 01-.17 1.853 5.739 5.739 0 01-.54 1.67 5.48 5.48 0 01-1.016 1.386 5.413 5.413 0 01-1.4 1.022 5.862 5.862 0 01-1.668.55 12.542 12.542 0 01-1.869.163c-.293.007-.6.011-.897.011l-1.084.002z">
                                </path>
                                <g fill="#fff" data-name="<Group>">
                                    <g data-name="<Group>">
                                        <path
                                            d="M24.769 20.3a4.949 4.949 0 012.356-4.151 5.066 5.066 0 00-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 00-4.473 2.728c-1.934 3.348-.491 8.269 1.361 10.976.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.67a10.962 10.962 0 001.52-3.092 4.782 4.782 0 01-2.92-4.4zm-2.732-8.09a4.872 4.872 0 001.115-3.49 4.957 4.957 0 00-3.208 1.66 4.636 4.636 0 00-1.144 3.36 4.1 4.1 0 003.237-1.53z"
                                            data-name="<Path>"></path>
                                    </g>
                                    <path
                                        d="M42.302 27.14H37.57l-1.137 3.356h-2.005l4.484-12.418h2.083l4.483 12.418h-2.039zm-4.243-1.55h3.752l-1.85-5.446h-.051zm17.101.38c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 01-2.848-1.583h-.043v4.484h-1.86V21.442h1.8v1.506h.033a3.212 3.212 0 012.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.393-1.197 2.393-3.046zm11.875 0c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 01-2.848-1.583h-.043v4.484h-1.859V21.442h1.799v1.506h.034a3.212 3.212 0 012.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046zm8.495 1.066c.138 1.232 1.334 2.04 2.97 2.04 1.566 0 2.693-.808 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987s-2.521.757-2.521 1.858c0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667zM83.346 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137a5.808 5.808 0 00.611-.043v1.463a5.104 5.104 0 01-1.032.086c-1.833 0-2.548-.689-2.548-2.445v-5.189h-1.316v-1.472h1.316V19.3zm2.719 6.67c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638zm6.695 0c0-1.954-.895-3.108-2.401-3.108s-2.4 1.162-2.4 3.108c0 1.962.894 3.106 2.4 3.106s2.401-1.144 2.401-3.106zm3.426-4.528h1.773v1.541h.043a2.16 2.16 0 012.177-1.635 2.866 2.866 0 01.637.069v1.738a2.598 2.598 0 00-.835-.112 1.873 1.873 0 00-1.937 2.083v5.37h-1.858zm13.198 6.395c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.19-4.682 2.506 0 4.08 1.72 4.08 4.466v.637h-6.394v.112a2.358 2.358 0 002.436 2.564 2.048 2.048 0 002.09-1.273zm-6.282-2.702h4.526a2.177 2.177 0 00-2.22-2.298 2.292 2.292 0 00-2.306 2.298z">
                                    </path>
                                </g>
                                <path fill="#fff"
                                    d="M37.826 8.731a2.64 2.64 0 012.808 2.965c0 1.906-1.03 3.002-2.808 3.002h-2.155V8.73zm-1.228 5.123h1.125a1.876 1.876 0 001.967-2.146 1.881 1.881 0 00-1.967-2.134h-1.125zm5.082-1.41a2.133 2.133 0 114.248 0 2.134 2.134 0 11-4.247 0zm3.334 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.571-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zm6.559 2.254h-.922l-.93-3.317h-.07l-.927 3.317h-.913l-1.242-4.503h.902l.806 3.436h.067l.926-3.436h.852l.926 3.436h.07l.803-3.436h.889zm2.281-4.503h.855v.715h.066a1.348 1.348 0 011.344-.802 1.465 1.465 0 011.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.033 1.033 0 00-1.075 1.141v2.635h-.888zm5.24-1.758h.888v6.26h-.888zm2.124 4.007a2.133 2.133 0 114.247 0 2.134 2.134 0 11-4.247 0zm3.333 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.571-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zm1.849.98c0-.81.604-1.278 1.676-1.344l1.22-.07v-.389c0-.475-.315-.744-.922-.744-.497 0-.84.182-.939.5h-.86c.09-.773.818-1.27 1.84-1.27 1.128 0 1.765.563 1.765 1.514v3.077h-.855v-.633h-.07a1.515 1.515 0 01-1.353.707 1.36 1.36 0 01-1.501-1.348zm2.895-.384v-.377l-1.1.07c-.62.042-.9.253-.9.65 0 .405.351.64.834.64a1.062 1.062 0 001.166-.983zm2.053-.596c0-1.423.732-2.324 1.87-2.324a1.484 1.484 0 011.38.79h.067V8.437h.888v6.26h-.851v-.71h-.07a1.563 1.563 0 01-1.415.785c-1.145 0-1.869-.901-1.869-2.328zm.918 0c0 .955.45 1.53 1.203 1.53.75 0 1.212-.583 1.212-1.526 0-.938-.468-1.53-1.212-1.53-.748 0-1.203.58-1.203 1.526zm6.964 0a2.133 2.133 0 114.247 0 2.134 2.134 0 11-4.247 0zm3.333 0c0-.976-.438-1.547-1.208-1.547-.772 0-1.207.571-1.207 1.547 0 .984.435 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zm2.107-2.249h.855v.715h.066a1.348 1.348 0 011.344-.802 1.465 1.465 0 011.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.033 1.033 0 00-1.075 1.141v2.635h-.889zm8.845-1.121v1.141h.976v.749h-.976v2.315c0 .472.194.679.637.679a2.967 2.967 0 00.339-.021v.74a2.916 2.916 0 01-.484.046c-.988 0-1.381-.348-1.381-1.216v-2.543h-.715v-.749h.715V9.074zm2.19-.637h.88v2.481h.07a1.386 1.386 0 011.374-.806 1.483 1.483 0 011.55 1.679v2.907h-.889V12.01c0-.72-.335-1.084-.963-1.084a1.052 1.052 0 00-1.134 1.142v2.63h-.888zm9.056 5.045a1.828 1.828 0 01-1.95 1.303 2.045 2.045 0 01-2.081-2.325 2.077 2.077 0 012.076-2.352c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 001.2 1.29 1.08 1.08 0 001.07-.546zm-3.126-1.451h2.275a1.086 1.086 0 00-1.109-1.167 1.152 1.152 0 00-1.166 1.167z"
                                    data-name="<Group>"></path>
                            </svg>
                        </span>
                        <span className="download">
                                <img src="https://play.google.com/store/apps/details?id=com.blueapron.blueapron.release"
                                width="100%" height="100%" alt="" />
                        </span>
                    </ul>
                </nav>
                <p className="footer_btm">
                    If you are using a screen reader and are having problems using this website, please call <span
                        className="blue_2">1-844-462-8299</span>
                    for assistance.
                </p>
                </section>
            </footer>
        </main>
    );
}
