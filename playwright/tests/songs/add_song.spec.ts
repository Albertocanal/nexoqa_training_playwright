import { test, expect } from '@playwright/test';
import { HomePage } from '../page_objects/home_page';
import { AddSongPage } from '../page_objects/add_song_page';

test('Add new song',async ({ page }) => {
    await page.goto('http://localhost:8080/');

    var homePage: HomePage = new HomePage(page);
    await homePage.addButton.click();

    var addSongPage: AddSongPage = new AddSongPage(page);
    await addSongPage.fillSong('Song 1',
                         'ALbum 1', 
                         'Genre 1', 
                         'Album 1 ',
                         "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/a2/97/55/a2975589-3fdd-ea7f-afe3-a012cb99961b/197338933862.jpg/1200x1200bf-60.jpg",
                         "https://www.youtube.com/watch?v=k740hisrk_k",
                         'TAB', 
                         'lyrics');
    await addSongPage.button.click();
    await expect(homePage.songs.last()).toContainText('Song 1');

    
});