const Post = {
	post_id: String,
	title: String,
	orgnization: String,
	shortDesc: String,
	fullDesc: String,
	image: String,
	partner: [
		{
			image: String,
			name: String
		}
	],
	sponsor: [
		{
			image: String,
			name: String
		}
	],
	location: [
		{
			long: Number,
			lat: Number,
			address: String
		}
	]
}

module.exports = {
	Post
}
