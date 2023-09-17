// console.log('hello world')

let no = document.querySelector('.button02')
console.log(no)

let yes = document.querySelector('.button01')
// let video = document.querySelector('video')

const body = document.querySelector('body')

// body.style.width = window.innerWidth
// body.style.height = window.innerHeight

no.addEventListener('mouseover', () => {
    console.log('hello')
    no.style.top = Math.random() * 80 + "vh"
    no.style.left = Math.random() * 80 + "vh"
})
yes.addEventListener('click', () => {
    let video = document.createElement('video')
    // console.log(video)
    body.append(video)
    video.setAttribute('src', 'Dance.mp4')
    video.play()
    setTimeout(() => {
        video.remove() 
    }, 18000)
})

// $('.button').on('mouseover', function() {
//     $(this).css({
//       'top': Math.random() * window.innerHeight + "px",
//       'left': Math.random() * window.innerWidth + "px"
//     });
//   })