import { Outlet, useNavigate } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import { useEffect } from "react";
import useUserStore from "./stores/UserStore";

export default function Layout() {
	const { currentUser } = useUserStore()
	const navigate = useNavigate()

	useEffect(() => {
		if (!currentUser) {
			navigate('/auth/login')
		}
	})
	return (
		<>
			<NavigationBar />
			<Outlet />
		</>
	)
}