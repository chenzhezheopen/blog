/*
 * @Author: 陈哲
 * @Date: 2022-09-22
 * @LastEditors: cz
 * @Description: 
 */



export default ( url, downloadName='文件')=>{

    function getImageDataURL(image) {
        console.log(image);
        
        // 创建画布
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        // 以图片为背景剪裁画布
        ctx?.drawImage(image, 0, 0, image.width, image.height);
        // 获取图片后缀名
        const extension = image.src.substring(image.src.lastIndexOf('.') + 1).toLowerCase();
        // 某些图片 url 可能没有后缀名，默认是 png
        return canvas.toDataURL('image/' + extension, 1);
    }
    // let button = document.createElement('button')
    // document.body.appendChild(button)
    // button.id = 'downLoadButton'
    // button.style.display = 'none'
    // let btn1:(HTMLElement | null) = document.querySelector('#downLoadButton')
    // btn1!.onclick = function(){
    //     download(fileUrl,'1111111')
    // }
    // function download(link, filename){
    //     let a = document.createElement('a')
    //     a.href = link
    //     a.download = filename || 'default.png'
    //     a.dispatchEvent(new MouseEvent('click'))
    // }
    // btn1?.click()
    const tag = document.createElement('a');
    // 此属性的值就是下载时图片的名称，注意，名称中不能有半角点，否则下载时后缀名会错误
    tag.setAttribute('download', downloadName.replace(/\./g, '。'));

    const image = new Image();
    // 设置 image 的 url, 添加时间戳，防止浏览器缓存图片
    image.src = url + '?time=' + new Date().getTime();
    //重要，设置 crossOrigin 属性，否则图片跨域会报错
    image.setAttribute('crossOrigin', 'Anonymous');
    // 图片未加载完成时操作会报错
    image.onload = () => {
        tag.href = getImageDataURL(image);
        tag.click();
    };
}