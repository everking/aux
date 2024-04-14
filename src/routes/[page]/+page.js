import { error } from '@sveltejs/kit'

export const load = async ({params}) => {
	try {
		const { page } = params;
		console.log(`params ${JSON.stringify(params, null, 2)}`);
		let MiscFile;

		switch(page) {
			case "excellence":
				MiscFile = await import('../../lib/Excellence.md')
				break;
			case "family":
				MiscFile = await import('../../lib/Family.md')
				break;
			case "school":
				MiscFile = await import('../../lib/School.md')
				break;
			case "others":
				MiscFile = await import('../../lib/Others.md')
				break;
			default:
				MiscFile = await import('../../lib/Others.md')
		}
		const Misc = MiscFile.default
		
		return {
			Misc
		}
	}
	catch(err) {
		error(500, err);
	}
}
