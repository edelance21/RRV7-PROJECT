import { Link } from "react-router";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "RESTExplorer" },
    { name: "Check out country data!", content: "Welcome to RESTExplorer" },
  ];
}

export default function Home() {
  return (
    <div className="px-2 py-32 bg-white md:px-0">
      <div className="container items-center max-w-6xl mx-auto xl:px-5">
        <div>
          <div>
            <div>
              <h1>
                <span>Explore Countries with</span>
                <span>Real-Time Data</span>
              </h1>

              <p>
                Discover details about every country 
                around the world - from capitals to regions!
              </p>
              <div>
                <Link to="/countries"> 
                  Explorer Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg> 
                </Link>

                <Link to="/about"> Learn More </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="https://image.winudf.com/v2/image/Ymx1ZWNhcC5pbWFnZXouYmVhdXRpZnVsX2NvdW50cmllc193YWxscGFwZXJzX3NjcmVlbl8wXzlpMW14OWl1/screen-0.webp?fakeurl=1&type=.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
