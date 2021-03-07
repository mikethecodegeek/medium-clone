window.addEventListener('DOMContentLoaded', (e) => {
    // let homeButton = document.querySelector('.logo');

    // homeButton.addEventListener('click', () => {
    //     window.location = 'http://localhost:8080';
    // });
    let modal = document.querySelector('.modal')
    console.log(modal)
    let commentButton = document.querySelector('.comment-button');
    let article = document.querySelector('.singleArticle');
    let articleTitle = document.querySelector('.article-title-single');
    let newCommentBox = document.querySelector('.newcomment');
    // console.log(newCommentBox)
    let allComments = document.querySelector('.comments');

    let userName = document.querySelector('.username');
    let day = new Date().getDate();
    let month = new Date().getMonth();
    month++;
    // console.log(month)

    let year = new Date().getFullYear();
    let dateShown = `${month}/${day}/${year}`;

    let commentActive = false;
    function createComment() {
        let comment = document.createElement('input');
        comment.setAttribute('type', 'text');
        comment.classList.add('new-comment-box');
        newCommentBox.appendChild(comment);
        let submitButton = document.createElement('button');
        submitButton.classList.add('submitComment');
        submitButton.textContent = 'Submit';
        newCommentBox.appendChild(submitButton);
    }
    createComment();

    commentButton.addEventListener('click', (e) => {
        newCommentBox.classList.toggle('hidden');
    });

    

    newCommentBox.addEventListener('click', async (e) => {
        // console.log(e.target.textContent)
        let articleId = article.getAttribute('id');
        let userId = articleTitle.getAttribute('id');
        let bodyText = document.querySelector('.new-comment-box');
        let body = bodyText.value;
        let comment = { articleId, userId, body };

        if (e.target.textContent == 'Submit') {
            let newComment = await fetch('/api/new-comment', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comment }),
            })
                .then((response) => response.json())
                .then((res) => {
                    let p = document.createElement('p');
                    let div = document.createElement('div');
                    div.setAttribute('class', 'commentsdiv');
                    p.innerHTML = `<p class="commentbody">${body}</p> <p class="commentauthor">${userName.innerText}</p><p class="commentdate">${dateShown}</p>`;
                    div.appendChild(p);
                    allComments.prepend(div);
                    bodyText.value = '';
                    newCommentBox.classList.toggle('hidden');
                    
                    let commentCount = document.getElementById('comment-count');
                    let comments = parseInt(commentCount.innerText, 10);
                    comments++;
                    commentCount.innerText = comments;
                });
        }
    });

    const likeButton = document.querySelector('.like');
    likeButton.addEventListener('click', async (e) => {
        let articleId = article.getAttribute('id');
        articleId = parseInt(articleId, 10);
        let userId = articleTitle.getAttribute('id');
        userId = parseInt(userId, 10);

        let like = { articleId, userId };

        await fetch('/api/like', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(like),
        }).then((res) => {
            let likeCount = document.getElementById('like-count');
            let likes = parseInt(likeCount.innerText, 10);
            likes++;
            likeCount.innerText = likes;

            likeButton.classList.add('hidden');
            // likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i>';

            document.querySelector('.unlike').classList.remove('hidden');

            res.json();
        });
    });
    const unlikeButton = document.querySelector('.unlike');
    unlikeButton.addEventListener('click', async () => {
        let articleId = article.getAttribute('id');
        articleId = parseInt(articleId, 10);
        let userId = articleTitle.getAttribute('id');
        userId = parseInt(userId, 10);

        let like = { articleId, userId };

        await fetch('/api/unlike', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(like),
        }).then((res) => {
            let likeCount = document.getElementById('like-count');
            let likes = parseInt(likeCount.innerText, 10);
            likes--;
            likeCount.innerText = likes;

            unlikeButton.classList.add('hidden');
            // unlikeButton.innerHTML = '<i class="far fa-thumbs-up"></i>';

            document.querySelector('.like').classList.remove('hidden');

            res.json();
        });
    });



    // async function follow() {
    //     const followButton = document.querySelector('.user-follow-button');
    //     const followerId = document.querySelector('.userId').value;
    //     const userId = followButton.id;
    //     const follow ={userId,followerId};
    //     await fetch('/api/follow', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(follow),
    //     }).then((res) => {

    //         followButton.innerText = 'following'
    //         res.json();
    //     });

    // }
});
