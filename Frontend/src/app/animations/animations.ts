import { trigger, state, animate, transition, style, query, stagger, keyframes, group } from '@angular/animations';
import { Optional } from '@angular/core';
import { Transform } from 'stream';

export const Animations = [
    trigger('mover-fotografias', [
        transition('* => right', [
            style({ transform: 'translateX(100%)' }),
            query('.btn-leer-mas', style({ Transform: 'scale(0.2)', opacity:0, background: '#fff'})),
            query('.txt-leer-mas', style({ opacity: 0 })),
            query('.linea-inferior',  style({ left: '100%'})),
            query('.data-fotografia', style({ opacity: 0, transform: 'translateX(20%)' })),
            group([
                animate('1000ms 500ms cubic-bezier(0.23, 1, 0.32, 1)', style('*')),
                query('.btn-leer-mas', animate('600ms 1200ms cubic-bezier(0.23, 0.46, 0.45, 0.94)', keyframes([
                    style({opacity: 1, transform: 'scale(1)', offset: 0.8}),
                    style({background: 'transparent', offset: 0.8})
                ]))),
                query('.txt-leer-mas', animate('300ms 1200ms cubic-bezier(0.23, 0.46, 0.45, 0.94)', style('*'))),
                query('.linea-inferior', animate('300ms 900ms cubic-bezier(0.23, 0.46, 0.45, 0.94)', style('*'))),
                query('.data-fotografia', animate('300ms 900ms cubic-bezier(0.23, 0.46, 0.45, 0.94)', style('*')))
            ])
        ]),
        transition('* => left', [
            style({ transform: 'translateX(-100%)' }),
            query('.btn-leer-mas', style({ Transform: 'scale(0.2)', opacity:0, background: '#fff'})),
            query('.txt-leer-mas', style({ opacity: 0 })),
            query('.linea-inferior',  style({ right: '100%'})),
            query('.data-fotografia', style({ opacity: 0, transform: 'translateX(20%)' })),
            group([
                animate('1000ms 500ms cubic-bezier(0.23, 1, 0.32, 1)', style('*')),
                query('.btn-leer-mas', animate('600ms 1200ms cubic-bezier(0.23, 0.46, 0.45, 0.94)', keyframes([
                    style({opacity: 1, transform: 'scale(1)', offset: 0.8}),
                    style({background: 'transparent', offset: 0.8})
                ]))),
                query('.txt-leer-mas', animate('300ms 1200ms cubic-bezier(0.23, 0.46, 0.45, 0.94)', style('*'))),
                query('.linea-inferior', animate('300ms 900ms cubic-bezier(0.23, 0.46, 0.45, 0.94)', style('*'))),
                query('.data-fotografia', animate('300ms 900ms cubic-bezier(0.23, 0.46, 0.45, 0.94)', style('*')))
            ])
        ]),
        transition('* => void', [
            style({ 'z-index': 0 }),
            animate('1500ms', keyframes([
                style({ opacity: 0.5, offset: 0.3 }),
                style({ opacity: 0, offset: 1 }),
            ]))
        ])
    ]),
    trigger('show-thumbs', [
        transition('void=>*', [
            style({ background: 'rgba(51, 51, 51, 0)' }),
            query('.item-fotografia', style({ transform: 'translateY(100%)' })),
            query('.numero-fotografia', style({ opacity: 0, transform: 'scale(0)' })), 
            query('.item-fotografia-seleccionada', style({transform: 'translateY(-100%)' })),
            animate('300ms', style('*')),
            group([
                query('.item-fotografia', stagger(40, [
                    animate('800ms 100ms cubic-bezier(0.165, 0.84, 0.44, 1)', style('*'))
                ])),
                query('.numero-fotografia', animate('300ms', style('*'))),
                query('.item-fotografia-seleccionada', animate('800ms 100ms cubic-bezier(0.165, 0.84, 0.44, 1)', style('*')))
            ])
        ]),
        transition('*=>void', [
            group([
                animate('200ms 300ms', style({opacity: 0})),
                query('.item-fotografia', stagger(40, [
                    animate('800ms cubic-bezier(0.165, 0.84, 0.44, 1)', style({transform: 'translateY(100%)'}))
                ]))
            ])
        ])
    ]),
    trigger('anim-listado', [
        transition('*=>*', [
            query('.grilla', style({ transform: 'translateY(30px)', opacity: 0 }), { optional: true }),
            query('.grilla', stagger(20, [
                animate('300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style('*'))
            ]), { optional: true })
        ]),
    ]),
    trigger('anim-admin', [
        transition(':enter', [
            query('.options', style({ height: '0px' })),
            query('.options', animate('400ms cubic-bezier(0.6, 0.885, 0.32, 1.275)', style('*')))
        ]),
        transition(':leave', [
            query('.content', animate('200ms cubic-bezier(0.175, -0.28, 0.735, 0.045)', style({ opacity: 0, transform: 'translateY(40px)'}))),
            query('.options', animate('200ms cubic-bezier(0.175, -0.28, 0.735, 0.045)', style({ height: '0px' })))

        ])
    ])
];