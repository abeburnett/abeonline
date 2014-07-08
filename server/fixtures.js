if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Writing as a way of life',
		author: 'Abe Fox',
		url: 'http://abefox.com',
		postText: 'This is a post about writing as a way of life.'
	});

	Posts.insert({
		title: 'The phases of writing a novel',
		author: 'Abe Fox',
		url: 'http://abefox.com',
		postText: 'This is a post about the phases of writing a novel.'
	});

	Posts.insert({
		title: 'Getting through blocks',
		author: 'Abe Fox',
		url: 'http://abefox.com',
		postText: "This is a post about getting through writer's block."
	});
}