import { useCallback, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Commands, ERROR_MESSAGE, PATH, Path, WHOAMI } from './const';

export const useTerminal = () => {
	const [logs, setLogs] = useState<string[]>([]);
	const [path, setPath] = useState(['', 'Users']);

	const navigate = useNavigate();

	const whoami = useCallback(() => {
		setLogs((prev) => [...prev, WHOAMI]);
	}, []);

	const pwd = useCallback(() => {
		setLogs((prev) => [...prev, path.join('/')]);
	}, [path]);

	const exit = useCallback(() => {
		navigate(-1);
	}, [navigate]);

	const ls = useCallback(() => {}, []);

	const cd = useCallback(
		(value: string) => {
			console.log(value);
			if (!PATH.includes(value as Path)) throw new Error(ERROR_MESSAGE.CD + value);
			if (value === '~') return;
			if (value === 'main') {
				navigate('/');
				return;
			}
			setPath((prev) => [...prev, value]);
			navigate(`/${value}`);
		},
		[navigate],
	);

	const clear = useCallback(() => {
		setLogs([]);
	}, []);

	const onSubmitTerminal = useCallback(
		(input: string) => {
			setLogs((prev) => [...prev, WHOAMI + '@Blog ' + path[path.length - 1] + ' % ' + input]);
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
						throw new Error(ERROR_MESSAGE.NOT_FOUNT + command);
				}
			} catch (err) {
				if (err instanceof Error) {
					setLogs((prev) => [...prev, err.message]);
				} else {
					console.error(err);
				}
			}
		},
		[cd, clear, exit, ls, path, pwd, whoami],
	);

	return { logs, onSubmitTerminal };
};
