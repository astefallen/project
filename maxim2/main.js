function replace_img(img) {
    let img_block = document.querySelector('.our_works_left')
    if (img_block) {
        img_take_active()
        img.classList.add('active')
        img_block.innerHTML = `<img src='${img.src}' />`
    }
}

function img_take_active() {
    let photos = Array.from(document.querySelectorAll('.chocolate_img'))
    photos.map(photo => photo.classList.remove('active'))
}

function arrow_replace(action) {

    let active_img = document.querySelector('.chocolate_img.active')
    let all_img = Array.from(document.querySelectorAll('.chocolate_img'))
    let index_active = all_img.indexOf(active_img)
    let count_img = all_img.length
    if (action == '-') {
        if (index_active == 0) { // фото первое
            replace_img(all_img[count_img - 1])
        }
        else {
            replace_img(all_img[index_active - 1])
        }
    }
    else if (action == '+') {

        if (count_img == index_active + 1) { // фото последнее
            replace_img(all_img[0])
        }
        else {
            replace_img(all_img[index_active + 1])
        }
    }
}


function open_modal(modal) {
    let modal_block = document.querySelector(`#${modal}`)
    console.log(modal_block)
    if (modal_block) {
        modal_block.classList.add("active")
    }
}

function close_modal(modal) {
    let modal_block = document.querySelector(`#${modal}`)
    if (modal_block) {
        modal_block.classList.remove("active")
    }
}