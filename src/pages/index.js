import * as React from 'react';
import NavBar from '../components/Nav';
import Card from '../components/Card';
import JSONData from '../../data/contributors.json';

const IndexPage = () => {
	return (
		<main>
			<NavBar />
			<div className="container mx-auto px-4 py-8 min-h-screen">
				<h2 className="text-center text-2xl uppercase">Contributors </h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
					{JSONData.map((data) => (
						<Card key={data.id} data={data} />
					))}
				</div>
			</div>
			<footer style={{ backgroundColor: '#155e97' }} className="bottom-0">
				<h6
					className="text-center"
					style={{
						paddingTop: '15px',
						marginBottom: 0,
						color: 'rgb(197,197,197)',
						paddingBottom: '15px',
					}}
				>
					Made with ❤️
				</h6>
			</footer>
		</main>
	);
};

export default IndexPage;
