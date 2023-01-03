const designData = [
    { class: "幸福花束課程", titel: "屬於我們的浪漫", img: "https://images.unsplash.com/photo-1523693916903-027d144a2b7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" },
    { class: "幸福花束課程", titel: "平凡中的小幸福", img: "https://images.unsplash.com/photo-1583228858294-6745cb25969e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" },
    { class: "幸福花束課程", titel: "生活中的儀式感", img: "https://images.unsplash.com/photo-1556269975-7cc2cbc82480?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
    { class: "幸福花束課程", titel: "那些年的我們", img: "https://images.unsplash.com/photo-1602136303098-f5aa2b9c9df9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=459&q=80" },
    { class: "野餐花籃課程", titel: "午後時光", img: "https://images.unsplash.com/photo-1494336877155-7fb9c6984f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
    { class: "美好生活花藝課程", titel: "自我療癒", img: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" },
    { class: "幸福花束課程", titel: "給親愛的你", img: "https://images.unsplash.com/photo-1622658641558-235f26dd270b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" }
]
const renderData = document.querySelector('#renderData');
function render(data) {
    let str = '';
    data.forEach(i => {
        str += `<div class="col ">
<div class="portfolio position-relative h-100 ">
    <img src="${i.img}"
        alt="flower" class="w-100 h-350 object-fit-cover img-fluid rounded ">
    <div
        class="position-absolute bottom-0 w-100 h-100 d-flex flex-column justify-content-end bg-dark-gradient rounded ">
        <p class="text-white  ps-4 mb-1">${i.class}</p>
        <p class="text-white  ps-4 fs-5 ">${i.titel}</p>
    </div>

</div>
</div>`

    })
    renderData.innerHTML = str;
}
render(designData);

const menu = document.querySelector('#classList');
const allList = menu.querySelectorAll('a');
menu.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.nodeName !== 'A') {
        return
    }
    allList.forEach(i => { i.classList.remove('active'); })
    e.target.classList.add('active');
    let listData;
    switch (e.target.textContent) {
        case "全部": render(designData);
            break;
        case "幸福花束課程":
            listData = designData.filter(i => i.class === "幸福花束課程")
            render(listData);
            break;
        case "野餐花籃課程": listData = designData.filter(i => i.class === "野餐花籃課程")
            render(listData);
            break;
        case "美好生活花藝課程": listData = designData.filter(i => i.class === "美好生活花藝課程")
            render(listData);
            break;
    }
})