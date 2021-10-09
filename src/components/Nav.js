import * as React from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';

const NavBar = () => {
	return (
		<nav className="bg-gray-800">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex-shrink-0 flex items-center">
							<p className="text-white">Git It!</p>
						</div>
						<div className="hidden sm:block sm:ml-6">
							<div className="flex space-x-4"></div>
						</div>
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<a
							href="https://github.com/harshil1712/git-workshop"
							target="_blank"
						>
							<FaGithub className="text-2xl text-white" />
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
