import { ElementRef, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
import { ControlValueAccessor } from '@angular/forms';
export declare const INPUTMASK_VALUE_ACCESSOR: any;
export declare class InputMask implements OnInit, OnDestroy, ControlValueAccessor {
    el: ElementRef;
    domHandler: DomHandler;
    type: string;
    slotChar: string;
    autoClear: boolean;
    style: string;
    inputId: string;
    styleClass: string;
    placeholder: string;
    size: number;
    maxlength: number;
    tabindex: string;
    disabled: boolean;
    readonly: boolean;
    unmask: boolean;
    name: string;
    required: boolean;
    characterPattern: string;
    autoFocus: boolean;
    inputViewChild: ElementRef;
    onComplete: EventEmitter<any>;
    onFocus: EventEmitter<any>;
    onBlur: EventEmitter<any>;
    value: any;
    _mask: string;
    onModelChange: Function;
    onModelTouched: Function;
    input: HTMLInputElement;
    filled: boolean;
    defs: any;
    tests: any[];
    partialPosition: any;
    firstNonMaskPos: number;
    lastRequiredNonMaskPos: any;
    len: number;
    oldVal: string;
    buffer: any;
    defaultBuffer: string;
    focusText: string;
    caretTimeoutId: any;
    androidChrome: boolean;
    focus: boolean;
    constructor(el: ElementRef, domHandler: DomHandler);
    ngOnInit(): void;
    mask: string;
    initMask(): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    caret(first?: number, last?: number): {
        begin: any;
        end: any;
    };
    isCompleted(): boolean;
    getPlaceholder(i: number): string;
    seekNext(pos: any): any;
    seekPrev(pos: any): any;
    shiftL(begin: number, end: number): void;
    shiftR(pos: any): void;
    handleAndroidInput(e: any): void;
    onInputBlur(e: any): void;
    onKeyDown(e: any): void;
    onKeyPress(e: any): void;
    clearBuffer(start: any, end: any): void;
    writeBuffer(): void;
    checkVal(allow?: boolean): any;
    onInputFocus(event: any): void;
    onInput(event: any): void;
    handleInputChange(event: any): void;
    getUnmaskedValue(): string;
    updateModel(e: any): void;
    updateFilledState(): void;
    ngOnDestroy(): void;
}
export declare class InputMaskModule {
}
