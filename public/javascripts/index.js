window.addEventListener("DOMContentLoaded", (e) => {
  
    let commentButton = document.querySelector('.comment-button');
    let article = document.querySelector('.singleArticle');
    let articleTitle = document.querySelector('.article-title');
    let newCommentBox = document.querySelector('.newcomment')
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
        // // let newComment = await 
        // let comment = document.createElement('textarea');
        // comment.classList.add('new-comment-box')
        // newCommentBox.appendChild(comment);
        // let submitButton = document.createElement('button');
        // submitButton.classList.add('submitComment');
        // submitButton.textContent='Submit'
        // newCommentBox.appendChild(submitButton);  
        // if (!commentActive){
        //     newCommentBox.classlist.remove('hidden')
        // }else{
        //     newCommentBox.classList.add('hidden')
        // }
       newCommentBox.classlist.toggle('hidden')
    //    console.log(newCommentBox)

    })

    newCommentBox.addEventListener('click', async (e)=> {
        // console.log(e.target.textContent)
        let articleId = article.getAttribute('id');
        let userId = articleTitle.getAttribute('id');
        let body = document.querySelector('.new-comment-box').value;
        let comment = {articleId,userId,body}
        if (e.target.textContent == 'Submit') {
            // console.log(body)
            let newComment = await fetch('/api/new-comment',
            {method: 'post',
            headers: {
                'Content-Type':'application/json',     
            },
            body: JSON.stringify({comment})
        }).then((response)=>response.json())

        }
    })

})


