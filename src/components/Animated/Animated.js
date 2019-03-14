import React from 'react';
import { Scene, Controller } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

const defaultTween = {
    paused: true,
    duration: .75,
    ease: 'Power3.easeInOut',
};

const defaultAnimation = {
    from: 'bottom',
    distance: 100,
};

const Animated = props => {
    const { children, animation, comp, scene = {}, tween, stagger = .1 } = props;
    const isStagger = Array.isArray(children);
    const { from, distance } = Object.assign({}, defaultAnimation, animation);

    const axis = from === 'left' || from === 'right' ? 'x' : 'y';
    const isNegative = from === 'left' || from === 'top';

    const fromTo = {
        [isStagger ? 'staggerFrom' : 'from']: { opacity: 0, [axis]: isNegative ? - distance : distance},
        [isStagger ? 'staggerTo' : 'to']: { opacity: 1, [axis]: 0 },
    };

    const composedTween = Object.assign({}, defaultTween, fromTo, tween, isStagger ? { stagger } : {});

    const createEl = (event) => React[isStagger ? 'createElement' : 'cloneElement'](isStagger ? comp ? comp : 'div' : children, props, (
        <Tween
            {...composedTween}
            playState={
                (event.type === 'enter' && event.scrollDirection === 'FORWARD') ? 'play' :
                (event.type === 'leave' && event.scrollDirection === 'REVERSE') ? 'reverse' : null
            }
        >
            {isStagger ? children : children.props.children}
        </Tween>
    ));

    return (
        <Controller>
            <Scene
                {...scene}
                triggerHook={scene.triggerHook || .7}
            >
                {(progress, event) => createEl(event)}
            </Scene>
        </Controller>
    );
};

export default Animated;