
var mySequence = [
	// Photo
    { e: $("#user__photo"), p: { scale: 1, opacity: 1 }, o: { duration: 1000 } },

    // Main title animations
    { e: $("#article__main__title"), p: { opacity: 1 }, o: { duration: 1000 } },
    { e: $("#main__title__one"), p: { translateX: 0, opacity: 1 }, o: { duration: 1000 } },
    { e: $("#main__title__two"), p: { translateX: 0, opacity: 1 }, o: { duration: 1000, sequenceQueue: false } },
    { e: $("#main__title__legend"), p: { translateY: 0, opacity: 1, borderColor: "#fff" }, o: { duration: 1000 } },

    // Profile animations
    { e: $("#article__profile"), p: { opacity: 1 }, o: { duration: 1000 } },
    { e: $("#article__profile h3"), p: { translateY: 0, opacity: 1 }, o: { duration: 1000 } },
    { e: $("#article__profile .article__paragraph"), p: { translateY: 0, opacity: 1 }, o: { duration: 1000 } },

    { e: $(".img__svg"), p: { opacity: 1 }, o: { duration: 1000 } },    
    { e: $("#circle__one"), p: { strokeDashoffset: 524 }, o: { duration: 1000, sequenceQueue: false } },
    { e: $("#circle__two"), p: { strokeDashoffset: 224 }, o: { duration: 1000, sequenceQueue: false } },
    { e: $("#circle__three"), p: { strokeDashoffset: 124 }, o: { duration: 1000, sequenceQueue: false } },
    { e: $("#circle__four"), p: { strokeDashoffset: 424 }, o: { duration: 1000, sequenceQueue: false } },
    { e: $("#circle__five"), p: { strokeDashoffset: 54 }, o: { duration: 1000, sequenceQueue: false } },

    // Work animations
    { e: $("#article__work"), p: { opacity: 1 }, o: { duration: 1000 } },
    { e: $("#article__work h3"), p: { translateY: 0, opacity: 1 }, o: { duration: 1000 } },

    { e: $("#tag__one"), p: { translateX: 0, opacity: 1 }, o: { duration: 500 } },
    { e: $("#tag__cont__one"), p: { translateX: 0, opacity: 1 }, o: { duration: 500, sequenceQueue: false } },

    { e: $("#tag__two"), p: { translateX: 0, opacity: 1 }, o: { duration: 500 } },
    { e: $("#tag__cont__two"), p: { translateX: 0, opacity: 1 }, o: { duration: 500, sequenceQueue: false } },

    { e: $("#tag__three"), p: { translateX: 0, opacity: 1 }, o: { duration: 500 } },
    { e: $("#tag__cont__three"), p: { translateX: 0, opacity: 1 }, o: { duration: 500, sequenceQueue: false } },

    //  Education animations
    { e: $("#article__education"), p: { opacity: 1 }, o: { duration: 1000 } },
    { e: $("#article__education h3"), p: { translateY: 0, opacity: 1 }, o: { duration: 1000 } },

    { e: $("#tag__four"), p: { translateX: 0, opacity: 1 }, o: { duration: 500 } },
    { e: $("#tag__cont__four"), p: { translateX: 0, opacity: 1 }, o: { duration: 500, sequenceQueue: false } },

    { e: $("#tag__five"), p: { translateX: 0, opacity: 1 }, o: { duration: 500 } },
    { e: $("#tag__cont__five"), p: { translateX: 0, opacity: 1 }, o: { duration: 500, sequenceQueue: false } },

    //  Software animations
    { e: $("#article__software"), p: { opacity: 1 }, o: { duration: 1000 } },
    { e: $("#article__software h3"), p: { translateY: 0, opacity: 1 }, o: { duration: 1000 } },
    { e: $("#article__software h4"), p: { opacity: 1 }, o: { duration: 1000 } },

    { e: $("#rect__one"), p: { width: 150 }, o: { duration: 1000 } },
    { e: $("#rect__two"), p: { width: 197 }, o: { duration: 1000, sequenceQueue: false } },
    { e: $("#rect__three"), p: { width: 222 }, o: { duration: 1000, sequenceQueue: false } },
    { e: $("#rect__four"), p: { width: 175 }, o: { duration: 1000, sequenceQueue: false } },
    { e: $("#rect__five"), p: { width: 50 }, o: { duration: 1000, sequenceQueue: false } },
    { e: $("#rect__six"), p: { width: 250 }, o: { duration: 1000, sequenceQueue: false } },


    // Hobbies animations
    { e: $("#article__hobbies"), p: { opacity: 1 }, o: { duration: 1000 } },
    { e: $("#article__hobbies h3"), p: { translateY: 0, opacity: 1 }, o: { duration: 1000 } },
    { e: $("#article__hobbies h4"), p: { opacity: 1 }, o: { duration: 1000 } },

    { e: $(".hobbies--item"), p: { scale: 1, opacity: 1 }, o: { stagger: 750, duration: 1000 } }

];
$.Velocity.RunSequence(mySequence);