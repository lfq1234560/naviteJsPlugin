class Banner {
	constructor(arr, ele) {
		//元素
		this.ele = ele;
		//轮播数据
		this.arr = arr;
		// 最外面的盒子banner
		this.node = null;
		// 播放第几张图片的初始值
		this.count = 0;
		//存放图片的盒子
		this.node2 = null;
		//图片的宽度
		this.width = null;
		//小圆圈的盒子
		this.node3 = null;
	}
	//初始化方法
	init() {
		this.render();
		this.node3 = Array.from(this.node.querySelectorAll(".click span"));
		this.imgBanner();
		this.autoPlayWithPause();
		this.clickRight();
		this.clickLeft();
		this.clickCircle()
	}
	// 渲染UI
	render() {
		let liNode = this.arr.map((ele, index) => `<li>${ele}</li>`).join("");
		let spanNode = this.arr.map((ele, index) => `<span class=${index===0 ?'active':''}>${ele}</span>`).join("");
		this.node = document.createElement("div");
		this.node.className = "banner";
		this.node.innerHTML = `<ul>${liNode}</ul><div class="click">${spanNode}</div><div class="control"><span class="left"><</span><span class="right">></span></div>`;
		this.ele.appendChild(this.node);

	}
	//图片轮播
	imgBanner() {
		this.width = parseInt(getComputedStyle(this.node).width);
		this.node2 = this.node.querySelector("ul");
		this.interval = setInterval(() => {
			this.changePosition();
			this.sync(this.count)

		}, 1000)
	}
	//移入移出事件
	autoPlayWithPause() {
		this.node.onmouseleave = () => {
			this.imgBanner()
		}
		this.node.onmouseenter = () => {
			clearInterval(this.interval)
		}
	}
	//点击右边的控制按钮
	clickRight() {
		let oLeft = this.node.querySelector(".right");
		oLeft.onclick = () => {
			this.changePosition()
		}
	}
	//改便图片的定位
	changePosition() {
		this.count++
		if (this.count === this.arr.length) {
			this.count = 0
		}
		this.sync(this.count);
		this.node2.style.left = -this.width * this.count + "px"
	}
	//点击左边的控制按钮
	clickLeft() {
		let oRight = this.node.querySelector(".left");
		oRight.onclick = () => {
			this.count--
			if (this.count === -1) {
				this.count = this.arr.length - 1
			}
			this.sync(this.count);
			this.node2.style.left = -this.width * this.count + "px"
		}
	}
	//点击小圆圈
	clickCircle() {
		this.node3.forEach((ele, index) => {
			ele.onclick = () => {
				this.sync(index);
				this.count = index;
				this.node2.style.left = -this.width * index + "px";
			}
		})

	}
	//同步变色
	sync(index) {
		this.node3.forEach(ele => {
			ele.className = ""
		})
		this.node3[index].className = "active";
	}

}