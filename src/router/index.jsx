import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SplashPage from "../pages/SplashPage";
import Layout from "../layout";
import LoginPage from "../pages/LoginPage";

export default function Router() {
	return (
		<div className="App">
			<HashRouter>
				<Routes>
					<Route path="/" element={<SplashPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path="/" element={<Layout />}>

						<Route path='/home' element={<Home />} />
					</Route>
				</Routes>
			</HashRouter>
		</div>
	)
}