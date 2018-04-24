import { OnDestroy, AfterViewInit, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
export declare class Draggable implements AfterViewInit, OnDestroy {
    el: ElementRef;
    domHandler: DomHandler;
    zone: NgZone;
    scope: string;
    dragEffect: string;
    dragHandle: string;
    onDragStart: EventEmitter<any>;
    onDragEnd: EventEmitter<any>;
    onDrag: EventEmitter<any>;
    handle: any;
    dragListener: any;
    mouseOverListener: any;
    mouseLeaveListener: any;
    constructor(el: ElementRef, domHandler: DomHandler, zone: NgZone);
    ngAfterViewInit(): void;
    bindDragListener(): void;
    unbindDragListener(): void;
    bindMouseListeners(): void;
    unbindMouseListeners(): void;
    drag(event: any): void;
    dragStart(event: any): void;
    dragEnd(event: any): void;
    mouseover(event: any): void;
    mouseleave(event: any): void;
    allowDrag(): boolean;
    ngOnDestroy(): void;
}
export declare class Droppable implements AfterViewInit, OnDestroy {
    el: ElementRef;
    domHandler: DomHandler;
    zone: NgZone;
    scope: string | string[];
    dropEffect: string;
    onDragEnter: EventEmitter<any>;
    onDragLeave: EventEmitter<any>;
    onDrop: EventEmitter<any>;
    constructor(el: ElementRef, domHandler: DomHandler, zone: NgZone);
    dragOverListener: any;
    ngAfterViewInit(): void;
    bindDragOverListener(): void;
    unbindDragOverListener(): void;
    dragOver(event: any): void;
    drop(event: any): void;
    dragEnter(event: any): void;
    dragLeave(event: any): void;
    allowDrop(event: any): boolean;
    ngOnDestroy(): void;
}
export declare class DragDropModule {
}
