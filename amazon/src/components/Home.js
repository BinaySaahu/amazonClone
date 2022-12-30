import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className="home_container">
            <img
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            />

            <div className="home_row">
                <Product  id = {235734534} title = "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" price = "69" ratings = {3} imgsrc = "https://books.google.co.in/books/content?id=19forYX7NLQC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2tSLRMY_UIIcdx8YBezIlpoYgFBw&w=1280"/>
                <Product title = "Lenovo IdeaPad Flex 5 Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) 14ITL05 2 in 1 Laptop  (14 Inch, Graphite Grey, With MS Office)" price = "200" ratings = {3} imgsrc = "https://rukminim1.flixcart.com/image/416/416/ku5ufm80/computer/a/x/a/na-2-in-1-laptop-lenovo-original-imag7cmytyfjazq4.jpeg?q=70"/>
            </div>
            <div className="home_row">
                <Product title = "Apple iPhone 14 Pro Max 1 TB (Deep Purple, 6 GB RAM)" price = "999" ratings = {4} imgsrc = "https://img4.gadgetsnow.com/gd/images/products/additional/large/G390868_View_1/mobiles/smartphones/apple-iphone-14-pro-max-1-tb-space-black-6-gb-ram-.jpg"/>
                <Product title = "Apple Watch Ultra GPS + Cellular - 49 mm Titanium Case with Midnight Ocean Band" price = "500" ratings = {3} imgsrc = "https://www.reliancedigital.in/medias/Apple-Ultra-Sports-Fitness-Watches-493177936-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNTQ2MDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGY0L2hjNy85ODkxOTQzODc0NTkwLmpwZ3xmZWJjYTg2MWZlMTc3YjNjNWIzN2VjMzI0NWI0ZmYzYTRiMTk3ZTE1YzU3OWUxZjQ3ZTQ1MjYzY2NjYzI5Nzdh"/>
                <Product title = "Google Pixel 7 Pro (Snow, 128 GB) (12 GB RAM)" price = "435" ratings = {3} imgsrc = "https://m.media-amazon.com/images/I/712JkPUUlRL._SX679_.jpg"/>

            </div>
            <div className="home_row">
                <Product title = "OnePlus 126 cm (50 inches) Y Series 4K Ultra HD Smart Android LED TV 50Y1S Pro (Black)" price = "400" ratings = {3} imgsrc = "https://m.media-amazon.com/images/I/81I5oICiIzL._SX522_.jpg"/>
            </div>
        </div>
      
    </div>
  )
}

export default Home
