import VideoWorker from 'video-worker';
import global from 'global';
import domLoaded from 'dom-loaded';
import jarallaxVideo from './jarallax-video.esm';

// add video worker globally to fallback jarallax < 1.10 versions
global.VideoWorker = global.VideoWorker || VideoWorker;

jarallaxVideo();

// data-jarallax-video initialization
domLoaded.then(() => {
    if (typeof jarallax !== 'undefined') {
        jarallax(document.querySelectorAll('[data-jarallax-video]'));
    }
});
