import { ExcelComponent } from "@core/ExcelComponent";

export class Table extends ExcelComponent {
    static className = "excel__table table";

    toHTML() {
        return `
                <div class="table__container">
                    <div class="table__row row">
                        <div class="row__info"></div>
                        <div class="row__data">
                            <div class="row__column">
                                A
                            </div>
                            <div class="row__column">
                                B
                            </div>
                            <div class="row__column">
                                C
                            </div>
                        </div>
                    </div>
                    <div class="table__row row">
                        <div class="row__info">
                            1
                        </div>
                        <div class="row__data">
                            <div class="row__cell selected" contenteditable></div>
                            <div class="row__cell" contenteditable></div>
                            <div class="row__cell" contenteditable></div>
                        </div>
                    </div>
                </div>
        `;
    }
}