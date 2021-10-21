import { NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";

import Invoice from "../assets/Invoice.json"


@Component({
    selector: 'app-root',
    templateUrl: './calculator.component.html',
    styleUrls: ['calculator.component.css']
})


export class calculator {

    showA?: number;
    showB?: number;
    showC?: number;

    showR?: number;
    showRef?: number;

    showR1?: number;
    showRef1?: number;
    showRef2?: number;

    ids:string = Invoice.id;
    logos:string = Invoice.logo;
    dates:string = Invoice.date;
    froms:string = Invoice.from;
    bill:string = Invoice.bill_to;
    addresss: string = Invoice.address;
    dis: number = Invoice.discount;
    tax: number = Invoice.tax_after_discount;
    ship: number = Invoice.shipping;
    pre:number = Invoice.prepaid;

    notes: string = Invoice.note;

    //comment
    name: string = Invoice.items[0].name;
    quantity: number = Invoice.items[0].quantity;
    rate: number = Invoice.items[0].rate;
    amount: number = this.quantity * this.rate;

    name1: string = Invoice.items[1].name;
    quantity1: number = Invoice.items[1].quantity;
    rate1: number = Invoice.items[1].rate;
    amount1: number = this.quantity1 * this.rate1;

    name2: string = Invoice.items[2].name;
    quantity2: number = Invoice.items[2].quantity;
    rate2: number = Invoice.items[2].rate;
    amount2: number = this.quantity2 * this.rate2;

    name3: string = Invoice.items[3].name;
    quantity3: number = Invoice.items[3].quantity;
    rate3: number = Invoice.items[3].rate;
    amount3: number = this.quantity3 * this.rate3;

    name4: string = Invoice.items[4].name;
    quantity4: number = Invoice.items[4].quantity;
    rate4: number = Invoice.items[4].rate;
    amount4: number = this.quantity4 * this.rate4;
    //

    //cal
    sum: number = this.amount + this.amount1 + this.amount2 + this.amount3 + this.amount4;
    discount: number = this.sum * this.dis;
    taxs: number = this.tax * (this.sum - this.discount);
    total: number = this.sum - this.discount + this.taxs + this.ship;
    ton: number = this.total - this.pre;
    //

    addc(): void {
        if (this.showA && this.showB) {
            this.showC = this.showA + this.showB;
        }
        else { this.showC = 0 }
    }

    minusc(): void {
        if (this.showA && this.showB) {
            this.showC = this.showA - this.showB;
        }
        else { this.showC = 0 }
    }

    dividec(): void {
        if (this.showA && this.showB) {
            this.showC = this.showA / this.showB;
        }
        else { this.showC = 0 }
    }

    multiplyc(): void {
        if (this.showA && this.showB) {
            this.showC = this.showA * this.showB;
        }
        else { this.showC = 0 }
    }

    reset(): void {
        if (this.showA && this.showB || this.showB || this.showA) {
            this.showA = 0;
            this.showB = 0;
            this.showC = 0;
        }
    }

    circumference(): void {
        if (this.showR) {
            this.showRef = 2 * 3.14 * this.showR;
        }
        else { this.showR = 0 }
    }

    area(): void {
        if (this.showR) {
            this.showRef = this.showR * this.showR * 3.14;
        }
        else { this.showR = 0 }
    }

    reset1(): void {
        if (this.showR) {
            this.showR = 0;
            this.showRef = 0;
        }
    }

    result(): void {
        if (this.showR1) {
            this.showRef1 = this.showR1 * this.showR1 * 3.14;
        }
        else { this.showR1 = 0 }
    }

    onPercentChange(showR1: number) {
        this.showRef1 = showR1 * showR1 * 3.14;
        this.showRef2 = showR1 * 2 * 3.14

    }


    
}



