import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
    state('in', style({ opacity: '1' })),
    transition('void => *', [
        style({ opacity: '0' }),
        animate(300)
    ]),
    transition('* => void', [
        animate(300, style({ opacity: '0' }))
    ])
]);
