import { Page, Locator } from "@playwright/test";

export class SongViewPage{

    readonly page: Page;
    readonly editButton: Locator;
    readonly title: Locator;

    constructor(page:Page){
        this.page=page;
        this.title = this.page.locator('.song-title');
        this.editButton = this.page.locator('div.container a.btn');
    }
}