rateContainer = document.querySelector('.rate')
selectedContainer = document.querySelector('.selected')
btn = document.querySelector('.btn')
votes = document.querySelectorAll('.vote')
rating = document.querySelector('.rating')



/* select rate */
votes.forEach(vote => {
    vote.addEventListener('click', () =>{
        vote.classList.add('orange')
        rating.innerHTML = vote.innerHTML
    })
});


/* show thank you */
btn.addEventListener('click', () =>{
    selectedContainer.classList.remove('hidden')
    rateContainer.classList.add('hidden')
})

