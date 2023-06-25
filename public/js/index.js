const banners = document.querySelectorAll('.banner--item')
const container = document.getElementById('container')
const bannerLayer1 = document.getElementById('banner--layer1')
const bannerLayer2 = document.getElementById('banner--layer2')
const bannerLayer3 = document.getElementById('banner--layer3')
const bannerLayer4 = document.getElementById('banner--layer4')
const bannerLayer5 = document.getElementById('banner--layer5')
const bannerLayer6 = document.getElementById('banner--layer6')
const bannerLayer7 = document.getElementById('banner--layer7')
const titleBannerContent2 = document.getElementById('banner--content-2__tittle')
const titleBannerContent3 = document.getElementById('banner--content-3__tittle')
const titleBannerContent4 = document.getElementById('banner--content-4__tittle')
const titleBannerContent5 = document.getElementById('banner--content-5__tittle')
const titleBannerContent6 = document.getElementById('banner--content-6__tittle')
const descriptionBannerContent2 = document.getElementById('banner--content-2__description')
const descriptionBannerContent3 = document.getElementById('banner--content-3__description')
const descriptionBannerContent4 = document.getElementById('banner--content-4__description')
const descriptionBannerContent5 = document.getElementById('banner--content-5__description')
const descriptionBannerContent6 = document.getElementById('banner--content-6__description')

container.addEventListener('scroll', function (evt) {
    banners.forEach((banner, index) => {
        if (banner.getBoundingClientRect().top === 0) {
            if (banner.id === "banner_2") {
                titleBannerContent2.classList.add('activeTextBanner2')
                descriptionBannerContent2.classList.add('activeTextBanner2')
                bannerLayer1.style.animation = "appendSpider 5s ease-in-out forwards"
                bannerLayer2.style.animation = "appendBox 5s ease-in-out forwards"
            }
            if (banner.id === "banner_3") {
                titleBannerContent3.classList.add('activeTextBanner3')
                descriptionBannerContent3.classList.add('activeTextBanner3')
                bannerLayer3.style.animation = "animationBannerLayer3 5s ease-in-out forwards"
            }
            if (banner.id === "banner_1") {
                const bannerPics = document.querySelectorAll('.banner--pic')
                bannerPics.forEach((bannerPic, index) => {
                    if (index === bannerPics.length - 2) {
                        const nthDisplay = document.getElementById(`${bannerPic.id}`)
                        nthDisplay.style.animation = "animationRotate 1.5s linear forwards"
                        nthDisplay.addEventListener('animationend', () => {
                            nthDisplay.style.animation = ""
                        })
                    }
                })
            }

            if (banner.id === "banner_4") {
                titleBannerContent4.classList.add('activeTextBanner3')
                descriptionBannerContent4.classList.add('activeTextBanner3')
                bannerLayer4.style.animation = "animationBannerLayer6 3.5s ease-in-out forwards"
                bannerLayer4.addEventListener('animationend', () => {
                    bannerLayer5.style.animation = "animationBannerLayer7 3.5s linear forwards"
                })
            }
            if (banner.id === "banner_5") {
                titleBannerContent5.classList.add('activeTextBanner3')
                descriptionBannerContent5.classList.add('activeTextBanner3')
                bannerLayer6.style.animation = "animationBannerLayer8 3.5s linear forwards"
            }

            if (banner.id === "banner_6") {
                titleBannerContent6.classList.add('activeTextBanner3')
                descriptionBannerContent6.classList.add('activeTextBanner3')
                bannerLayer7.style.animation = "animationBannerLayer9 3.5s linear forwards"
            }
        }
    })
})


const gripPics = document.getElementById('gripPics')


function nextBanner() {
    const bannerPics = document.querySelectorAll('.banner--pic')
    bannerPics.forEach((bannerPic, index) => {
        gripPics.appendChild(bannerPics[0])
        if (index === bannerPics.length - 1) {
            let nthDisplay = document.getElementById(`${bannerPic.id}`)
            bannerPic.children[1].classList.remove('background-banner-pic-from-behind')
            nthDisplay.style.animation = "animationRotateNext 1.5s linear forwards"
            nthDisplay.addEventListener('animationend', (evt) => {
                nthDisplay.style.animation = ""
            })
        } else {
            bannerPic.children[1].classList.add('background-banner-pic-from-behind')
        }
    })
}

function prevBanner() {
    const bannerPics = document.querySelectorAll('.banner--pic')
    bannerPics.forEach((bannerPic, index) => {
        gripPics.prepend(bannerPics[bannerPics.length - 1])
        if (index === 3) {
            const nthDisplay = document.getElementById(`${bannerPic.id}`)
            bannerPic.children[1].classList.remove('background-banner-pic-from-behind')
            nthDisplay.style.animation = "animationRotatePrev 1.5s linear forwards"
            nthDisplay.addEventListener('animationend', (evt) => {
                nthDisplay.style.animation = ""
            })
        } else {
            bannerPic.children[1].classList.add('background-banner-pic-from-behind')
        }
    })
}


// const bannerPics = document.querySelectorAll('.banner--pic')
// bannerPics.forEach((banner, index) => {
//     if (index === bannerPics.length - 2) {
//         Promise.all(
//             banner.getAnimations({subtree: true}).map((animation) => animation.finished)
//         ).then(() => {
//             banner.children[2].classList.remove('background-banner-pic-from-behind')
//         });
//     }
// })
