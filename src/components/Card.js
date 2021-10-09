import * as React from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaFirefoxBrowser } from '@react-icons/all-files/fa/FaFirefoxBrowser';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';

const Card = (props) => {
	const [avatar, setAvatar] = React.useState('');
	React.useEffect(() => {
		fetch(`https://api.github.com/users/${props.data.github}`)
			.then((res) => res.json())
			.then((data) => setAvatar(data.avatar_url));
	}, []);
	return (
		<div className="w-64 bg-white rounded-lg p-12 flex flex-col justify-center items-center">
			<div className="mb-8">
				<img
					className="object-center object-cover rounded-full h-36 w-36"
					src={avatar}
					alt="photo"
				/>
			</div>
			<div className="text-center">
				<p className="text-xl text-gray-700 font-bold mb-2">
					{props.data.name}
				</p>
				<p className="text-base text-gray-400 font-normal">
					{props.data.title}
				</p>
				<div className="grid grid-cols-3 pt-4">
					<a href={`https://github.com/${props.data.github}`} target="_blank">
						<FaGithub className="text-2xl" />
					</a>
					<a href={`${props.data.website}`} target="_blank">
						<FaFirefoxBrowser className="text-2xl" />
					</a>
					<a href={`https://twitter.com/${props.data.twitter}`} target="_blank">
						<FaTwitter className="text-2xl" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
