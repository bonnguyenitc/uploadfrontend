import { AfterViewInit, OnDestroy, ElementRef, NgZone } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
export declare class ScrollPanel implements AfterViewInit, OnDestroy {
    el: ElementRef;
    zone: NgZone;
    domHandler: DomHandler;
    style: any;
    styleClass: string;
    constructor(el: ElementRef, zone: NgZone, domHandler: DomHandler);
    containerViewChild: ElementRef;
    contentViewChild: ElementRef;
    xBarViewChild: ElementRef;
    yBarViewChild: ElementRef;
    scrollYRatio: number;
    scrollXRatio: number;
    timeoutFrame: any;
    initialized: boolean;
    lastPageY: number;
    lastPageX: number;
    isXBarClicked: boolean;
    isYBarClicked: boolean;
    ngAfterViewInit(): void;
    moveBar(): void;
    onYBarMouseDown(e: MouseEvent): void;
    onXBarMouseDown(e: MouseEvent): void;
    onDocumentMouseMove(e: MouseEvent): void;
    onMouseMoveForXBar(e: MouseEvent): void;
    onMouseMoveForYBar(e: MouseEvent): void;
    onDocumentMouseUp(e: Event): void;
    requestAnimationFrame(f: Function): void;
    ngOnDestroy(): void;
    refresh(): void;
}
export declare class ScrollPanelModule {
}
