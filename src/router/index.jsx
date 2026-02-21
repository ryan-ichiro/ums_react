import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SplashPage from "../pages/SplashPage";
import Layout from "../layout";
import LoginPage from "../pages/Login";
import Register from "../pages/Register";


export default function Router() {
	return (
		<div className="App">
			<HashRouter>
				<Routes>
					<Route path="/" element={<SplashPage />} />
					<Route path="/auth">
						<Route path='/auth/login' element={<LoginPage />} />
						<Route path="/auth/register" element={<Register />} />
					</Route>
					<Route path="/" element={<Layout />}>

						<Route path='/home' element={<Home />} />
					</Route>
				</Routes>
			</HashRouter>
		</div>
	)
}