import { test, expect } from '@playwright/test';
import { HomePage } from '../page_objects/home_page';
import { SongPage } from '../page_objects/song_page';
import { addSong } from './song_helper';
import { SongViewPage } from '../page_objects/song_view_page';
import { EditSongPage } from '../page_objects/edit_song_page';

test('Edit a song',async ({ page }) => {
    await page.goto('http://192.168.0.30:8080/');
    await addSong(page,
        'Song 1',
        'Artist 1', 
        'Genre 1', 
        'Album 1 ',
        "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/a2/97/55/a2975589-3fdd-ea7f-afe3-a012cb99961b/197338933862.jpg/1200x1200bf-60.jpg",
        "https://www.youtube.com/watch?v=k740hisrk_k",
        'TAB', 
        'lyrics');
    var homePage: HomePage = new HomePage(page);
    await homePage.songs.last().locator('a.btn').click();

    var songViewPage: SongViewPage = new SongViewPage(page);
    songViewPage.editButton.click();

    var editSongPage: EditSongPage = new EditSongPage(page);
    await editSongPage.editSong(
        'Song 1M',
        'Artist 1M', 
        'Genre 1M', 
        'Album 1M ',
        "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/a2/97/55/a2975589-3fdd-ea7f-afe3-a012cb99961b/197338933862.jpg/1200x1200bf-60.jpg",
        "https://www.youtube.com/watch?v=k740hisrk_k",
        'TAB', 
        'lyrics');
    await editSongPage.button.click();
    await expect(songViewPage.title).toContainText('Song 1M');


    
});