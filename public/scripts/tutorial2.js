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
var CommentList = React.createClass( {
	render: function() {
		return (
			<div className="commentList">
				Hello, world! I am a CommentList.
			</div>
		);
	}
} );
var CommentForm = React.createClass( {
	render: function() {
		return (
			<div className="commentForm">
				Hello, world! I am a CommentForm.
			</div>
		);
	}
} );
ReactDOM.render(
	<CommentBox />,
	document.getElementById('content')
);