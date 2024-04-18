import { useCallback, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Commands, PATH, Path } from './const';

export const useTerminal = () => {
	const [logs, setLogs] = useState<string[]>([]);

	const navigate = useNavigate();

	const whoami = useCallback(() => {
		setLogs((prev) => [...prev, 'CHOGANGYEOL']);
	}, []);

	const pwd = useCallback(() => {
		setLogs((prev) => [...prev, '/Users/CHOGANGYEOL']);
	}, []);

	const exit = useCallback(() => {
		navigate(-1);
	}, [navigate]);

	const ls = useCallback(() => {}, []);

	const cd = useCallback(
		(path: string) => {
			console.log(path);
			if (!PATH.includes(path as Path)) throw new Error('cd: no such file or directory: ' + path);
			if (path === '~') return;
			if (path === 'main') {
				navigate('/');
				return;
			}
			navigate(`/${path}`);
		},
		[navigate],
	);

	const clear = useCallback(() => {
		setLogs([]);
	}, []);

	const onSubmitTerminal = useCallback(
		(input: string) => {
			setLogs((prev) => [...prev, input]);
			const [command, value] = input.split(' ');
			try {
				switch (command as Commands) {
					case 'whoami':
						whoami();
						break;
					case 'pwd':
						pwd();
						break;
					case 'exit':
						exit();
						break;
					case 'ls':
						ls();
						break;
					case 'cd':
						cd(value ?? '~');
						break;
					case 'clear':
						clear();
						break;
					default:
						throw new Error('command not found: ' + command);
				}
			} catch (err) {
				if (err instanceof Error) {
					setLogs((prev) => [...prev, err.message]);
				} else {
					console.error(err);
				}
			}
		},
		[cd, clear, exit, ls, pwd, whoami],
	);

	return { logs, onSubmitTerminal };
};
