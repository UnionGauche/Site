$("#background-anim").vegas({
        delay: 5000,
        timer: false,
        shuffle: true,
        firstTransition: 'fade',
        firstTransitionDuration: 5000,
        transition: 'blur',
        transitionDuration: 2000,
        preload: true,
        overlay: true,
        slides: [
            { src: "./img/test1.png" },
            { src: "./img/test2.png" },
            { src: "./img/test3.png" }
        ]
});
