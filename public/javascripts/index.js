window.addEventListener("DOMContentLoaded", (e) => {
  
    let commentButton = document.querySelector('.comment-button');
    let article = document.querySelector('.singleArticle');
    let articleTitle = document.querySelector('.article-title');
    let newCommentBox = document.querySelector('.newcomment')
    let allComments = document.querySelector('.comments')
    // let articleDiv = document.querySelector('.singleArticle');

    let commentActive = false;
    function createComment (){
            let comment = document.createElement('textarea');
        comment.classList.add('new-comment-box')
        newCommentBox.appendChild(comment);
        let submitButton = document.createElement('button');
        submitButton.classList.add('submitComment');
        submitButton.textContent='Submit'
        newCommentBox.appendChild(submitButton);  
    }
    createComment();

    commentButton.addEventListener('click', (e)=> {
          newCommentBox.classList.toggle('hidden')
    })

    newCommentBox.addEventListener('click', async (e)=> {
        // console.log(e.target.textContent)
        let articleId = article.getAttribute('id');
        let userId = articleTitle.getAttribute('id');
        let bodyText = document.querySelector('.new-comment-box')
        let body= bodyText.value;
        let comment = {articleId,userId,body}
        if (e.target.textContent == 'Submit') {
            let newComment = await fetch('/api/new-comment',
            {method: 'post',
            headers: {
                'Content-Type':'application/json',     
            },
            body: JSON.stringify({comment})
        }).then((response)=>response.json())
        .then(res => {
            let p =document.createElement('p')
            p.innerText = body;
            allComments.appendChild(p)
            bodyText.value ='';
            newCommentBox.classList.toggle('hidden')

        })

        }
    })

})


