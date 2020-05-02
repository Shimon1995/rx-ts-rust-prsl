import { animationFrameScheduler, fromEvent, range } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { add } from './add.rs';

const someDiv = document.querySelector('div');

let globalOffsetX = 0;
let globalOffsetY = 0;

function direct({
	direction,
	offset,
}: {
	direction: string;
	offset: number;
}): void {
	switch (direction) {
		case 'ArrowLeft':
			globalOffsetX -= offset;
			break;
		case 'ArrowRight':
			globalOffsetX += offset;
			break;
		case 'ArrowUp':
			globalOffsetY -= offset;
			break;
		case 'ArrowDown':
			globalOffsetY += offset;
	}
	someDiv.style.transform = `translate(${globalOffsetX}px, ${globalOffsetY}px)`;
}

fromEvent(document.body, 'keydown')
	.pipe(
		// throttleTime(2),
		mergeMap((kEvent: KeyboardEvent) =>
			range(1, 10, animationFrameScheduler).pipe(
				map((iter) => ({ offset: iter, direction: kEvent.key })),
			),
		),
	)
	.subscribe(direct);

alert(add(2, 3));
