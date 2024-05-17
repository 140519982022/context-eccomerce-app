import React, { useContext, useEffect, useState } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import { CartContextCreate } from '../Context/CartContext'
import axios from 'axios'

export default function Home() {


    let { cartContity, setCartContity } = useContext(CartContextCreate)

    const [apiProductsList, setApiProductsList] = useState([]);

    useEffect(() => {

        axios.get(`https://dummyjson.com/products`)
            .then((response) => {

                return response.data

            })
            .then((finalResponse) => {
                setApiProductsList(finalResponse.products)

            })


    }, [])

    return (
        <>
            <Header>
                <h1>hello im header children</h1>
            </Header>

            <div class="text-center p-10">
                <h1 class="font-bold text-4xl mb-4">Responsive Product card grid</h1>
                <h1 class="text-3xl">Tailwind CSS</h1>
            </div>

            <section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                {
                    apiProductsList.map((items, index) => <ProductDetail key={index} items={items} cartContity={cartContity} setCartContity={setCartContity}></ProductDetail>)
                }

            </section>

            <div class="text-center py-20 px-10">
                <h2 class="font-bold text-2xl md:text-4xl mb-4">Thanks to <a href="https://unsplash.com/@nixcreative" class="underline font-black">Tyler Nix</a> for those AMAZING product images!</h2>
            </div>
            <Footer></Footer>
        </>
    )
}

function ProductDetail({ cartContity, setCartContity, items }) {
    let {category,brand,price,thumbnail} = items;
    return (
        <>
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src={thumbnail} alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                    <div class="px-4 py-3 w-72">
                        <span class="text-gray-400 mr-3 uppercase text-xs">{category}</span>
                        <p class="text-lg font-bold text-black truncate block capitalize">{brand}</p>
                        <div class="flex items-center">
                            <p class="text-lg font-semibold text-black cursor-auto my-3">${price}</p>
                            <del>
                                <p class="text-sm text-gray-600 cursor-auto ml-2">${price}</p>
                            </del>
                            <div class="ml-auto" onClick={() => setCartContity(cartContity + 1)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )

}
