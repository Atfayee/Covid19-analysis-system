import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'environment',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})

export class ResultComponent {
    abstract = "在新冠肺炎疫情大流行的当下，厘清疫情时空扩散与传播的特征和机制是实现科学、高效、有序的疫情防控的必然需求，地理信息技术的应用与多源地理空间大数据的挖掘在这一过程中发挥着关键作用。新型冠状病毒变异速度迅速，不同谱系的潜伏期和传播能力有所不同，进而影响其分布特征和时空演化。而当前国际上所共享的大量基因测序数据，因其元数据中包含有地理空间坐标从而具备了地理空间数据的特征。因此，利用地理学科专业优势实现对于基因测序数据和其他地理空间大数据的联合分析，有助于更好地追踪当前疫情复杂的传播动态，总结疫情时空传播模式。";
    
    constructor(public router: Router,) { }

    ngOnInit() {
        window.onload = function () {
            let oDiv = document.getElementsByClassName('timeWrap')[0];
            let oUl = document.getElementsByTagName('ul')[0];
            let oLis = oUl.getElementsByTagName('li'); // 获取ul下的所有li
            oUl.innerHTML = oUl.innerHTML + oUl.innerHTML; // 图片衔接
            oUl.style.width = oLis[0].offsetWidth * oLis.length + 'px'; // ul的宽度等于每个li的宽度乘以所有li的长度
            let speed = 2;
            function move() {
                // 如果左边横向滚动了长度一半之后，回到初始位置
                if (oUl.offsetLeft < -oUl.offsetWidth / speed) {
                    oUl.style.left = '0'
                }
                // 如果右边横向滚动的距离大于0 就让他的位置回到一半
                if (oUl.offsetLeft > 0) {
                    oUl.style.left = -oUl.offsetWidth / speed + 'px';
                }
                oUl.style.left = oUl.offsetLeft - 2 + 'px'; // 进行左横向滚动
                // oUl.style.left = oUl.offsetLeft + speed + 'px'; // 进行右横向滚动
            }
            // 调用方法
            let timer = setInterval(move, 30);
            console.log(oUl);
            // 鼠标指向的时候 暂停
            oDiv.addEventListener("mouseenter", function () {
                clearInterval(timer);
            });
            // 鼠标离开之后 继续滚动
            oDiv.addEventListener("mouseleave", function () {
                timer = setInterval(move, 30)
            });
            // oDiv.addEventListener("click", function(){
            //     console.log("my");
            // })
            // oDiv.onmouseover = function () {
            //     // clearTimeout(timer);
            //     clearInterval(timer);
            // }
            // oDiv.onmouseout = function () {
            //     timer = setInterval(move, 30)
            // }
        }
    }
}