import { trigger, state, transition, style, animate, keyframes, animation, useAnimation } from '@angular/animations';


export let fade = // array of trigger functions
    trigger('fade', [
	    // create states that can be used in animations
	    state('void', style({opacity: 0, backgroundColor: 'yellow'})),
	    
	    // element goes from void state to default state -> start this style
	    // can have multiple state change expressions
	    // transition('void => *, * => void', 
	    
	    // or make bi-directional
	    // transition('void <=> *', 
	    
	    // can also use aliases
      	transition(':enter, :leave',
        // apply styles immediately during transition
        // style({ backgroundColor: 'yellow', opacity: 0}),
        // CSS applied over a period of time (2000 ms)
        // animate(2000, style({ backgroundColor: 'white', opacity: 1})),
        // with only a timing arg then the style() CSS rules will be undone over 2000 ms
        animate(2000)
    ),
]);

// can provide params and defaults for animation values
export let fadeInAnimation = animation([
   	style({opacity:0}),
  	animate('{{duration}} {{easing}}')
], {
	// defaults
	params: {
		duration: '2s',
		easing: 'ease-out'
	}
})

export let fade2 = trigger('fade2', [
  	transition(':enter', useAnimation(fadeInAnimation, {
  		// can pass params -> one, both, or none
  		params: {
  			duration: '500ms'
  		}
  	})),
    transition(':leave', useAnimation(fadeInAnimation))
])

    // from default state to void state
    // transition('* => void', [
    //   // animate(2000, style({opacity: 0}))
    //   animate(2000)
    // ])

// can assign var of functions to reuse in other animations
export let bounceOutLeftAnimation = animation(
	// can use string as time
	// duration, delay, easing type (or use cubic bezier function)
	animate('0.5s 1s ease-in', keyframes([
	// use keyframes with offset as keyframe percentage
		style({offset: .2, opacity: 1, transform: 'translateX(20px)'}),
		style({offset: 1, opacity: 1, transform: 'translateX(-100%)'})
	]))
)

export let slide = trigger('slide', [
	// on enter immediately move 10px then undone it over 2000ms
	transition(':enter', [
		style({transform: 'translateX(-10px'}),
		animate(2000)
	]),

	// call use animation to use reusable animation objects
	transition(':leave', [
		// first bg red animation is ran THEN bounceOutLeft
		style({ backgroundColor: 'red'}),
		animate(1000),
		useAnimation(bounceOutLeftAnimation)
	])
]);









