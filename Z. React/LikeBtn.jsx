import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {
    state = {
        hasLiked: false,
        likes: 100
    }

    handleClick = () => {

        if (!this.state.hasLiked) {
            this.setState({
                hasLiked: true,
                likes: this.state.likes + 1
            })
        } else {
            this.setState({
                hasLiked: false,
                likes: this.state.likes - 1
            })
        }
    }

    render() {
        const classNameLikeBtn = cx({
            'like-button': true,
            liked: this.state.hasLiked
        })

        return (
            <>
                <div>
                    <button className={classNameLikeBtn} onClick={this.handleClick}>
                        Like | <span className="likes-counter">{this.state.likes}</span>
                    </button>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}