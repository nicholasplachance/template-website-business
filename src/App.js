import './App.css';

import BackDrop from './components/BackDrop/BackDrop';
import NavBar from './components/NavBar/NavBar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import { useState } from 'react';

function App() {
	const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

	const drawerToggleClickHandler = () => {
		setSideDrawerOpen((prevState) => {
			return { sideDrawerOpen: !prevState.setSideDrawerOpen };
		});
	};

	const backDropClickHandler = () => {
		setSideDrawerOpen(false);
	};

	let sideDrawer;
	let backdrop;

	if (sideDrawerOpen) {
		sideDrawer = <SideDrawer />;
		backdrop = <BackDrop click={backDropClickHandler} />;
	}

	return (
		<div className='App'>
			<NavBar drawerToggleClickHandler={drawerToggleClickHandler} />
			<SideDrawer show={sideDrawerOpen} />
			{backdrop}
			<main style={{ marginTop: '69px' }}></main>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, magni natus enim sit recusandae non
				maiores eveniet voluptatum, harum dignissimos rem repellendus at temporibus sed dolorem omnis soluta
				aliquid eos?
			</p>
		</div>
	);
}

export default App;
