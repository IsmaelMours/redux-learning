import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😲',
    heart: '❤',
    rocket: '🚀',
    coffee: '☕'
};

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))} // Use postId instead of postid
            >
                {emoji} {post.reactions[name]} {/* Ensure it's 'reactions' not 'reaction' */}
            </button>
        );
    });

    return (
        <div>
            {reactionButtons}
        </div>
    );
};

export default ReactionButtons;
