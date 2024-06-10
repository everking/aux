import { error, redirect } from '@sveltejs/kit'


const getArticleByDocumentId = async (articleId) => {
	const articleIds = {
		"stories": "17auQXYhn9agczwc7PoF",
		"apologetics": "zQcIp2se90Jj7JUv4doL",
		"beatitudes": "fJMUgkQVEXFOLkt1BAgf",
		"doing-work-well": "uKQsRtCB3mGACUoOjdsz",
		"being-fruitful": "EZuWxelpqDuRRinXLikj",
		"recollections": "20jJtsh2qf9gLgjgWfBH",
		"counseling": "3aV27W0bxmxN5xNyt7Bp",
		"finding-purpose": "PxXITes1tkQJ1jpvAgLf",
		"friendship-clubs": "6HnJrWvBBBrYqv4zOjQS",
		"academic": "8DCYGJ7NREzZe57H5ADb",
		"ask-any-question": "8JSzkBGMWf6yqOPMvU3l",
		"health": "AOU1EIsShBwpZpBfGpSA",
		"formation": "BXOwuBVBtlPopbWNR9RF",
		"reading-list": "CUsMAhBXttSbRVnMfHC4",
		"prayers": "HGSmmzQcvtpohNKx46Yo",
		"pointers": "MKGIrrcNGYyszw7nYdIv",
		"biblical": "MVjylW3IsNoh3OnFYS3T",
		"culture": "PAM7KuXipRwoyA939kFx",
		"connect-families": "PdBSvOpbUuPmPIb6sNAh",
		"corporal-works-of-mercy": "Sb5qxprFweCiwbrzAKoP",
		"zacchaeus": "XuGa9bbrjMxMPBAtOEbi",
		"mentoring": "Y8Sh1YGw1wDzeWvO34dV",
		"spiritual": "Z38FrjhstNoT5UfxArJ4",
		"coaching": "c7blKIBUPP9hlFe9ipB4",
		"sports-group": "crrBcHToXwWXRAMeqRBj",
		"faith-reason": "en8V4UYfHgb18SjzEePM",
		"life-of-saints": "gKkjv4noJ7bYsK6QLeEF",
		"readings": "h8A2FPf424bhz9KQKW6m",
		"service-projects": "kVZxoQRS9J0enSeK6ydK",
		"ccc": "lDH9nWr75gYOkwRQ4kSB",
		"study-weekend": "pMRyNJclOWYJxOgXFf17",
		"movie-club": "poSK5JsfzTXYDGbnEO8Y",
		"bible-study": "qD5jPMeBR65kd7sJt5oG",
		"spiritual-reading": "6jWYKHjJEWsejfsKRPO4",
		"apostolate": "qLXCBUqLWdZ33sza4B0E",
		"spiritual-works-of-mercy": "slSVQ7KJUFqtuGvrz1EM",
		"virtues": "tqbsgMae0njB5VOH7UWv",
		"coming-soon": "wLM1jCsCsWUatgWarvJm",
		"sports": "xWRQPW8mD52nSiKf07kj",
		"game-reviews": "zGkasfEaQTrhbJrBD52H"
	};

	const documentId = articleIds[articleId];
	console.log(`GET documentId: ${documentId}`);
	try {
		const response = await fetch(`https://firestore.googleapis.com/v1/projects/auxilium-420904/databases/aux-db/documents/articles/${documentId}`, {
			method: 'GET'});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const document = await response.json();
		if (document !== null) {
			const fields = document.fields;
			console.log(JSON.stringify(fields, null, 2));
			console.log(`fields.title.stringValue: ${fields.title.stringValue}`);
			console.log(`fields.body.stringValue: ${fields.body.stringValue}`);
			return {
				title: fields.title.stringValue,
				body: fields.body.stringValue,
				name: document.name,
				documentId,
				articleId
			};
		}
	} catch (error) {
		console.error('Error fetching articles:', error);
	} 
}

export const load = async ({ params }) => {
	try {	
		const articleData = await getArticleByDocumentId(params.post);
	
		return articleData;
	} catch(err) {
		console.log(err);
		console.log(`Post not found: ${params.post}.`);
	}
}




