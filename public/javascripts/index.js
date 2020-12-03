window.addEventListener('DOMContentLoaded', (e) => {
    let homeButton = document.querySelector('.logo');

    homeButton.addEventListener('click', () => {
        window.location = 'http://localhost:8080';
    });

    let commentButton = document.querySelector('.comment-button');
    let article = document.querySelector('.singleArticle');
    let articleTitle = document.querySelector('.article-title');
    let newCommentBox = document.querySelector('.newcomment');

    // let articleDiv = document.querySelector('.singleArticle');

    commentButton.addEventListener('click', (e) => {
        // let newComment = await
        let comment = document.createElement('textarea');
        comment.classList.add('new-comment-box');
        newCommentBox.appendChild(comment);
        let submitButton = document.createElement('button');
        submitButton.classList.add('submitComment');
        submitButton.textContent = 'Submit';
        newCommentBox.appendChild(submitButton);
    });

    newCommentBox.addEventListener('click', async (e) => {
        // console.log(e.target.textContent)
        let articleId = article.getAttribute('id');
        let userId = articleTitle.getAttribute('id');
        let body = document.querySelector('.new-comment-box').value;
        let comment = { articleId, userId, body };
        if (e.target.textContent == 'Submit') {
            // console.log(body)
            let newComment = await fetch('/api/new-comment', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comment }),
            }).then((response) => response.json());
        }
    });

    const likeButton = document.querySelector('.like');
    likeButton.addEventListener('click', async (e) => {
        let articleId = article.getAttribute('id');
        let userId = articleTitle.getAttribute('id');

        let like = { articleId, userId };

        console.log(like);

        await fetch('/api/like', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( like ),
        }).then((res) => console.log(res.json()));
    });

    // const unlikeButton;
});
