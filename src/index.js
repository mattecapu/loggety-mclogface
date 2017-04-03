import colors from 'colors/safe';

export default function createLogFunction({ type = 'log', color = 'blue', tag, uppercase = true }) {
	const prefix = tag ? [ `[${uppercase ? tag.toUpperCase() : tag}]` ] : [];
	return (...args) =>
		console[type].apply(
			console,
			prefix.concat(args).map(x =>
				typeof x === 'string' ? colors[color](x) : x
			)
		);
};
