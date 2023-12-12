import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations'

export const routeAnimations = trigger('routeAnimations', [
	transition('FormatterPage <=> PrivacyPolicyPage', [
		query(':enter, :leave', [
			style({
				top: 0,
				left: 0,
				position: 'absolute',
				willChange: 'tranform',
			}),
		]),
		query(':enter', [
			style({
				top: '30px',
				opacity: 0,
				zIndex: 2,
			}),
		]),
		query(':leave', animateChild(), { optional: true }),
		group([
			query(':leave', [animate('250ms ease-out', style({ opacity: 0, transform: 'translateX(30px)' }))], {
				optional: true,
			}),
			query(':enter', [animate('250ms ease-in', style({ opacity: 1, top: 0 }))], { optional: true }),
			query('@*', animateChild(), { optional: true }),
		]),
	]),
	transition('FormatterPageFade <=> PrivacyPolicyPageFade', [
		query(':leave', [
			style({
				top: 0,
				left: 0,
				position: 'absolute',
			}),
		]),
		query(':leave', animateChild(), { optional: true }),
		group([
			query(':leave', [animate('250ms ease-out', style({ opacity: 0 }))], { optional: true }),
			query(':enter', [animate('250ms ease-in', style({ opacity: 1 }))], { optional: true }),
			query('@*', animateChild(), { optional: true }),
		]),
	]),
])
