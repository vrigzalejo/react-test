/**
 * Created by vrigzlinuxmint13 on 12/26/15.
 */
var CommentBox = React.createClass({
	render: function() {
		return (
			<div className="commentBox">Hello, world! I am a CommentBox.</div>
		);
	}
});
ReactDOM.render(
	<CommentBox />,
	document.getElementById('content')
);