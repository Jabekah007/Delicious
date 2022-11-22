import aboutImage from "../assets/images/about-image.png";
export const About = () =>{
    return(
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium text-black">About Us</h2>
                    <p className="text-lg text-black">
                    All restaurant owners are familiar with those magical lunchtime and dinnertime peak hours. They’re also well aware of all of that nasty downtime in-between. Bolt Food can help you with reaching everyone, always. You may even bag a whole new batch of regulars!
                    If you’d like to sign your restaurant up to the Bolt Food platform, all you need to do is is fill in an application and we’ll get back to you with all the details.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover"/>
                </div>
            </div>
        </div>

    )
}

export default About;