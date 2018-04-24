import { OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Message } from '../common/message';
import { MessageService } from '../common/messageservice';
import { Subscription } from 'rxjs/Subscription';
export declare class Messages implements OnInit, OnDestroy {
    messageService: MessageService;
    value: Message[];
    closable: boolean;
    style: any;
    styleClass: string;
    enableService: boolean;
    key: string;
    valueChange: EventEmitter<Message[]>;
    subscription: Subscription;
    constructor(messageService: MessageService);
    ngOnInit(): void;
    hasMessages(): boolean;
    getSeverityClass(): string;
    clear(event: any): void;
    readonly icon: string;
    ngOnDestroy(): void;
}
export declare class MessagesModule {
}
