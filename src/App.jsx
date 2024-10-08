import Banner from "./components/Banner/Banner"
import Category from "./components/Category/Category"
import Hero from "./components/Hero/Hero"
import NavBar from "./components/NavBar/NavBar"
import Services from "./components/Services/Services"
import headphone from '/src/assets/hero/headphone.png';
import watch2 from '/src/assets/category/watch2.png';
import Products from "./components/Products/Products"
import Blogs from "./components/Blogs/Blogs"
import Parnters from "./components/Partners/Parnters"
import Footer from "./components/Footer/Footer"
const BannerData=[
  {
    id:1,
    discount:'50% OFF',
    title:"Fine Smile",
    date:"10 Jan to 28 Jan",
    image:headphone,
    title2:"Air Solo Bass",
    title3:"Winter Sale",
    title4:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
    textColor:"text-primary",
    bgColor:"bg-primary"
  },
  {
    id:2,
    discount:'30% OFF',
    title:"Happy Hours",
    date:"14 Jan to 28 Jan",
    image:watch2,
    title2:"Smart Solo",
    title3:"Winter Sale",
    title4:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
    textColor:"text-brandGreen",
    bgColor:"bg-brandGreen"
  },
]
function App() {


  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
<NavBar/>
<Hero/>
<Category/>
<Services/>
<Banner data={BannerData[0]}/>
<Products/>
<Banner data={BannerData[1]}/>
<Blogs/>
<Parnters/>
<Footer/>
    </div>
  )
}

export default App
