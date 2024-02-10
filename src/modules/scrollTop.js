const scrollTop = () => {
    const scrollBtn = document.querySelector('.smooth-scroll');
    let timer;

    const scroll = () => {
        const top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);

	    if(top > 0) {
		    window.scrollBy(0,-100);    
	    } else clearInterval(timer);
    };

    scrollBtn.addEventListener('click', () => {  

        timer = setInterval(() => {
            scroll();
        },20)
    });

    document.addEventListener('DOMContentLoaded', () => {

        window.onscroll = () => {
            if (window.scrollY > 480) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            };
        };
    });
};

export default scrollTop;