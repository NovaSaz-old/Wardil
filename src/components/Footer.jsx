import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="bg-[#F5F5DC] h-[721] p-10">
            <div className="columns-3">
                <div className="block">
                    <h1>Wardil</h1>
                    <h3>Donate and help other people around the world</h3>
                </div>
                <div className="columns-1 mt-14">
                    <h1>Navigation</h1>
                    <div>
                        <ul>
                            <li>FAQ</li>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Feedback</li>
                            <li>Join our community</li>
                            <li>Events</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <title>Stay Connected</title>

                    <p>To ensure that you receive all the latest news and updates from us, subscribe to our mailing list</p>
                    <input type="text" placeholder="email address" />
                    <button>
                        subsebrite
                    </button>
                </div>
            </div>

            <div className="mt-10">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, est accusantium. Facilis laborum saepe necessitatibus. Ratione eveniet laborum perspiciatis quae voluptatum, reiciendis pariatur veniam odit necessitatibus, nulla fuga quo nesciunt.</p>
                <div className="border-t border-gray-900 my-4"></div>
            </div>
        </footer>
    )
}