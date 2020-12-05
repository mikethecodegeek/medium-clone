document.addEventListener('DOMContentLoaded', ()=> {
    const followButton = document.querySelector('.user-follow-button');
    const unfollowButton = document.querySelector('.user-unfollow-button');
    const userFollows = document.querySelector('.numFollows');


    async function follow() {
        const followerId = document.querySelector('.userId').id;
        const userId = followButton.id;
        const follow ={userId,followerId};
        await fetch('/api/follow-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(follow),
        }).then((res) => {
            followButton.classList.add('hidden');
            unfollowButton.classList.remove('hidden')
            let numFollows = parseInt(userFollows.innerText);
            userFollows.innerText = `${numFollows+1} `;
            res.json();
        });

    }

    async function unfollow() {
        const followerId = document.querySelector('.userId').id;
        const userId = unfollowButton.id;
        const unfollow ={userId,followerId};
        await fetch('/api/unfollow-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(unfollow),
        }).then((res) => {
            unfollowButton.classList.add('hidden');
            followButton.classList.remove('hidden');
            let numFollows = parseInt(userFollows.innerText);
            userFollows.innerText = `${numFollows-1} `;
            res.json();
        });

    }
    followButton.addEventListener('click',follow)
    unfollowButton.addEventListener('click',unfollow)
})