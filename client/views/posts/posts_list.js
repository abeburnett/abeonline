var postsData = [
	{
		title: 'Writing a book, my way',
		author: 'Abe Fox',
		url: 'http://abefox.com/'
	},
	{
		title: 'When the writing gets tough',
		author: 'Abe Fox',
		url: 'http://abefox.com'
	},
	{
		title: 'An update on The Unchosen',
		author: 'Abe Fox',
		url: 'http:///abefox.com'
	}
];

Template.postsList.helpers({
	posts: postsData
});