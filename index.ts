import {
	fromEvent,
	interval,
	animationFrameScheduler,
	of,
	Subscription,
	Observable,
	asyncScheduler,
	from,
	timer,
} from 'rxjs';
import {
	timeout,
	map,
	takeUntil,
	take,
	observeOn,
	takeWhile,
	takeLast,
	tap,
	delay,
	debounceTime,
} from 'rxjs/operators';

import hi from './add';
import { log } from 'util';
import { AsyncScheduler } from 'rxjs/internal/scheduler/AsyncScheduler';
// import RS from './add.rs';

const box = document.querySelector('div#box') as HTMLElement;
let x = 0;
let y = 0;

// let key: string;
// 	// map((event: KeyboardEvent) => event.key === 'ArrowUp' && true),
// 	// takeUntil(interval(10_000)),
// 	// take(10),

// let frame: Subscription;

// fromEvent(document.body, 'keydown')
// 	.pipe(map((e: KeyboardEvent) => of(e.key, animationFrameScheduler)))
// 	.subscribe((s) => s.subscribe(checkDir));
// .pipe(tap(console.log));
// observeOn(animationFrameScheduler),
// of(evt, frame).subscribe();
// .subscribe((e) => {});

// evt.schedule();

// const cy = 0;
// const cx = 0;

// const keyup = fromEvent(document.body, 'keyup')
// 	.pipe
// 	// map((event: KeyboardEvent) => event.key === 'ArrowUp' && true),
// 	// takeUntil(interval(10_000)),
// 	()
// 	.subscribe(() => {
// 		flag = false;
// 	});
// const flag = false;

function s() {
	// flag = true;
	// if (flag) {
	// checkDir(key);
	// requestAnimationFrame(s);
	// }
}

const checkDir = (k: string) => {
	console.log(k);
	if (k === 'ArrowRight') {
		x += 100;
	} else if (k === 'ArrowLeft') {
		x -= 150;
	} else if (k === 'ArrowUp') {
		y -= 150;
	} else if (k === 'ArrowDown') {
		y += 150;
	}
	box.style.transform = `translate(${x}px, ${y}px)`;
};

// console.log(RS.add(2, 3));
// console.log(process.env.HELLO);

from(
	['ArrowLeft', 'ArrowUp', 'ArrowLeft', 'ArrowDown'],
	animationFrameScheduler,
)
	.pipe()
	.subscribe(checkDir);
