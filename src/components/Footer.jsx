import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="bg-[#F5F5DC] py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left  
 mb-4 md:mb-0">
                    <h3 className="text-2xl  
 font-bold">WARDIL</h3>
                    <p className="text-gray-600 mt-2">Donate and help other people around the world</p>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                    <div>
                        <h4 className="text-lg font-semibold">Navigation</h4>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/feedback">Feedback</Link></li>
                            <li><Link to="/join-our-community">Join Our Community</Link></li>
                            <li><Link to="/events">Events</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Stay Connected</h4>
                        <p className="mt-2">To ensure that you receive all the latest news and updates from our organization, we invite you to subscribe to our mailing list</p>
                        <form>
                            <input type="email" placeholder="Email Address" className="border border-gray-300 p-2 rounded" />
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="text-center md:text-right">
                    <p className="text-gray-600">At Hope Raiser, we are dedicated to making a positive impact in the lives of those we serve. We believe that every individual has the power to create society.</p>
                    <p className="text-gray-500 mt-4">&copy; NovaSaz.com 2023. All Rights Reserved.</p>
                    <div className="mt-2">
                        <Link to="/terms-of-use" className="text-gray-600 hover:text-gray-800">Terms of Use</Link>
                        <span className="mx-2">|</span>
                        <Link to="/terms-and-privacy" className="text-gray-600 hover:text-gray-800">Terms & Privacy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}