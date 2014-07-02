if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Writing as a way of life',
		author: 'Abe Fox',
		url: 'http://abefox.com'
	});

	Posts.insert({
		title: 'The phases of writing a novel',
		author: 'Abe Fox',
		url: 'http://abefox.com'
	});

	Posts.insert({
		title: 'Getting through blocks',
		author: 'Abe Fox',
		url: 'http://abefox.com'
	});
}